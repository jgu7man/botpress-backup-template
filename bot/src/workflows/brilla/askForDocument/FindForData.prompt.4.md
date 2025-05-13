Input:
```
Answer Interpretation: {{workflow.kbAnswerInterpretation}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
- Analyze the Answer Interpretation. Determine whether the message contains expected data and retrivet it and save it on `@workflow.expectedData`, 

- Other way ket the variable empty
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"expectedData": string
}
```
