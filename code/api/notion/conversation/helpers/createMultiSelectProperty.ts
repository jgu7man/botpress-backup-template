export const createMultiSelectProperty = (options: string[]) => ({
  multi_select: options.map((option) => ({ name: option })),
});
