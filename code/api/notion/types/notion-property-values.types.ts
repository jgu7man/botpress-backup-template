/**
 * Notion API Property Values TypeScript Definitions
 * Extracted from Notion API Documentation
 * Optimized for reusability and avoiding structural duplications
 */

// ============================================================================
// SHARED/COMMON TYPES
// ============================================================================

/** ISO 8601 date time string (e.g., "2020-03-17T19:10:04.968Z") */
export type ISO8601DateTime = string;

/** UUIDv4 string identifier */
export type UUID = string;

/** Notion color options for select/multi-select options */
export type NotionColor =
  | "default"
  | "gray"
  | "brown"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink";

/** All possible property types in Notion */
export type PropertyType =
  | "rich_text"
  | "number"
  | "select"
  | "multi_select"
  | "status"
  | "date"
  | "formula"
  | "relation"
  | "rollup"
  | "title"
  | "people"
  | "files"
  | "checkbox"
  | "url"
  | "email"
  | "phone_number"
  | "created_time"
  | "created_by"
  | "last_edited_time"
  | "last_edited_by";

// ============================================================================
// BASE PROPERTY VALUE INTERFACE
// ============================================================================

/** Base property value interface - all property values extend this */
export interface BasePropertyValue {
  /** Underlying identifier for the property */
  id?: string;
  /** Type of the property (optional in property values) */
  type?: PropertyType;
}

// ============================================================================
// SHARED STRUCTURES
// ============================================================================

/** Rich text object structure used in title and rich_text properties */
export interface RichTextObject {
  type: "text";
  text: {
    content: string;
  };
  annotations?: {
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
    code?: boolean;
    color?: NotionColor;
  };
}

/** Select/Multi-select option structure */
export interface SelectOption {
  /** ID of the option (UUIDv4) - can be used instead of name for updates */
  id?: UUID;
  /** Name of the option as it appears in Notion */
  name?: string;
  /** Color of the option (not editable) */
  color?: NotionColor;
}

/** User object structure used in people, created_by, last_edited_by properties */
export interface UserObject {
  object: "user";
  id: UUID;
}

/** Page reference structure used in relation properties */
export interface PageReference {
  id: UUID;
}

/** Date object structure used in date properties */
export interface DateObject {
  /** ISO 8601 format date, with optional time */
  start: ISO8601DateTime;
  /** End date for ranges (optional) */
  end?: ISO8601DateTime;
  /** Time zone information (optional) */
  time_zone?: string;
}

/** File object structure used in files properties */
export interface FileObject {
  type: "external";
  name: string;
  external: {
    url: string;
  };
}

// ============================================================================
// FORMULA RESULT TYPES
// ============================================================================

export interface StringFormulaResult {
  type: "string";
  string: string | null;
}

export interface NumberFormulaResult {
  type: "number";
  number: number | null;
}

export interface BooleanFormulaResult {
  type: "boolean";
  boolean: boolean;
}

export interface DateFormulaResult {
  type: "date";
  date: DateObject | null;
}

export type FormulaResult =
  | StringFormulaResult
  | NumberFormulaResult
  | BooleanFormulaResult
  | DateFormulaResult;

// ============================================================================
// ROLLUP RESULT TYPES
// ============================================================================

export interface StringRollupResult {
  type: "string";
  string: string | null;
  function: string;
}

export interface NumberRollupResult {
  type: "number";
  number: number;
  function: string;
}

export interface DateRollupResult {
  type: "date";
  date: DateObject;
  function: string;
}

export interface ArrayRollupResult {
  type: "array";
  results: Array<
    | { type: "number"; number: number }
    | { type: "date"; date: DateObject }
    | { type: "string"; string: string }
  >;
  function: string;
}

export type RollupResult =
  | StringRollupResult
  | NumberRollupResult
  | DateRollupResult
  | ArrayRollupResult;

// ============================================================================
// SPECIFIC PROPERTY VALUE TYPES
// ============================================================================

export interface TitlePropertyValue extends BasePropertyValue {
  title: RichTextObject[];
}

export interface RichTextPropertyValue extends BasePropertyValue {
  rich_text: RichTextObject[];
}

export interface NumberPropertyValue extends BasePropertyValue {
  number: number;
}

export interface SelectPropertyValue extends BasePropertyValue {
  select: SelectOption;
}

export interface StatusPropertyValue extends BasePropertyValue {
  status: SelectOption;
}

export interface MultiSelectPropertyValue extends BasePropertyValue {
  multi_select: SelectOption[];
}

export interface DatePropertyValue extends BasePropertyValue {
  date: DateObject;
}

export interface FormulaPropertyValue extends BasePropertyValue {
  formula: FormulaResult;
}

export interface RelationPropertyValue extends BasePropertyValue {
  relation: PageReference[];
  has_more?: boolean;
}

export interface RollupPropertyValue extends BasePropertyValue {
  rollup: RollupResult;
}

export interface PeoplePropertyValue extends BasePropertyValue {
  people: UserObject[];
}

export interface FilesPropertyValue extends BasePropertyValue {
  files: FileObject[];
}

export interface CheckboxPropertyValue extends BasePropertyValue {
  checkbox: boolean;
}

export interface UrlPropertyValue extends BasePropertyValue {
  url: string;
}

export interface EmailPropertyValue extends BasePropertyValue {
  email: string;
}

export interface PhoneNumberPropertyValue extends BasePropertyValue {
  phone_number: string;
}

export interface CreatedTimePropertyValue extends BasePropertyValue {
  created_time: ISO8601DateTime;
}

export interface CreatedByPropertyValue extends BasePropertyValue {
  created_by: UserObject;
}

export interface LastEditedTimePropertyValue extends BasePropertyValue {
  last_edited_time: ISO8601DateTime;
}

export interface LastEditedByPropertyValue extends BasePropertyValue {
  last_edited_by: UserObject;
}

// ============================================================================
// UNION TYPE FOR ALL PROPERTY VALUES
// ============================================================================

export type PropertyValue =
  | TitlePropertyValue
  | RichTextPropertyValue
  | NumberPropertyValue
  | SelectPropertyValue
  | StatusPropertyValue
  | MultiSelectPropertyValue
  | DatePropertyValue
  | FormulaPropertyValue
  | RelationPropertyValue
  | RollupPropertyValue
  | PeoplePropertyValue
  | FilesPropertyValue
  | CheckboxPropertyValue
  | UrlPropertyValue
  | EmailPropertyValue
  | PhoneNumberPropertyValue
  | CreatedTimePropertyValue
  | CreatedByPropertyValue
  | LastEditedTimePropertyValue
  | LastEditedByPropertyValue;

// ============================================================================
// PAGE PROPERTIES OBJECT TYPE
// ============================================================================

/**
 * Properties object for a Notion page
 * Keys are property names, values are property value objects
 */
export type PageProperties = Record<string, PropertyValue>;

// ============================================================================
// UTILITY TYPES FOR PROPERTY CREATION/UPDATES
// ============================================================================

/** Property values that can be updated (excludes read-only properties) */
export type UpdatablePropertyValue =
  | TitlePropertyValue
  | RichTextPropertyValue
  | NumberPropertyValue
  | SelectPropertyValue
  | StatusPropertyValue
  | MultiSelectPropertyValue
  | DatePropertyValue
  | RelationPropertyValue
  | PeoplePropertyValue
  | FilesPropertyValue
  | CheckboxPropertyValue
  | UrlPropertyValue
  | EmailPropertyValue
  | PhoneNumberPropertyValue;

/** Property values that are read-only (computed by Notion) */
export type ReadOnlyPropertyValue =
  | FormulaPropertyValue
  | RollupPropertyValue
  | CreatedTimePropertyValue
  | CreatedByPropertyValue
  | LastEditedTimePropertyValue
  | LastEditedByPropertyValue;

/**
 * Helper type to extract property value by type
 * Usage: PropertyValueByType<"title"> returns TitlePropertyValue
 */
export type PropertyValueByType<T extends PropertyType> = T extends "title"
  ? TitlePropertyValue
  : T extends "rich_text"
  ? RichTextPropertyValue
  : T extends "number"
  ? NumberPropertyValue
  : T extends "select"
  ? SelectPropertyValue
  : T extends "status"
  ? StatusPropertyValue
  : T extends "multi_select"
  ? MultiSelectPropertyValue
  : T extends "date"
  ? DatePropertyValue
  : T extends "formula"
  ? FormulaPropertyValue
  : T extends "relation"
  ? RelationPropertyValue
  : T extends "rollup"
  ? RollupPropertyValue
  : T extends "people"
  ? PeoplePropertyValue
  : T extends "files"
  ? FilesPropertyValue
  : T extends "checkbox"
  ? CheckboxPropertyValue
  : T extends "url"
  ? UrlPropertyValue
  : T extends "email"
  ? EmailPropertyValue
  : T extends "phone_number"
  ? PhoneNumberPropertyValue
  : T extends "created_time"
  ? CreatedTimePropertyValue
  : T extends "created_by"
  ? CreatedByPropertyValue
  : T extends "last_edited_time"
  ? LastEditedTimePropertyValue
  : T extends "last_edited_by"
  ? LastEditedByPropertyValue
  : never;

// ============================================================================
// HELPER TYPE GUARDS
// ============================================================================

export const isPropertyType = (value: string): value is PropertyType => {
  const validTypes: PropertyType[] = [
    "rich_text",
    "number",
    "select",
    "multi_select",
    "status",
    "date",
    "formula",
    "relation",
    "rollup",
    "title",
    "people",
    "files",
    "checkbox",
    "url",
    "email",
    "phone_number",
    "created_time",
    "created_by",
    "last_edited_time",
    "last_edited_by",
  ];
  return validTypes.includes(value as PropertyType);
};

export const isNotionColor = (value: string): value is NotionColor => {
  const validColors: NotionColor[] = [
    "default",
    "gray",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
  ];
  return validColors.includes(value as NotionColor);
};

// ============================================================================
// CONSTANTS
// ============================================================================

/** Maximum number of page references returned in property values */
export const MAX_PAGE_REFERENCES = 25;

/** All available Notion colors */
export const NOTION_COLORS: NotionColor[] = [
  "default",
  "gray",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
];

/** All available property types */
export const PROPERTY_TYPES: PropertyType[] = [
  "rich_text",
  "number",
  "select",
  "multi_select",
  "status",
  "date",
  "formula",
  "relation",
  "rollup",
  "title",
  "people",
  "files",
  "checkbox",
  "url",
  "email",
  "phone_number",
  "created_time",
  "created_by",
  "last_edited_time",
  "last_edited_by",
];

/** Read-only property types that cannot be updated */
export const READ_ONLY_PROPERTY_TYPES: PropertyType[] = [
  "formula",
  "rollup",
  "created_time",
  "created_by",
  "last_edited_time",
  "last_edited_by",
];

/** Updatable property types */
export const UPDATABLE_PROPERTY_TYPES: PropertyType[] = [
  "rich_text",
  "number",
  "select",
  "multi_select",
  "status",
  "date",
  "relation",
  "title",
  "people",
  "files",
  "checkbox",
  "url",
  "email",
  "phone_number",
];
