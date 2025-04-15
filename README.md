> **This library is no longer maintained**  
> connpass has ended free API access for individuals. Therefore, this library no longer works.

# Connpass API Adapter for Node.js

The connpass API client library for Node.js.

## Installation

```bash
npm i connpass
```

## Usage

```ts
import { ConnpassV1 } from 'connpass'

async function run() {
  const client = new ConnpassV1()
  const { events } = await client.getEventsV1()
}
```

## Type definition

See [here](https://github.com/ryohidaka/node-connpass/blob/main/src/v1/types.ts).

## LICENCE

MIT
