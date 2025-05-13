# Exit
<!-- Instruction: message -->


Input:
```
time: {{workflow.colombiaTime}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
usa el siguiente template:

Disculpame, pero sigo sin entender, para evitar malentendidos, voy a pedirle a un compañero que se comunique con usted, a la mayor brevedad posible, feliz {día | tarde | noche}.

consideraciones:
- obten la hora actual de colombia para determinar si es dia o tarde o noche para el usuario
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /** mensaje del bot */
"message": string
}
```
