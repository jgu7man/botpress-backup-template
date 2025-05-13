# financiera_message
<!-- Instruction:  -->


Input:
```
fullname:{{user.fullName}};
Colombia time: @workflow.colombiaTime;
FINANCIAL_LINK:{{workflow.financialLink}};
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
## Template:

{ "Sr." | "Sra." } {NAME}. ¿Me haría el favor de dirigirse al siguiente link para llenar los datos que le solicitan? y más tarde, será contactado por un asesor para saber como le fue en el estudio

{FINANCIAL_LINK}

Tome en consideración las siguientes recomendaciones:

1️⃣ Borrar historial de navegación
2️⃣ Cerrar todas las pestañas abiertas
3️⃣ Encontrarse en un lugar de buena iluminación ya que pide fotografía para validación facial en lo posible paredes en tonos claros.
4️⃣ Cédula física a la mano, porque la pueden pedir durante el estudio.

Espero que le vaya muy bien con el estudio. Me despido, feliz { día | tarde | noche }

## Consideraciones:

- Usa el primer nombre si tiene mas de un nombre.
- Consultar la hora de Colombia en el sistema para determinar si es de día o de noche

--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  
}
```
