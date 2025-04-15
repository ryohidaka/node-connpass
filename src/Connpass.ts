import axios, { AxiosInstance } from 'axios'

/**
 * Connpass APIクライアントクラス
 */
export class Connpass {
  private readonly apiKey: string
  private readonly client: AxiosInstance
  private readonly API_VERSION: string = 'v2'

  constructor(apiKey: string) {
    this.apiKey = apiKey

    // Axiosインスタンスを作成
    this.client = axios.create({
      baseURL: `${Connpass.getBaseUrl()}/${this.API_VERSION}`,
      headers: {
        'X-API-Key': this.apiKey,
      },
    })
  }

  /**
   * 環境に応じてbaseURLを返す
   */
  private static getBaseUrl(): string {
    const isDev = import.meta.env.MODE === 'development'
    return isDev ? '/api' : 'https://connpass.com/api'
  }

  /**
   * 共通のGETリクエスト処理
   */
  private async request<T>(
    endpoint: string,
    query?: Record<string, any>,
  ): Promise<T> {
    try {
      const response = await this.client.get<T>(`/${endpoint}`, {
        params: query,
      })
      return response.data
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `APIリクエストに失敗しました: ${error.response?.status} ${error.response?.statusText}`,
        )
      } else {
        throw new Error(`予期しないエラーが発生しました: ${error.message}`)
      }
    }
  }
}
