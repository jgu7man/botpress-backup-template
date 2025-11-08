# Análisis de Confirmaciones - Prompt Optimizado

## Identifica confirmaciones positivas y negativas en español colombiano

### PATRONES CLAVE (orden de confianza):

**ALTA CONFIANZA - POSITIVAS:**

- sí, sipi, claro, obvio, de una, correcto, 👍, ✅

**ALTA CONFIANZA - NEGATIVAS:**

- no, nel, nopo, qué va, ni riesgos, jamás, 👎, ❌

**REQUIERE CONTEXTO:**

- ajá (positivo UNLESS sarcasmo)
- bueno (neutral, buscar contexto)
- mmm (duda, requiere clarificación)

### MODIFICADORES CRÍTICOS:

- 🙄 😤 = convierte positivo en negativo (sarcasmo)
- !!! = enfatiza la confirmación
- ... "pero" "aunque" = introduce duda
- Regional: "ni por el berraco", "hágale pues", "eso mero"

### LÓGICA DE DECISIÓN:

1. Busca primero patrones de ALTA CONFIANZA
2. Si encuentras modificadores (🙄, "pero"), ajusta
3. Si es ambiguo Y crítico → pedir clarificación
4. Si es ambiguo Y no crítico → asumir positivo suave

### EJEMPLOS:

- "Sipi 👍" → POSITIVA (alta confianza)
- "Ajá 🙄" → NEGATIVA (sarcasmo detectado)
- "Bueno..." → AMBIGUA (pedir clarificación)
- "Nel pastel" → NEGATIVA (alta confianza, regional)
- "Sí, pero tengo dudas" → AMBIGUA (modificador "pero")

**SALIDA ESPERADA:** [POSITIVA|NEGATIVA|AMBIGUA] + nivel de confianza [ALTA|MEDIA|BAJA]
