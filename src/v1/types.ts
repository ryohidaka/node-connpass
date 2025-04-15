type ISO8601 = string

export enum EventOrderV1 {
  UPDATED_AT = 1,
  STARTED_AT = 2,
  CREATED_AT = 3,
}

export type GroupV1 = {
  id: number
  title: string
  url: string
}

export type ConnpassEventV1 = {
  event_id: number
  title: string
  catch: string
  description: string
  event_url: string
  hash_tag: string

  started_at: ISO8601
  ended_at: ISO8601

  limit: number

  event_type: string

  series: GroupV1

  address: string
  place: string
  lat: string
  lon: string
  owner_id: number
  owner_nickname: string
  owner_display_name: string
  accepted: number
  waiting: number
  updated_at: ISO8601
}

export type GetEventsQueryV1 = Partial<{
  event_id: number
  keyword: string
  keyword_or: string
  ym: number
  ymd: number
  nickname: string
  owner_nickname: string
  series_id: number
  start: number
  order: EventOrderV1
  count: number
  format: 'json'
}>

export type GetEventsResponseV1 = {
  results_returned: number
  results_available: number
  results_start: number
  events: ConnpassEventV1[]
}
