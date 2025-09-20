import { useCallback, useState } from 'react'
import type { AxiosRequestConfig } from 'axios'

import { apiClient } from './client'
import type { ApiError, ApiResponse } from './types'

interface UseApiState<T> {
  data: T | null
  loading: boolean
  error: ApiError | null
}

interface UseApiReturn<T> {
  data: T | null
  loading: boolean
  error: ApiError | null
  request: <R = T>(
    method: 'get' | 'post' | 'put' | 'delete',
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ) => Promise<ApiResponse<R>>
}

export function useApi<T>(): UseApiReturn<T> {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  })

  const request = useCallback(
    async <R = T>(
      method: 'get' | 'post' | 'put' | 'delete',
      url: string,
      data?: unknown,
      config?: AxiosRequestConfig,
    ) => {
      setState((prev) => ({ ...prev, loading: true, error: null }))

      try {
        let response: ApiResponse<R>

        switch (method) {
          case 'get':
            response = await apiClient.get<R>(url, config)
            break
          case 'post':
            response = await apiClient.post<R>(url, data, config)
            break
          case 'put':
            response = await apiClient.put<R>(url, data, config)
            break
          case 'delete':
            response = await apiClient.delete<R>(url, config)
            break
        }

        setState({
          data: response.data as unknown as T,
          loading: false,
          error: null,
        })

        return response
      } catch (error) {
        const apiError = error as ApiError
        setState({
          data: null,
          loading: false,
          error: apiError,
        })
        throw apiError
      }
    },
    [],
  )

  return {
    ...state,
    request,
  }
}
