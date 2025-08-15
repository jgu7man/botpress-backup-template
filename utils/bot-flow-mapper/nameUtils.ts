/**
 * Utilidades para normalización de nombres de workflows
 */

/**
 * Sanitiza nombres para uso como nombres de directorio
 * Elimina emojis y caracteres especiales de forma inteligente
 */
export function sanitizeDirectoryName(name: string): string {
  return name
    // Eliminar emojis y caracteres especiales pero mantener espacios, guiones y guiones bajos
    .replace(/[^a-zA-Z0-9\s\-_]/g, "")
    // Convertir espacios múltiples en un solo guión bajo
    .replace(/\s+/g, "_")
    // Eliminar guiones bajos múltiples consecutivos
    .replace(/_+/g, "_")
    // Eliminar guiones bajos al inicio y final
    .replace(/^_+|_+$/g, "")
    // Limitar longitud
    .substring(0, 50);
}

/**
 * Sanitiza nombres para uso como nombres de archivo
 */
export function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9]/g, "");
}
