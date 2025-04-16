# Connpass API Adapter for Node.js

Node.js向けconnpass APIクライアントライブラリ

> [!NOTE]
> このプロジェクトは [@potato4d](https://github.com/potato4d) による [node-connpass](https://github.com/potato4d/node-connpass) のフォークです。

## インストール

```bash
npm i connpass
```

## 使用例

> [!IMPORTANT]
> すべてのAPIエンドポイントでは、APIキーによる認証が必須です。
> 
> APIキーの発行には[ヘルプページ](https://help.connpass.com/api/)での利用申請が必要です。

```ts
import { Connpass } from 'connpass'

async function run() {
  const apiKey = '<YOUR_API_KEY>'
  const client = new Connpass(apiKey)
  const { events } = await client.getEvents()
}
```

## 型定義

See [here](https://github.com/ryohidaka/node-connpass/blob/main/src/v1/types.ts).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
