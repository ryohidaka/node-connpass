import { BaseQuery, BaseResponse, ISO8601 } from '.'

/**
 * ユーザー一覧のパラメータ
 */
export type GetUsersQuery = Partial<
  BaseQuery & {
    /* ニックネーム（例: ['haru860', 'ian']）  */
    nickname: string[]
  }
>

/**
 * ユーザー一覧のレスポンス
 */
export type GetUsersResponse = BaseResponse & {
  /* ユーザー一覧 */
  users: ConnpassUser[]
}

/**
 * ユーザー
 */
export type ConnpassUser = {
  /* ユーザーID */
  id: number
  /* ニックネーム */
  nickname: string
  /* 表示名 */
  display_name: string
  /* 自己紹介文 */
  description: string
  /* connpass上のURL */
  url: string
  /* ユーザーのサムネイル画像URL  */
  image_url: string
  /* 利用開始日時 (ISO-8601形式) */
  created_at: ISO8601
  /* 参加イベント数 */
  attended_event_count: number
  /* 管理イベント数 */
  organize_event_count: number
  /* 発表イベント数 */
  presenter_event_count: number
  /* ブックマークイベント数 */
  bookmark_event_count: number
}
