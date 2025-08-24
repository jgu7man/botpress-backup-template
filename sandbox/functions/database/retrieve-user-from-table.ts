import { leadClientsTableRecord } from "./leadClientsTable.interface";

// Tipos y constantes para mejor legibilidad y mantenimiento
type Conclusion = "COMPLEXED" | "WRONG" | "SERVED" | "TIMEDOUT" | "HOOKED" | "";

const CREDIT_PROFILES = {
  CUPO_BRILLA: "CUPO_BRILLA",
} as const;

// Mapa de campos para conversión de datos
const AIRTABLE_TO_USER_FIELD_MAP = {
  NOMBRE: "fullName",
  UBICACION_DEL_USUARIO: "location",
  UBICACION_DE_SERVICIO: "serviceLocation",
  CEDULA: "nationalID",
  NUMERO_DE_FACTURA: "brillaBillNumber",
  REPORTADO: "negativeCreditReport",
} as const;

/**
 * Servicio principal para manejar la recuperación y actualización de datos de usuario
 * Aplica el patrón Strategy para diferentes formas de procesar los datos
 */
class UserRetrievalService {
  private topics: string[] = [];

  /**
   * Punto de entrada principal - orquesta todo el proceso
   */
  async processUserRetrieval(): Promise<void> {
    const { phone } = user;
    console.log("🤖 Buscando cliente con el teléfono:", phone);

    this.initializeCreditProfileIfNeeded();

    if (!phone) {
      console.log("📞 No hay teléfono disponible para buscar");
      return;
    }

    await this.searchAndUpdateUserRecord(phone);
  }

  /**
   * Configura el perfil de crédito inicial basado en el template
   */
  private initializeCreditProfileIfNeeded(): void {
    if (env.WAB_TEMPLATE === "leads_cupo_brilla") {
      user.creditProfile = CREDIT_PROFILES.CUPO_BRILLA;
      user.purchasePreference = CREDIT_PROFILES.CUPO_BRILLA;
      this.topics.push(CREDIT_PROFILES.CUPO_BRILLA);
    }
  }

  /**
   * Busca el registro del usuario y actualiza los datos
   */
  private async searchAndUpdateUserRecord(phone: string): Promise<void> {
    try {
      const record = await this.findUserRecord(phone);

      if (record) {
        await this.processFoundRecord(record);
      } else {
        this.handleRecordNotFound();
      }
    } catch (error) {
      this.handleSearchError(error);
    }
  }

  /**
   * Busca el registro en la base de datos usando los últimos 10 dígitos del teléfono
   */
  private async findUserRecord(
    phone: string
  ): Promise<leadClientsTableRecord | null> {
    const lastTenDigitsOfPhone = phone.slice(-10);
    const recordResults = await leadClientsTable.findRecords({
      filter: {
        TELEFONO: { $regex: `${lastTenDigitsOfPhone}$` },
      },
    });

    console.log("❕ recordResults:", recordResults);
    return recordResults.length > 0 ? recordResults[0] : null;
  }

  /**
   * Procesa un registro encontrado - actualiza user y conversation
   */
  private async processFoundRecord(
    record: leadClientsTableRecord
  ): Promise<void> {
    console.log(`✅ Record found`);

    this.updateUserFromRecord(record);
    this.setUserAuthorization();
    this.updateConversationFlow(record);
  }

  /**
   * Actualiza los datos del usuario basado en el registro encontrado
   * Aplica el patrón Strategy para mapeo de campos
   */
  private updateUserFromRecord(record: leadClientsTableRecord): void {
    Object.entries(AIRTABLE_TO_USER_FIELD_MAP).forEach(
      ([airtableField, userField]) => {
        const airtableValue =
          record[airtableField as keyof leadClientsTableRecord];

        // Solo actualiza si el campo del usuario no está establecido y hay valor en Airtable
        if (!user[userField as keyof typeof user] && airtableValue) {
          (user as any)[userField] = airtableValue;
        }
      }
    );
  }

  /**
   * Establece la autorización del usuario
   */
  private setUserAuthorization(): void {
    user.authorizedPop = {
      answer: "ACCEPTED",
      askedBefore: true,
    };
  }

  /**
   * Actualiza el flujo de conversación basado en el registro
   */
  private updateConversationFlow(record: leadClientsTableRecord): void {
    const ending = record.CONCLUSION as Conclusion;
    const { flow } = conversation || {};

    conversation.flow = {
      ending: ending || flow?.ending || "",
      state: flow?.state || "",
      topics: [...this.topics, "PRE_ENGAGEMENT"],
      status: "COLD_PROSPECT",
      context: "PRE_ENGAGEMENT",
    };

    // Asegura que TEMAS sea siempre un array
    this.topics = Array.isArray(record.TEMAS) ? record.TEMAS : [];
    conversation.SummaryAgent.summary = env.WAB_CONTEXT;
  }

  /**
   * Maneja el caso cuando no se encuentra registro
   */
  private handleRecordNotFound(): void {
    console.error(`❌ Record not found 🥹`);
    conversation.flow = {
      ending: "",
      state: "",
      topics: ["PRE_ENGAGEMENT"],
      status: "COLD_PROSPECT",
      context: "PRE_ENGAGEMENT",
    };
  }

  /**
   * Maneja errores durante la búsqueda
   */
  private handleSearchError(error: unknown): void {
    console.error("❌ Error getting data:", error);
    throw error; // Re-lanza el error para manejo en nivel superior
  }
}

// Ejecución del servicio - Patrón Facade para simplificar la interfaz
const userRetrievalService = new UserRetrievalService();
await userRetrievalService.processUserRetrieval();
