# Connpass API Adapter for Node.js

[![NPM Version](https://img.shields.io/npm/v/connpass-v2?logo=npm)](https://www.npmjs.com/package/connpass-v2)
![build](https://github.com/ryohidaka/node-connpass/workflows/Build/badge.svg)
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
}
```

## 型定義

See [here](https://github.com/ryohidaka/node-connpass/blob/main/src/types).

## リンク

- [APIリファレンス](https://connpass.com/about/api/v2/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
