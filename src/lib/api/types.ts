export interface ApiResponse<T = unknown> {
  data: T
  status: number
  statusText: string
}

export interface ApiError {
  message: string
  status: number
  data?: unknown
}

export interface ApiConfig {
  baseURL: string
  headers?: Record<string, string>
}

export interface ApiRequestConfig {
  headers?: Record<string, string>
  params?: Record<string, unknown>
}
