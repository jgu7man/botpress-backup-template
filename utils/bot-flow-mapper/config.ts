export interface BotFlowMapperConfig {
  /** Ruta al archivo bot.json */
  botJsonPath: string;

  /** Directorio de salida para los archivos generados */
  outputDirectory: string;

  /** Opciones de generación */
  options: {
    /** Generar directorios completos por workflow */
    generateDirectories: boolean;

    /** Generar archivos de transiciones simples */
    generateTransitions: boolean;

    /** Generar archivos TypeScript con lógica condicional */
    generateTypeScript: boolean;

    /** Mostrar estadísticas del bot */
    showStats: boolean;

    /** Limpiar directorio de salida antes de generar */
    cleanOutputDirectory: boolean;
  };
}

export const defaultConfig: BotFlowMapperConfig = {
  botJsonPath: "./bot/unzipped/bot.json",
  outputDirectory: "./bot/transitions",
  options: {
    generateDirectories: true,
    generateTransitions: false,
    generateTypeScript: true,
    showStats: true,
    cleanOutputDirectory: true,
  },
};

/**
 * Configuraciones predefinidas para diferentes casos de uso
 */
export const presets = {
  /** Configuración por defecto: genera directorios y TypeScript */
  default: defaultConfig,

  /** Solo genera directorios completos */
  directoriesOnly: {
    ...defaultConfig,
    options: {
      ...defaultConfig.options,
      generateDirectories: true,
      generateTransitions: false,
      generateTypeScript: false,
    },
  } as BotFlowMapperConfig,

  /** Solo genera archivos de transiciones simples */
  transitionsOnly: {
    ...defaultConfig,
    options: {
      ...defaultConfig.options,
      generateDirectories: false,
      generateTransitions: true,
      generateTypeScript: false,
    },
  } as BotFlowMapperConfig,

  /** Solo genera archivos TypeScript */
  typeScriptOnly: {
    ...defaultConfig,
    options: {
      ...defaultConfig.options,
      generateDirectories: false,
      generateTransitions: false,
      generateTypeScript: true,
    },
  } as BotFlowMapperConfig,

  /** Genera todo: directorios, transiciones y TypeScript */
  full: {
    ...defaultConfig,
    options: {
      ...defaultConfig.options,
      generateDirectories: true,
      generateTransitions: true,
      generateTypeScript: true,
    },
  } as BotFlowMapperConfig,
};
