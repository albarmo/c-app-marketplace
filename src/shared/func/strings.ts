export function snakeToCamel(text: string): string | null {
  if (!text) return null;

  const camelCase = text?.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });

  return camelCase;
}
