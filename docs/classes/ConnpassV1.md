[**connpass-v2**](../README.md)

***

[connpass-v2](../globals.md) / ConnpassV1

# Class: ConnpassV1

Defined in: [v1/index.ts:4](https://github.com/ryohidaka/node-connpass/blob/eef41deb7cb24b91ec8c67d8e4085575b4debd33/src/v1/index.ts#L4)

## Constructors

### Constructor

> **new ConnpassV1**(): `ConnpassV1`

Defined in: [v1/index.ts:9](https://github.com/ryohidaka/node-connpass/blob/eef41deb7cb24b91ec8c67d8e4085575b4debd33/src/v1/index.ts#L9)

#### Returns

`ConnpassV1`

## Methods

### getEventsV1()

> **getEventsV1**(`query?`): `Promise`\<`GetEventsResponseV1` & `object`\>

Defined in: [v1/index.ts:17](https://github.com/ryohidaka/node-connpass/blob/eef41deb7cb24b91ec8c67d8e4085575b4debd33/src/v1/index.ts#L17)

#### Parameters

##### query?

`Partial`\<\{ `count`: `number`; `event_id`: `number`; `format`: `"json"`; `keyword`: `string`; `keyword_or`: `string`; `nickname`: `string`; `order`: `EventOrderV1`; `owner_nickname`: `string`; `series_id`: `number`; `start`: `number`; `ym`: `number`; `ymd`: `number`; \}\>

#### Returns

`Promise`\<`GetEventsResponseV1` & `object`\>
