/**
 * Notion Properties Builder
 * Converts conversation properties to valid Notion property objects
 */
class NotionPropertiesBuilder {
  private builders = {
    title: (value: string) => ({
      title: [{ text: { content: value } }]
    }),

    rich_text: (value: string) => ({
      rich_text: [{ type: "text", text: { content: value } }]
    }),

    number: (value: string) => {
      const num = parseFloat(value);
      return !isNaN(num) ? { number: num } : null;
    },

    select: (value: string) => ({
      select: { name: value }
    }),

    multi_select: (value: string) => {
      const options = value
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      return options.length > 0
        ? { multi_select: options.map((name) => ({ name })) }
        : null;
    },

    status: (value: string) => ({
      status: { name: value }
    }),

    date: (value: string) => ({
      date: { start: value }
    }),

    checkbox: (value: string) => ({
      checkbox: value.toLowerCase() === "true" || value === "1"
    }),

    url: (value: string) => (value.startsWith("http") ? { url: value } : null),

    email: (value: string) => (value.includes("@") ? { email: value } : null),

    phone_number: (value: string) => ({
      phone_number: value
    }),

    relation: (value: string) => {
      const pageIds = value
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      return pageIds.length > 0
        ? { relation: pageIds.map((id) => ({ id })) }
        : null;
    },

    people: (value: string) => {
      const userIds = value
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      return userIds.length > 0
        ? { people: userIds.map((id) => ({ object: "user", id })) }
        : null;
    },

    files: (value: string) => {
      try {
        const files = JSON.parse(value);
        if (Array.isArray(files) && files.length > 0) {
          return {
            files: files.map((file) => ({
              type: "external",
              name: file.name,
              external: { url: file.url }
            }))
          };
        }
      } catch {
        if (value.startsWith("http")) {
          return {
            files: [
              { type: "external", name: "file", external: { url: value } }
            ]
          };
        }
      }
      return null;
    }
  };

  /**
   * Builds Notion properties from conversation properties array
   */
  build(properties: NotionProperty[]) {
    const result: Record<string, any> = {};

    // Handle case where properties might be a stringified JSON
    const parsedProperties = this.parseProperties(properties);

    // Validate that we have an array
    if (!Array.isArray(parsedProperties)) {
      console.warn(
        "Parsed properties is not an array:",
        typeof parsedProperties,
        parsedProperties
      );
      return result;
    }

    parsedProperties.forEach(({ key: id, value, type }) => {
      const builder = this.builders[type as keyof typeof this.builders];
      if (builder && value?.trim()) {
        try {
          const property = builder(value);
          if (property) result[id] = property;
        } catch (error) {
          console.warn(`Skipped invalid property ${id}:`, error);
        }
      }
    });

    return result;
  }

  private parseProperties(properties: any) {
    try {
      if (Array.isArray(properties)) {
        console.log("Using properties from array:", properties);
        return properties;
      }

      if (typeof properties === "string") {
        console.log("Parsing properties from string:", properties);
        return JSON.parse(properties);
      } else {
        console.warn(
          "⚠️ Properties is neither array nor string:",
          typeof properties,
          properties
        );
        return;
      }
    } catch (error) {
      console.error("❌ Failed to parse properties:", error, properties);
      return;
    }
  }
}

if (workflow.properties) {
  if (!workflow.body) {
    throw new Error(
      "workflow.body is undefined. Please ensure workflow.body is initialized before setting properties."
    );
  }

  workflow.body["properties"] = {
    ...workflow.body["properties"],
    ...new NotionPropertiesBuilder().build(workflow.properties)
  };
}
