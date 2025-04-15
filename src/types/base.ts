export type ISO8601 = string

/**
 * 共通リクエスト
 */
export type BaseQuery = {
  /** 検索の開始位置（1以上、デフォルト:1） */
  start: number
  /** 取得件数（1〜100、デフォルト:10） */
  count: number
}

/**
 * 共通レスポンス
 */
export type BaseResponse = {
  /* 含まれる検索結果の件数 */
  results_returned: number
  /* 検索結果の総件数 */
  results_available: number
  /* 検索結果の開始位置 */
  results_start: number
}
