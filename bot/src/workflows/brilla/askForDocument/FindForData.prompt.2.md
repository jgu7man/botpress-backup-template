# FindForData
<!-- Instruction: expectedData -->


Input:
```
Answer Interpretation: {{workflow.kbAnswerInterpretation}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
- Analyze the Answer Interpretation. Determine whether the message contains expected data, retrieve it, and save it on `@workflow.expectedData`, 

- Otherwise, keep the variable empty
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"expectedData": string
}
```
