/**
 * Utility function to format a date string
 * @param date - Date to format
 * @returns Formatted date string
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Utility function to handle async operations with error handling
 * @param promise - Promise to handle
 * @returns Tuple of [data, error]
 */
export async function tryCatch<T>(
  promise: Promise<T>
): Promise<[T | null, Error | null]> {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    return [null, error as Error];
  }
}

/**
 * Utility function to generate a unique ID
 * @returns A unique string ID
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
