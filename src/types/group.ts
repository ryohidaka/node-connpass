import { BaseQuery, BaseResponse } from '.'

/**
 * グループ一覧のパラメータ
 */
export type GetGroupsQuery = Partial<
  BaseQuery & {
    /* サブドメイン（例: ['bpstudy', 'beproud']）  */
    subdomain: string[]
  }
>

/**
 * グループ一覧のレスポンス
 */
export type GetGroupsResponse = BaseResponse & {
  /* グループ一覧 */
  groups: ConnpassGroup[]
}

/**
 * グループ
 */
export type ConnpassGroup = {
  /* グループID */
  id: number
  /* サブドメイン */
  subdomain: string
  /* グループ名 */
  title: string
  /* サブタイトル */
  sub_title: string
  /* グループのconnpass.com上のURL */
  url: string
  /* 概要 */
  description: string
  /* 主催者 */
  owner_text: string
  /* グループ画像URL */
  image_url: string
  /* 公式サイトURL */
  website_url: string
  /* 公式サイト名 */
  website_name: string
  /* Twitterアカウント名 */
  twitter_username: string
  /* FacebookアカウントURL */
  facebook_url: string
  /* グループの全メンバー数 */
  member_users_count: number
}
