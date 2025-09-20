import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import axios from 'axios'

import type { ApiConfig, ApiError, ApiResponse } from './types'

class ApiClient {
  private client: AxiosInstance

  constructor(config: ApiConfig) {
    this.client = axios.create({
      baseURL: config.baseURL,
      headers: {
        'Content-Type': 'application/json',
        ...config.headers,
      },
    })

    this.setupInterceptors()
  }

  private setupInterceptors() {
    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        // Get token from localStorage (or your preferred storage method)
        const token =
          typeof window !== 'undefined'
            ? localStorage.getItem('userToken')
            : null
        const language =
          typeof window !== 'undefined'
            ? localStorage.getItem('i18nextLng')
            : 'en'

        if (token) {
          config.headers.Authorization = `${token}`
        }
        config.headers['Accept-Language'] = language

        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )

    // Response interceptor
    this.client.interceptors.response.use(
      (response: AxiosResponse) => {
        // Handle token refresh if needed
        if (response.data?.token) {
          localStorage.setItem('userToken', response.data.token)
        }
        return response
      },
      (error) => {
        if (error.response?.status === 401) {
          // Handle unauthorized access
          if (typeof window !== 'undefined') {
            localStorage.removeItem('userToken')
            localStorage.removeItem('TherappUser')
            localStorage.removeItem('isAuth')
            localStorage.removeItem('userType')
            localStorage.removeItem('patientId')
            window.location.href = '/'
          }
        }
        return Promise.reject(this.handleError(error))
      },
    )
  }

  private handleError(error: AxiosError): ApiError {
    if (error.response) {
      const responseData = error.response.data as
        | { message?: string }
        | undefined
      return {
        message: responseData?.message || 'An error occurred',
        status: error.response.status,
        data: error.response.data,
      }
    }
    return {
      message: error.message || 'Network error',
      status: 0,
    }
  }

  public async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    const response = await this.client.get<T>(url, config)

    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    }
  }

  public async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    const response = await this.client.post<T>(url, data, config)
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    }
  }

  public async put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    const response = await this.client.put<T>(url, data, config)
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    }
  }

  public async delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    const response = await this.client.delete<T>(url, config)
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    }
  }
}

// Create and export a singleton instance
export const apiClient = new ApiClient({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3000/api',
})
