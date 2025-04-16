import { describe, it, expect, vi, beforeEach, Mock, afterEach } from 'vitest'
import axios from 'axios'
import { Connpass } from '../src'
import { dummyEventsQuery, dummyEventsResponse } from './__dummy__'

// axiosのモックを有効にする
vi.mock('axios')

// 型を安全に扱うためのキャスト
const mockedAxios = axios as unknown as {
  create: Mock
}

describe('Connpass', () => {
  const mockGet = vi.fn()

  beforeEach(() => {
    // createが返すAxiosInstanceのモックをセット
    mockedAxios.create.mockReturnValue({
      get: mockGet,
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('インスタンス初期化', () => {
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

  describe('イベント一覧取得API', () => {
    describe('正常系', () => {
      it('イベント一覧が取得できること', async () => {
        mockGet.mockResolvedValue({ data: dummyEventsResponse })

        const connpass = new Connpass('fake-api-key')
        const result = await connpass.getEvents(dummyEventsQuery)

        expect(mockGet).toHaveBeenCalledWith('/events', {
          params: dummyEventsQuery,
        })
        expect(result).toEqual(dummyEventsResponse)
      })
    })

    describe('異常系', () => {
      it('APIリクエストに失敗した際に、エラーをスローすること', async () => {
        mockGet.mockRejectedValue({
          isAxiosError: true,
          response: {
            status: 500,
            statusText: 'Internal Server Error',
          },
        })

        // axios.isAxiosError をモック
        vi.spyOn(axios, 'isAxiosError').mockReturnValue(true)

        const connpass = new Connpass('fake-api-key')

        await expect(
          connpass.getEvents({ keyword: ['React'] }),
        ).rejects.toThrow(
          'APIリクエストに失敗しました: 500 Internal Server Error',
        )
      })

      it('予期しないエラーが発生した際に、エラーをスローすること', async () => {
        mockGet.mockRejectedValue(new Error('Unexpected failure'))

        const connpass = new Connpass('fake-api-key')

        await expect(connpass.getEvents({ keyword: ['Vue'] })).rejects.toThrow(
          '予期しないエラーが発生しました: Unexpected failure',
        )
      })
    })
  })
})
