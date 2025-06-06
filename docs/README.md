**connpass-v2**

***

# Connpass API Adapter for Node.js

[![NPM Version](https://img.shields.io/npm/v/connpass-v2?logo=npm)](https://www.npmjs.com/package/connpass-v2)
![build](https://github.com/ryohidaka/node-connpass/workflows/Build/badge.svg)
[![codecov](https://codecov.io/gh/ryohidaka/node-connpass/graph/badge.svg?token=iGYH342pkR)](https://codecov.io/gh/ryohidaka/node-connpass)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Node.js向けconnpass APIクライアントライブラリ

> [!NOTE]
> このプロジェクトは [node-connpass](https://github.com/potato4d/node-connpass) (by [@potato4d](https://github.com/potato4d)) のフォークです。

## インストール

```bash
npm i connpass-v2
```

## 使用例

> [!IMPORTANT]
> すべてのAPIエンドポイントでは、APIキーによる認証が必須です。
>
> APIキーの発行には[ヘルプページ](https://help.connpass.com/api/)での利用申請が必要です。

```ts
import { Connpass } from 'connpass-v2'

async function run() {
  // 初期化
  const apiKey = '<YOUR_API_KEY>'
  const client = new Connpass(apiKey)

  // イベント一覧取得
  const { events } = await client.getEvents()

  // イベント資料一覧取得
  const { presentations } = await client.getEventPresentations('<EVENT_ID>')

  // グループ一覧取得
  const { groups } = await client.getGropus({
    subdomain: ['bpstudy', 'beproud'],
  })

  // ユーザー一覧取得
  const { users } = await client.getUsers({
    nickname: ['haru860', 'ian'],
  })

  // ユーザー所属グループ一覧取得
  const { groups } = await client.getUserGroups('haru860')

  // ユーザー参加イベント一覧取得
  const { events } = await client.getUserAttendedEvents('haru860')

  // ユーザー発表イベント一覧取得
  const { events } = await client.getUserPresenterEvents('haru860')
}
```

## 型定義

See [here](https://github.com/ryohidaka/node-connpass/blob/main/src/types).

## リンク

- [APIリファレンス](https://connpass.com/about/api/v2/)

## License

This project is licensed under the MIT License - see the [LICENSE](_media/LICENSE) file for details.
