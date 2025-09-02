const propertyExtractors: Record<string, (prop: any) => any> = {
  title: (prop) =>
    Array.isArray(prop.title) && prop.title.length > 0
      ? prop.title
          .map((v: any) => v.text?.content ?? "")
          .join(" ")
          .trim()
      : "",
  rich_text: (prop) =>
    Array.isArray(prop.rich_text) && prop.rich_text.length > 0
      ? prop.rich_text
          .map((v: any) => v.text?.content ?? "")
          .join(" ")
          .trim()
      : "",
  number: (prop) => prop.number ?? "",
  phone_number: (prop) => prop.phone_number ?? "",
  url: (prop) => prop.url ?? "",
  select: (prop) => prop.select?.name ?? "",
  status: (prop) => prop.status?.name ?? "",
  multi_select: (prop) =>
    Array.isArray(prop.multi_select)
      ? prop.multi_select.map((opt: any) => opt.name).join(", ")
      : "",
  relation: (prop) =>
    Array.isArray(prop.relation)
      ? prop.relation.map((rel: any) => rel.id).join(", ")
      : "",
  date: (prop) => prop.date?.start ?? "",
  checkbox: (prop) => (prop.checkbox ? "true" : "false")
};

function extractMappedProperties(
  properties: Record<string, any>
): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [key, prop] of Object.entries(properties)) {
    const extractor = propertyExtractors[prop.type];
    result[key] = extractor ? extractor(prop) : "";
  }
  return result;
}

workflow.pageResult = extractMappedProperties(workflow.extractedObject);
