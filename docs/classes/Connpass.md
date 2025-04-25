[**connpass-v2**](../README.md)

***

[connpass-v2](../globals.md) / Connpass

# Class: Connpass

Defined in: [Connpass.ts:24](https://github.com/ryohidaka/node-connpass/blob/667a81904c823d7acdccd711ac157ba06085425b/src/Connpass.ts#L24)

Connpass APIクライアントクラス

## Constructors

### Constructor

> **new Connpass**(`apiKey`): `Connpass`

Defined in: [Connpass.ts:28](https://github.com/ryohidaka/node-connpass/blob/667a81904c823d7acdccd711ac157ba06085425b/src/Connpass.ts#L28)

#### Parameters

##### apiKey

`string`

#### Returns

`Connpass`

## Methods

### getEventPresentations()

> **getEventPresentations**(`id`, `query?`): `Promise`\<[`GetEventPresentationsResponse`](../type-aliases/GetEventPresentationsResponse.md)\>

Defined in: [Connpass.ts:103](https://github.com/ryohidaka/node-connpass/blob/667a81904c823d7acdccd711ac157ba06085425b/src/Connpass.ts#L103)

イベントに投稿された資料一覧

イベントに投稿された資料一覧を取得する。

[APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/operation/connpass_event_event_api_v2_views_event_presentation)

#### Parameters

##### id

`string`

イベントID

##### query?

[`BaseQuery`](../type-aliases/BaseQuery.md)

#### Returns

`Promise`\<[`GetEventPresentationsResponse`](../type-aliases/GetEventPresentationsResponse.md)\>

***

### getEvents()

> **getEvents**(`query?`): `Promise`\<[`GetEventsResponse`](../type-aliases/GetEventsResponse.md)\>

Defined in: [Connpass.ts:88](https://github.com/ryohidaka/node-connpass/blob/667a81904c823d7acdccd711ac157ba06085425b/src/Connpass.ts#L88)

イベント一覧

検索クエリの条件に応じたイベント一覧を取得する。

[APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/operation/connpass_event_event_api_v2_views_event_search)

#### Parameters

##### query?

`Partial`\<[`BaseQuery`](../type-aliases/BaseQuery.md) & `object`\>

イベント検索用のクエリパラメータ（省略可能）

#### Returns

`Promise`\<[`GetEventsResponse`](../type-aliases/GetEventsResponse.md)\>

イベント情報レスポンスのPromise

***

### getGroups()

> **getGroups**(`query?`): `Promise`\<[`GetGroupsResponse`](../type-aliases/GetGroupsResponse.md)\>

Defined in: [Connpass.ts:123](https://github.com/ryohidaka/node-connpass/blob/667a81904c823d7acdccd711ac157ba06085425b/src/Connpass.ts#L123)

グループ一覧

検索クエリの条件に応じたグループ一覧を取得する。

[APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97/operation/connpass_group_group_api_v2_views_group_search)

#### Parameters

##### query?

`Partial`\<[`BaseQuery`](../type-aliases/BaseQuery.md) & `object`\>

グループ検索用のクエリパラメータ（省略可能）

#### Returns

`Promise`\<[`GetGroupsResponse`](../type-aliases/GetGroupsResponse.md)\>

グループ情報レスポンスのPromise

***

### getUserAttendedEvents()

> **getUserAttendedEvents**(`nickname`, `query?`): `Promise`\<[`GetUserAttendedEventsResponse`](../type-aliases/GetUserAttendedEventsResponse.md)\>

Defined in: [Connpass.ts:173](https://github.com/ryohidaka/node-connpass/blob/667a81904c823d7acdccd711ac157ba06085425b/src/Connpass.ts#L173)

ユーザー参加イベント一覧

ユーザーが参加したイベント一覧を取得する。

[APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC/operation/connpass_account_account_api_v2_views_user_attended_event)

#### Parameters

##### nickname

`string`

ニックネーム

##### query?

[`BaseQuery`](../type-aliases/BaseQuery.md)

ユーザー参加イベント検索用のクエリパラメータ（省略可能）

#### Returns

`Promise`\<[`GetUserAttendedEventsResponse`](../type-aliases/GetUserAttendedEventsResponse.md)\>

ユーザー参加イベント情報レスポンスのPromise

***

### getUserGroups()

> **getUserGroups**(`nickname`, `query?`): `Promise`\<[`GetUserGroupsResponse`](../type-aliases/GetUserGroupsResponse.md)\>

Defined in: [Connpass.ts:152](https://github.com/ryohidaka/node-connpass/blob/667a81904c823d7acdccd711ac157ba06085425b/src/Connpass.ts#L152)

ユーザー所属グループ一覧

ユーザーが所属しているグループ一覧を取得する。

[APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC/operation/connpass_account_account_api_v2_views_user_group)

#### Parameters

##### nickname

`string`

ニックネーム

##### query?

[`BaseQuery`](../type-aliases/BaseQuery.md)

ユーザー所属グループ検索用のクエリパラメータ（省略可能）

#### Returns

`Promise`\<[`GetUserGroupsResponse`](../type-aliases/GetUserGroupsResponse.md)\>

ユーザー所属グループ情報レスポンスのPromise

***

### getUserPresenterEvents()

> **getUserPresenterEvents**(`nickname`, `query?`): `Promise`\<[`GetUserPresenterEventsResponse`](../type-aliases/GetUserPresenterEventsResponse.md)\>

Defined in: [Connpass.ts:194](https://github.com/ryohidaka/node-connpass/blob/667a81904c823d7acdccd711ac157ba06085425b/src/Connpass.ts#L194)

ユーザー発表イベント一覧

ユーザーが発表したイベント一覧を取得する。

[APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC/operation/connpass_account_account_api_v2_views_user_presenter_event)

#### Parameters

##### nickname

`string`

ニックネーム

##### query?

[`BaseQuery`](../type-aliases/BaseQuery.md)

ユーザー発表イベント検索用のクエリパラメータ（省略可能）

#### Returns

`Promise`\<[`GetUserPresenterEventsResponse`](../type-aliases/GetUserPresenterEventsResponse.md)\>

ユーザー発表イベント情報レスポンスのPromise

***

### getUsers()

> **getUsers**(`query?`): `Promise`\<[`GetUsersResponse`](../type-aliases/GetUsersResponse.md)\>

Defined in: [Connpass.ts:137](https://github.com/ryohidaka/node-connpass/blob/667a81904c823d7acdccd711ac157ba06085425b/src/Connpass.ts#L137)

ユーザー一覧

検索クエリの条件に応じたユーザー一覧を取得する。

[APIリファレンス](https://connpass.com/about/api/v2/#tag/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC/operation/connpass_account_account_api_v2_views_user_search)

#### Parameters

##### query?

`Partial`\<[`BaseQuery`](../type-aliases/BaseQuery.md) & `object`\>

ユーザー検索用のクエリパラメータ（省略可能）

#### Returns

`Promise`\<[`GetUsersResponse`](../type-aliases/GetUsersResponse.md)\>

ユーザー情報レスポンスのPromise
