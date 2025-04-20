import axios, { AxiosInstance } from 'axios'
import qs from 'qs'
import {
  BaseQuery,
  GetEventPresentationsResponse,
  GetEventsQuery,
  GetEventsResponse,
  GetGroupsQuery,
  GetGroupsResponse,
  GetUserAttendedEventsQuery,
  GetUserAttendedEventsResponse,
  GetUserGroupsQuery,
  GetUserGroupsResponse,
  GetUserPresenterEventsQuery,
  GetUserPresenterEventsResponse,
  GetUsersQuery,
  GetUsersResponse,
} from '.'

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
        paramsSerializer: {
          serialize: (params) => {
            return qs.stringify(params, {
              arrayFormat: 'repeat',
            })
          },
        },
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

  /**
   * イベント一覧
   *
   * 検索クエリの条件に応じたイベント一覧を取得する。
   *
   * [APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/operation/connpass_event_event_api_v2_views_event_search)
   *
   * @param query - イベント検索用のクエリパラメータ（省略可能）
   * @returns イベント情報レスポンスのPromise
   */
  async getEvents(query?: GetEventsQuery): Promise<GetEventsResponse> {
    return this.request<GetEventsResponse>('events', query)
  }

  /**
   * イベントに投稿された資料一覧
   *
   * イベントに投稿された資料一覧を取得する。
   *
   * [APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/operation/connpass_event_event_api_v2_views_event_presentation)
   *
   * @param id - イベントID
   * @param query
   * @returns
   */
  async getEventPresentations(
    id: string,
    query?: BaseQuery,
  ): Promise<GetEventPresentationsResponse> {
    return this.request<GetEventPresentationsResponse>(
      `events/${id}/presentations`,
      query,
    )
  }

  /**
   * グループ一覧
   *
   * 検索クエリの条件に応じたグループ一覧を取得する。
   *
   * [APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97/operation/connpass_group_group_api_v2_views_group_search)
   *
   * @param query - グループ検索用のクエリパラメータ（省略可能）
   * @returns グループ情報レスポンスのPromise
   */
  async getGroups(query?: GetGroupsQuery): Promise<GetGroupsResponse> {
    return this.request<GetGroupsResponse>(`groups`, query)
  }

  /**
   * ユーザー一覧
   *
   * 検索クエリの条件に応じたユーザー一覧を取得する。
   *
   * [APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC/operation/connpass_account_account_api_v2_views_user_search)
   *
   * @param query - ユーザー検索用のクエリパラメータ（省略可能）
   * @returns ユーザー情報レスポンスのPromise
   */
  async getUsers(query?: GetUsersQuery): Promise<GetUsersResponse> {
    return this.request<GetUsersResponse>(`users`, query)
  }

  /**
   * ユーザー所属グループ一覧
   *
   * ユーザーが所属しているグループ一覧を取得する。
   *
   * [APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC/operation/connpass_account_account_api_v2_views_user_group)
   *
   * @param nickname - ニックネーム
   * @param query - ユーザー所属グループ検索用のクエリパラメータ（省略可能）
   * @returns ユーザー所属グループ情報レスポンスのPromise
   */
  async getUserGroups(
    nickname: string,
    query?: GetUserGroupsQuery,
  ): Promise<GetUserGroupsResponse> {
    return this.request<GetUserGroupsResponse>(
      `users/${nickname}/groups`,
      query,
    )
  }

  /**
   * ユーザー参加イベント一覧
   *
   * ユーザーが参加したイベント一覧を取得する。
   *
   * [APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC/operation/connpass_account_account_api_v2_views_user_attended_event)
   *
   * @param nickname - ニックネーム
   * @param query - ユーザー参加イベント検索用のクエリパラメータ（省略可能）
   * @returns ユーザー参加イベント情報レスポンスのPromise
   */
  async getUserAttendedEvents(
    nickname: string,
    query?: GetUserAttendedEventsQuery,
  ): Promise<GetUserAttendedEventsResponse> {
    return this.request<GetUserAttendedEventsResponse>(
      `users/${nickname}/attended_events`,
      query,
    )
  }

  /**
   * ユーザー発表イベント一覧
   *
   * ユーザーが発表したイベント一覧を取得する。
   *
   * [APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC/operation/connpass_account_account_api_v2_views_user_presenter_event)
   *
   * @param nickname - ニックネーム
   * @param query - ユーザー発表イベント検索用のクエリパラメータ（省略可能）
   * @returns ユーザー発表イベント情報レスポンスのPromise
   */
  async getUserPresenterEvents(
    nickname: string,
    query?: GetUserPresenterEventsQuery,
  ): Promise<GetUserPresenterEventsResponse> {
    return this.request<GetUserPresenterEventsResponse>(
      `users/${nickname}/presenter_events`,
      query,
    )
  }
}
