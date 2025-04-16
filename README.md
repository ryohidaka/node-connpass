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
  const apiKey = '<YOUR_API_KEY>'
  const client = new Connpass(apiKey)
  const { events } = await client.getEvents()
}
```

## 型定義

See [here](https://github.com/ryohidaka/node-connpass/blob/main/src/types.ts).

## リンク

- [APIリファレンス](https://connpass.com/about/api/v2/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
