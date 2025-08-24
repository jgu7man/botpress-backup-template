# Exit

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
time: {{bot.colombiaTime}}
```

## Prompt

usa el siguiente template:

Disculpame, pero sigo sin entender, para evitar malentendidos, voy a pedirle a un compañero que se comunique con usted, a la mayor brevedad posible, feliz {día | tarde | noche}.

consideraciones:
- obten la hora actual de colombia para determinar si es dia o tarde o noche para el usuario

## Output Interface

```typescript
interface Output = {
  
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
