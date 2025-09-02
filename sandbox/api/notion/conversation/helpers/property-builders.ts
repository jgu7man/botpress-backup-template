import type {
  CheckboxPropertyValue,
  DatePropertyValue,
  EmailPropertyValue,
  FilesPropertyValue,
  MultiSelectPropertyValue,
  NotionColor,
  NumberPropertyValue,
  PeoplePropertyValue,
  PhoneNumberPropertyValue,
  RelationPropertyValue,
  RichTextPropertyValue,
  SelectPropertyValue,
  StatusPropertyValue,
  TitlePropertyValue,
  UrlPropertyValue,
} from "../../types/notion-property-values.types";

/**
 * Creates a multi-select property with the given options
 */
export const createMultiSelectProperty = (
  options: string[]
): MultiSelectPropertyValue => ({
  multi_select: options.map((option) => ({ name: option })),
});

/**
 * Creates a number property with the given value
 */
export const createNumberProperty = (value: number): NumberPropertyValue => ({
  number: value,
});

/**
 * Creates a relation property pointing to a single page
 */
export const createRelationProperty = (
  pageId: string
): RelationPropertyValue => ({
  relation: [
    {
      id: pageId,
    },
  ],
});

/**
 * Creates a rich text property with plain text content
 */
export const createRichTextProperty = (
  content: string
): RichTextPropertyValue => ({
  rich_text: [
    {
      type: "text",
      text: {
        content,
      },
    },
  ],
});

/**
 * Creates a status property with the given status value
 */
export const createStatusProperty = (status: string): StatusPropertyValue => ({
  status: {
    name: status,
  },
});

/**
 * Creates a title property for a page
 */
export const buildTitle = (conversationId: string): TitlePropertyValue => ({
  title: [
    {
      type: "text",
      text: {
        content: conversationId,
      },
    },
  ],
});

/**
 * Creates a select property with a single option
 */
export const createSelectProperty = (option: string): SelectPropertyValue => ({
  select: {
    name: option,
  },
});

/**
 * Creates a date property with optional end date and timezone
 */
export const createDateProperty = (
  start: string,
  end?: string,
  time_zone?: string
): DatePropertyValue => ({
  date: {
    start,
    ...(end && { end }),
    ...(time_zone && { time_zone }),
  },
});

/**
 * Creates a checkbox property with the given boolean value
 */
export const createCheckboxProperty = (
  checked: boolean
): CheckboxPropertyValue => ({
  checkbox: checked,
});

/**
 * Creates a URL property with the given URL string
 */
export const createUrlProperty = (url: string): UrlPropertyValue => ({
  url,
});

/**
 * Creates an email property with the given email address
 */
export const createEmailProperty = (email: string): EmailPropertyValue => ({
  email,
});

/**
 * Creates a phone number property with the given phone number
 */
export const createPhoneNumberProperty = (
  phoneNumber: string
): PhoneNumberPropertyValue => ({
  phone_number: phoneNumber,
});

/**
 * Creates a people property with multiple user IDs
 */
export const createPeopleProperty = (
  userIds: string[]
): PeoplePropertyValue => ({
  people: userIds.map((id) => ({ object: "user", id })),
});

/**
 * Creates a files property with multiple external file references
 */
export const createFilesProperty = (
  files: Array<{ name: string; url: string }>
): FilesPropertyValue => ({
  files: files.map((file) => ({
    type: "external",
    name: file.name,
    external: {
      url: file.url,
    },
  })),
});

/**
 * Creates a relation property pointing to multiple pages
 */
/**
 * Creates a relation property pointing to multiple pages
 */
export const createRelationMultipleProperty = (
  pageIds: string[]
): RelationPropertyValue => ({
  relation: pageIds.map((id) => ({ id })),
});

/**
 * Creates a rich text property with formatting options
 */
export const createRichTextWithFormatting = (
  content: string,
  annotations?: {
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
    code?: boolean;
    color?: NotionColor;
  }
): RichTextPropertyValue => ({
  rich_text: [
    {
      type: "text",
      text: {
        content,
      },
      ...(annotations && { annotations }),
    },
  ],
});

/**
 * Creates a select property with optional color
 */
export const createSelectWithColor = (
  option: string,
  color?: NotionColor
): SelectPropertyValue => ({
  select: {
    name: option,
    ...(color && { color }),
  },
});

/**
 * Creates a status property with optional color
 */
export const createStatusWithColor = (
  status: string,
  color?: NotionColor
): StatusPropertyValue => ({
  status: {
    name: status,
    ...(color && { color }),
  },
});

/**
 * Creates a multi-select property with options that can have colors
 */
export const createMultiSelectWithColors = (
  options: Array<{ name: string; color?: NotionColor }>
): MultiSelectPropertyValue => ({
  multi_select: options.map((option) => ({
    name: option.name,
    ...(option.color && { color: option.color }),
  })),
});

/**
 * Creates a date property with a start and end date (date range)
 */
export const createDateRange = (
  startDate: string,
  endDate: string,
  timeZone?: string
): DatePropertyValue => ({
  date: {
    start: startDate,
    end: endDate,
    ...(timeZone && { time_zone: timeZone }),
  },
});

/**
 * Creates a people property with a single user
 */
export const createPeoplePropertySingle = (
  userId: string
): PeoplePropertyValue => ({
  people: [{ object: "user", id: userId }],
});

/**
 * Creates a files property with a single external file
 */
export const createFilesPropertySingle = (
  fileName: string,
  fileUrl: string
): FilesPropertyValue => ({
  files: [
    {
      type: "external",
      name: fileName,
      external: {
        url: fileUrl,
      },
    },
  ],
});
