/**
 * Connpass APIクライアントクラス
 * イベント情報の取得など、ConnpassのAPIを利用するための機能を提供します。
 */
export class Connpass {
  private readonly apiKey: string
  private readonly baseUrl: string
  private readonly API_VERSION: string = 'v2'

  /**
   * Connpassクライアントのインスタンスを作成します。
   * @param apiKey - Connpass APIキー
   */
  constructor(apiKey: string) {
    this.apiKey = apiKey
    this.baseUrl = Connpass.getBaseUrl()
  }

  /**
   * 実行環境（開発 or 本番）に応じてbaseUrlを返します。
   * 開発環境ではViteのプロキシ(`/api`)を使用し、
   * 本番環境では公式のConnpass API URLを使用します。(CORS対策のため)
   *
   * @returns baseUrl文字列
   */
  private static getBaseUrl(): string {
    const isDev = import.meta.env.MODE === 'development'
    return isDev ? '/api' : 'https://connpass.com/api'
  }
}
