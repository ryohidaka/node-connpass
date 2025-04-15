import { describe, it, expect, vi } from 'vitest'
import axios from 'axios'
import { Connpass } from '../src'

// axiosモックを適用（__mocks__/axios.ts が自動で使われる）
vi.mock('axios')

describe('Connpass', () => {
  it('インスタンスが取得できること’', () => {
    const apiKey = 'test-api-key'
    const connpass = new Connpass(apiKey)

    expect(connpass).toBeInstanceOf(Connpass)

    // axios.create が正しく呼ばれているか確認（オプション）
    expect(axios.create).toHaveBeenCalledWith(
      expect.objectContaining({
        baseURL: expect.stringContaining('connpass'),
        headers: {
          'X-API-Key': apiKey,
        },
      }),
    )
  })
})
