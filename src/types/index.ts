/**
 * User type definition
 */
export interface User {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

/**
 * API Response type
 */
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  success: boolean;
}

/**
 * Pagination type
 */
export interface PaginationParams {
  page: number;
  limit: number;
  total?: number;
}
