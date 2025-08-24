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

- Analyze the Answer Interpretation. Determine whether the message contains expected data, retrieve it, and save it on `@workflow.expectedData`, 

- Otherwise, keep the variable empty

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
