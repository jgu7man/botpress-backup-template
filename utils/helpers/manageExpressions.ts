export function replaceKeysExpressions(content: string) {
  return content.replace(/{{(.*?)}}/g, (match, p1) => {
    return `${p1.trim()}`;
  });
}
export function toBackticksValues(content: string) {
  return content.replace(/{{(.*?)}}/g, (match, p1) => {
    return `\$\{${p1.trim()}\}`;
  });
}
