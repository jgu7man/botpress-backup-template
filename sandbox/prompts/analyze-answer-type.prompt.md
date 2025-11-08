# Analyze Answer Type

## 🎯 Propósito

Clasificar el mensaje del usuario según las categorías definidas (prioridad fija) y determinar la acción siguiente: pedir aclaración, continuar, manejar consulta, despedida o marcar confusión.

## 📥 Entradas

- **user input** (texto del usuario)
- **summary** (opcional)
- **transcription** (si aplica)
- **user input** (evento/preview) (desde el nodo entry)

## ⚙️ Proceso (resumen)

1. **categoryAnswer**: aplica las reglas de priorización y genera `answerType` y `answerExplanation`
2. **extractQuery**: cuando corresponde, extrae la consulta en `extractedQuery`
3. **validateContinue**: decide si esperar más input, continuar o terminar
4. **WaitUserInput**: pausa el flujo hasta nueva entrada si es necesario

## 📤 Salidas y Variables Exportadas

> **Nota**: no todas las salidas exportan las mismas variables.

### 🔍 CONSULTA

- **Variables**: `answerType`, `answerExplanation`, `extractedQuery`
- **Uso**: ruta para consultas concretas que requieren respuesta/acción

### ➡️ CONTINUAR

- **Variables**: `answerType`, `answerExplanation`
- **Uso**: indicar que el flujo continúa sin consulta explícita

### 👋 DESPEDIDA

- **Variables**: `answerType`, `answerExplanation`, `state`
- **Uso**: cerrar la conversación / despedida

### 😵 CONFUNDIDO (Confused)

- **Variables**: `answerType`, `answerExplanation`, `state`
- **Uso**: no se pudo entender el contexto; requiere intervención o reintento

### 🔄 Espera / Reentrada

Flujo pasa por `WaitUserInput` y vuelve a `categoryAnswer` al recibir nuevo input.

## 📝 Notas Rápidas

### Prioridad de Categorías

_(De más alta a más baja)_

```
ASISTENCIA_HUMANA > CONFIRMACION > RESPUESTA >
RESPUESTA_Y_CONSULTA > CONSULTA > RECHAZO >
ESPERA > NO_APLICA
```

### Formato de Respuesta

- `answerExplanation` debe ser **corta** (1–2 líneas) y justificar `answerType`
