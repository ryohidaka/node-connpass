[connpass-v2](../wiki/globals) / Connpass

# Class: Connpass

Defined in: [Connpass.ts:23](https://github.com/ryohidaka/node-connpass/blob/800ebb10fa1d025fb9b43567e6fa2b5ec8ce8b50/src/Connpass.ts#L23)

Connpass APIクライアントクラス

## Constructors

### Constructor

> **new Connpass**(`apiKey`): `Connpass`

Defined in: [Connpass.ts:28](https://github.com/ryohidaka/node-connpass/blob/800ebb10fa1d025fb9b43567e6fa2b5ec8ce8b50/src/Connpass.ts#L28)

#### Parameters

##### apiKey

`string`

#### Returns

`Connpass`

## Methods

### getEventPresentations()

> **getEventPresentations**(`id`, `query?`): `Promise`\<[`GetEventPresentationsResponse`](../wiki/TypeAlias.GetEventPresentationsResponse)\>

Defined in: [Connpass.ts:103](https://github.com/ryohidaka/node-connpass/blob/800ebb10fa1d025fb9b43567e6fa2b5ec8ce8b50/src/Connpass.ts#L103)

イベントに投稿された資料一覧

イベントに投稿された資料一覧を取得する。

[APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/operation/connpass_event_event_api_v2_views_event_presentation)

#### Parameters

##### id

`string`

イベントID

##### query?

[`BaseQuery`](../wiki/TypeAlias.BaseQuery)

#### Returns

`Promise`\<[`GetEventPresentationsResponse`](../wiki/TypeAlias.GetEventPresentationsResponse)\>

***

### getEvents()

> **getEvents**(`query?`): `Promise`\<[`GetEventsResponse`](../wiki/TypeAlias.GetEventsResponse)\>

Defined in: [Connpass.ts:88](https://github.com/ryohidaka/node-connpass/blob/800ebb10fa1d025fb9b43567e6fa2b5ec8ce8b50/src/Connpass.ts#L88)

イベント一覧

検索クエリの条件に応じたイベント一覧を取得する。

[APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/operation/connpass_event_event_api_v2_views_event_search)

#### Parameters

##### query?

`Partial`\<[`BaseQuery`](../wiki/TypeAlias.BaseQuery) & `object`\>

イベント検索用のクエリパラメータ（省略可能）

#### Returns

`Promise`\<[`GetEventsResponse`](../wiki/TypeAlias.GetEventsResponse)\>

イベント情報レスポンスのPromise

***

### getGroups()

> **getGroups**(`query?`): `Promise`\<[`GetGroupsResponse`](../wiki/TypeAlias.GetGroupsResponse)\>

Defined in: [Connpass.ts:123](https://github.com/ryohidaka/node-connpass/blob/800ebb10fa1d025fb9b43567e6fa2b5ec8ce8b50/src/Connpass.ts#L123)

グループ一覧

検索クエリの条件に応じたグループ一覧を取得する。

[APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97/operation/connpass_group_group_api_v2_views_group_search)

#### Parameters

##### query?

`Partial`\<[`BaseQuery`](../wiki/TypeAlias.BaseQuery) & `object`\>

グループ検索用のクエリパラメータ（省略可能）

#### Returns

`Promise`\<[`GetGroupsResponse`](../wiki/TypeAlias.GetGroupsResponse)\>

グループ情報レスポンスのPromise

***

### getUserAttendedEvents()

> **getUserAttendedEvents**(`nickname`, `query?`): `Promise`\<[`GetUserAttendedEventsResponse`](../wiki/TypeAlias.GetUserAttendedEventsResponse)\>

Defined in: [Connpass.ts:173](https://github.com/ryohidaka/node-connpass/blob/800ebb10fa1d025fb9b43567e6fa2b5ec8ce8b50/src/Connpass.ts#L173)

ユーザー参加イベント一覧

ユーザーが参加したイベント一覧を取得する。

[APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC/operation/connpass_account_account_api_v2_views_user_attended_event)

#### Parameters

##### nickname

`string`

ニックネーム

##### query?

[`BaseQuery`](../wiki/TypeAlias.BaseQuery)

ユーザー参加イベント検索用のクエリパラメータ（省略可能）

#### Returns

`Promise`\<[`GetUserAttendedEventsResponse`](../wiki/TypeAlias.GetUserAttendedEventsResponse)\>

ユーザー参加イベント情報レスポンスのPromise

***

### getUserGroups()

> **getUserGroups**(`nickname`, `query?`): `Promise`\<[`GetUserGroupsResponse`](../wiki/TypeAlias.GetUserGroupsResponse)\>

Defined in: [Connpass.ts:152](https://github.com/ryohidaka/node-connpass/blob/800ebb10fa1d025fb9b43567e6fa2b5ec8ce8b50/src/Connpass.ts#L152)

ユーザー所属グループ一覧

ユーザーが所属しているグループ一覧を取得する。

[APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC/operation/connpass_account_account_api_v2_views_user_group)

#### Parameters

##### nickname

`string`

ニックネーム

##### query?

[`BaseQuery`](../wiki/TypeAlias.BaseQuery)

ユーザー所属グループ検索用のクエリパラメータ（省略可能）

#### Returns

`Promise`\<[`GetUserGroupsResponse`](../wiki/TypeAlias.GetUserGroupsResponse)\>

ユーザー所属グループ情報レスポンスのPromise

***

### getUserPresenterEvents()

> **getUserPresenterEvents**(`nickname`, `query?`): `Promise`\<[`GetUserPresenterEventsResponse`](../wiki/TypeAlias.GetUserPresenterEventsResponse)\>

Defined in: [Connpass.ts:194](https://github.com/ryohidaka/node-connpass/blob/800ebb10fa1d025fb9b43567e6fa2b5ec8ce8b50/src/Connpass.ts#L194)

ユーザー発表イベント一覧

ユーザーが発表したイベント一覧を取得する。

[APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC/operation/connpass_account_account_api_v2_views_user_presenter_event)

#### Parameters

##### nickname

`string`

ニックネーム

##### query?

[`BaseQuery`](../wiki/TypeAlias.BaseQuery)

ユーザー発表イベント検索用のクエリパラメータ（省略可能）

#### Returns

`Promise`\<[`GetUserPresenterEventsResponse`](../wiki/TypeAlias.GetUserPresenterEventsResponse)\>

ユーザー発表イベント情報レスポンスのPromise

***

### getUsers()

> **getUsers**(`query?`): `Promise`\<[`GetUsersResponse`](../wiki/TypeAlias.GetUsersResponse)\>

Defined in: [Connpass.ts:137](https://github.com/ryohidaka/node-connpass/blob/800ebb10fa1d025fb9b43567e6fa2b5ec8ce8b50/src/Connpass.ts#L137)

ユーザー一覧

検索クエリの条件に応じたユーザー一覧を取得する。

[APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC/operation/connpass_account_account_api_v2_views_user_search)

#### Parameters

##### query?

`Partial`\<[`BaseQuery`](../wiki/TypeAlias.BaseQuery) & `object`\>

ユーザー検索用のクエリパラメータ（省略可能）

#### Returns

`Promise`\<[`GetUsersResponse`](../wiki/TypeAlias.GetUsersResponse)\>

ユーザー情報レスポンスのPromise
