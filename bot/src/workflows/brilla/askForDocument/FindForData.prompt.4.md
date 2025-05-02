Input:
```
Answer Interpretation: {{workflow.kbAnswerInterpretation}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
- Analyze the Answer Interpretation. Determine whether the message contains expected data and retrivet it and save it on `@workflow.expectedData`, 

- Other way determine if the client expresses a lack of knowledge, explicitly rejects provide information, or is unanswerable. If it is, set the reason on the `@workflow.expectedData` variable as a 2-4 words of lenght phrase.
  - Examples: 'Rechazó darlo', 'No lo tiene', 'No está disponible', 'No lo sabe'.
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"expectedData": string
}
```
