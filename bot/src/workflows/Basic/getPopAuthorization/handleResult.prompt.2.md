Input:
```
Confirmación: {{user.authorizedPop}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Considera la respuesta de confirmación a autorizar las políticas de privacidad y genera un mensaje de agradecimiento por la respuesta. 

- En un máximo de 5 palabras
- Considerando que el valor puede ser 
  - "ACCEPTED"  (Que acepta que sus datos sean guardados) 
  - "REJECTED" (No acepta el guardado de sus datos) 
- Usa un tono emotivo
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /** Mensaje de agradecimiento por la respuesta */
"popThanksMessage": string
}
```
