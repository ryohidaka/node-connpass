import { ISO8601 } from '.'

/**
 * 資料
 */
export type Presentation = {
  /**
   * 投稿者
   *
   * 資料を投稿したユーザー
   */
  user: User
  /* 資料URL */
  url: string
  /* 資料タイトル */
  name: string
  /* 資料を発表したユーザー */
  presenter: User
  /* 資料タイプ */
  presentation_type: PresentationType
  /* 投稿日時 (ISO-8601形式) */
  created_at: ISO8601
}

/**
 * 資料タイプ
 */
export enum PresentationType {
  /* スライド */
  SLIDE = 'slide',
  /* 動画 */
  MOVIE = 'movie',
  /* ブログなど */
  BLOG = 'blog',
}

/**
 * 投稿者
 */
type User = {
  /* ユーザーID */
  id: number
  /* ニックネーム */
  nickname: string
}
