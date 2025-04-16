import { BaseQuery, BaseResponse, ISO8601, Presentation } from '.'
import { Prefecture } from './prefecture'

/**
 * イベント一覧のパラメータ
 */
export type GetEventsQuery = Partial<
  BaseQuery & {
    /** イベントID（例: [364, 365]） */
    event_id: number[]
    /** キーワード(AND)検索。タイトル、キャッチ、概要、住所に部分一致 */
    keyword: string[]
    /** キーワード(OR)検索。タイトル、キャッチ、概要、住所に部分一致 */
    keyword_or: string[]
    /** イベント開催年月（例: [202304, 202305]） */
    ym: number[]
    /** イベント開催年月日（例: [20230415, 20230420]） */
    ymd: number[]
    /** 参加者のニックネーム */
    nickname: string[]
    /** 管理者のニックネーム */
    owner_nickname: string[]
    /** グループID */
    group_id: number[]
    /** サブドメイン（例: ['bpstudy']） */
    subdomain: string[]
    /** 都道府県（例: ['tokyo', 'online']） */
    prefecture: Prefecture[]
    /** 検索結果の表示順。1:更新順, 2:開催順, 3:新着順（デフォルト:1） */
    order: EventOrder
  }
>

/**
 * イベント一覧のレスポンス
 */
export type GetEventsResponse = BaseResponse & {
  /* イベント一覧 */
  events: ConnpassEvent[]
}

/**
 * イベント
 */
export type ConnpassEvent = {
  /* イベントID */
  id: number
  /* イベント名 */
  title: string
  /* キャッチ */
  catch: string
  /* 概要 */
  description: string
  /* connpass.com上のURL */
  url: string
  /* イベント画像URL */
  image_url: string
  /* X(Twitter)のハッシュタグ  */
  hash_tag: string
  /* イベント開催日時 (ISO-8601形式) */
  started_at: ISO8601
  /* イベント終了日時 (ISO-8601形式) */
  ended_at: ISO8601
  /* 定員 */
  limit: number
  /* イベント参加タイプ */
  event_type: EventType
  /* イベントの開催状態 */
  open_status: OpenStatus
  /* グループ */
  group: Group
  /* 開催場所 */
  address: string
  /* 開催会場 */
  place: string
  /* 開催会場の緯度 */
  lat: string
  /* 開催会場の経度 */
  lon: string
  /* 管理者のID */
  owner_id: number
  /* 管理者のニックネーム */
  owner_nickname: string
  /* 管理者の表示名 */
  owner_display_name: string
  /* 参加者数 */
  accepted: number
  /* 補欠者数 */
  waiting: number
  /* 更新日時 (ISO-8601形式) */
  updated_at: ISO8601
}

/**
 * 検索結果の表示順
 *
 * * `1`: 更新日時順
 * * `2`: 開催日時順
 * * `3`: 新着順
 */
export enum EventOrder {
  UPDATED_AT = 1,
  STARTED_AT = 2,
  CREATED_AT = 3,
}

/**
 * イベント参加タイプ
 */
export enum EventType {
  /* connpassで参加受付あり */
  PARTICIPATION = 'participation',
  /* 告知のみ */
  ADVERTISEMENT = 'advertisement',
}

/**
 * イベントの開催状態
 */
export enum OpenStatus {
  /* 開催前 */
  PRE_OPEN = 'preopen',
  /* 開催中 */
  OPEN = 'open',
  /* 終了 */
  CLOSE = 'close',
  /* 中止 */
  CANCELLED = 'cancelled',
}

/**
 * グループ
 */
type Group = {
  /* グループID */
  id: number
  /* サブドメイン */
  subdomain: string
  /* グループ名 */
  title: string
  /* グループのconnpass.com上のURL */
  url: string
}

/**
 * イベント資料一覧
 */
export type GetEventPresentationsResponse = BaseResponse & {
  /* 資料一覧 */
  presentations: Presentation[]
}
