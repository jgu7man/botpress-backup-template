# FindForData

**Instruction Label:** `expectedData`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `fast-model` |
| Temperature     | `0` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
Answer Interpretation: {{workflow.kbAnswerInterpretation}}
```

## Prompt

- Analyze the Answer Interpretation. Determine whether the message contains expected data and retrivet it and save it on `@workflow.expectedData`, 

- Other way determine if the client expresses a lack of knowledge, explicitly rejects provide information, or is unanswerable. If it is, set the reason on the `@workflow.expectedData` variable as a 2-4 words of lenght phrase.
  - Examples: 'Rechazó darlo', 'No lo tiene', 'No está disponible', 'No lo sabe'.

## Output Interface

```typescript
interface Output = {
  /**  */
"expectedData": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
