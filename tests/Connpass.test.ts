import { describe, it, expect, vi, beforeEach, Mock, afterEach } from 'vitest'
import axios from 'axios'
import { Connpass } from '../src'
import {
  dummyEventsQuery,
  dummyEventsResponse,
  dummyGroupsQuery,
  dummyGroupsResponse,
  dummyPresentationsResponse,
  dummyUsersQuery,
  dummyUsersResponse,
} from './__dummy__'

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

        expect(mockGet).toHaveBeenCalledWith(
          '/events',
          expect.objectContaining({
            params: dummyEventsQuery,
            paramsSerializer: expect.any(Object),
          }),
        )
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

  describe('イベント資料一覧取得API', () => {
    describe('正常系', () => {
      it('イベント資料一覧が取得できること', async () => {
        mockGet.mockResolvedValue({ data: dummyPresentationsResponse })

        const connpass = new Connpass('test-api-key')
        const result = await connpass.getEventPresentations('364')

        expect(mockGet).toHaveBeenCalledWith(
          '/events/364/presentations',
          expect.anything(),
        )
        expect(result).toEqual(dummyPresentationsResponse)
      })
    })

    describe('異常系', () => {
      it('APIリクエストに失敗した場合、エラーをスローすること', async () => {
        mockGet.mockRejectedValue({
          isAxiosError: true,
          response: {
            status: 404,
            statusText: 'Not Found',
          },
        })

        vi.spyOn(axios, 'isAxiosError').mockReturnValue(true)

        const connpass = new Connpass('test-api-key')

        await expect(
          connpass.getEventPresentations('invalid-id'),
        ).rejects.toThrow('APIリクエストに失敗しました: 404 Not Found')
      })

      it('予期しないエラーが発生した場合、エラーをスローすること', async () => {
        mockGet.mockRejectedValue(new Error('Something broke'))

        const connpass = new Connpass('test-api-key')

        await expect(connpass.getEventPresentations('any-id')).rejects.toThrow(
          '予期しないエラーが発生しました: Something broke',
        )
      })
    })
  })

  describe('グループ一覧取得API', () => {
    describe('正常系', () => {
      it('グループ一覧が取得できること', async () => {
        mockGet.mockResolvedValue({ data: dummyGroupsResponse })

        const connpass = new Connpass('test-api-key')
        const result = await connpass.getGroups(dummyGroupsQuery)

        expect(mockGet).toHaveBeenCalledWith(
          '/groups',
          expect.objectContaining({
            params: dummyGroupsQuery,
            paramsSerializer: expect.any(Object),
          }),
        )
        expect(result).toEqual(dummyGroupsResponse)
      })
    })

    describe('異常系', () => {
      it('APIリクエストに失敗した場合、エラーをスローすること', async () => {
        mockGet.mockRejectedValue({
          isAxiosError: true,
          response: {
            status: 400,
            statusText: 'Bad Request',
          },
        })

        vi.spyOn(axios, 'isAxiosError').mockReturnValue(true)

        const connpass = new Connpass('test-api-key')

        await expect(
          connpass.getGroups({ subdomain: ['invalid'] }),
        ).rejects.toThrow('APIリクエストに失敗しました: 400 Bad Request')
      })

      it('予期しないエラーが発生した場合、エラーをスローすること', async () => {
        mockGet.mockRejectedValue(new Error('Unexpected error'))

        const connpass = new Connpass('test-api-key')

        await expect(
          connpass.getGroups({ subdomain: ['test'] }),
        ).rejects.toThrow('予期しないエラーが発生しました: Unexpected error')
      })
    })
  })

  describe('ユーザー一覧取得API', () => {
    describe('正常系', () => {
      it('ユーザー一覧が取得できること', async () => {
        mockGet.mockResolvedValue({ data: dummyUsersResponse })

        const connpass = new Connpass('test-api-key')
        const result = await connpass.getUsers(dummyUsersQuery)

        expect(mockGet).toHaveBeenCalledWith(
          '/users',
          expect.objectContaining({
            params: dummyUsersQuery,
            paramsSerializer: expect.any(Object),
          }),
        )
        expect(result).toEqual(dummyUsersResponse)
      })
    })

    describe('異常系', () => {
      it('APIリクエストに失敗した場合、エラーをスローすること', async () => {
        mockGet.mockRejectedValue({
          isAxiosError: true,
          response: {
            status: 400,
            statusText: 'Bad Request',
          },
        })

        vi.spyOn(axios, 'isAxiosError').mockReturnValue(true)

        const connpass = new Connpass('test-api-key')

        await expect(
          connpass.getUsers({ nickname: ['invalid'] }),
        ).rejects.toThrow('APIリクエストに失敗しました: 400 Bad Request')
      })

      it('予期しないエラーが発生した場合、エラーをスローすること', async () => {
        mockGet.mockRejectedValue(new Error('Unexpected error'))

        const connpass = new Connpass('test-api-key')

        await expect(connpass.getUsers({ nickname: ['test'] })).rejects.toThrow(
          '予期しないエラーが発生しました: Unexpected error',
        )
      })
    })
  })

  describe('ユーザー所属グループ一覧取得API', () => {
    describe('正常系', () => {
      it('ユーザー所属一覧が取得できること', async () => {
        mockGet.mockResolvedValue({ data: dummyGroupsResponse })

        const connpass = new Connpass('test-api-key')
        const result = await connpass.getUserGroups('haru860')

        expect(mockGet).toHaveBeenCalledWith(
          `/users/haru860/groups`,
          expect.anything(),
        )
        expect(result).toEqual(dummyGroupsResponse)
      })
    })

    describe('異常系', () => {
      it('APIリクエストに失敗した場合、エラーをスローすること', async () => {
        mockGet.mockRejectedValue({
          isAxiosError: true,
          response: {
            status: 400,
            statusText: 'Bad Request',
          },
        })

        vi.spyOn(axios, 'isAxiosError').mockReturnValue(true)

        const connpass = new Connpass('test-api-key')

        await expect(connpass.getUserGroups('invalid')).rejects.toThrow(
          'APIリクエストに失敗しました: 400 Bad Request',
        )
      })

      it('予期しないエラーが発生した場合、エラーをスローすること', async () => {
        mockGet.mockRejectedValue(new Error('Unexpected error'))

        const connpass = new Connpass('test-api-key')

        await expect(connpass.getUserGroups('test')).rejects.toThrow(
          '予期しないエラーが発生しました: Unexpected error',
        )
      })
    })
  })

  describe('ユーザー参加イベント一覧取得API', () => {
    describe('正常系', () => {
      it('ユーザー参加イベント一覧が取得できること', async () => {
        mockGet.mockResolvedValue({ data: dummyEventsResponse })

        const connpass = new Connpass('test-api-key')
        const result = await connpass.getUserAttendedEvents('haru860')

        expect(mockGet).toHaveBeenCalledWith(
          `/users/haru860/attended_events`,
          expect.anything(),
        )
        expect(result).toEqual(dummyEventsResponse)
      })
    })

    describe('異常系', () => {
      it('APIリクエストに失敗した場合、エラーをスローすること', async () => {
        mockGet.mockRejectedValue({
          isAxiosError: true,
          response: {
            status: 400,
            statusText: 'Bad Request',
          },
        })

        vi.spyOn(axios, 'isAxiosError').mockReturnValue(true)

        const connpass = new Connpass('test-api-key')

        await expect(connpass.getUserAttendedEvents('invalid')).rejects.toThrow(
          'APIリクエストに失敗しました: 400 Bad Request',
        )
      })

      it('予期しないエラーが発生した場合、エラーをスローすること', async () => {
        mockGet.mockRejectedValue(new Error('Unexpected error'))

        const connpass = new Connpass('test-api-key')

        await expect(connpass.getUserAttendedEvents('test')).rejects.toThrow(
          '予期しないエラーが発生しました: Unexpected error',
        )
      })
    })
  })

  describe('ユーザー発表イベント一覧取得API', () => {
    describe('正常系', () => {
      it('ユーザー発表イベント一覧が取得できること', async () => {
        mockGet.mockResolvedValue({ data: dummyEventsResponse })

        const connpass = new Connpass('test-api-key')
        const result = await connpass.getUserPresenterEvents('haru860')

        expect(mockGet).toHaveBeenCalledWith(
          `/users/haru860/presenter_events`,
          expect.anything(),
        )
        expect(result).toEqual(dummyEventsResponse)
      })
    })

    describe('異常系', () => {
      it('APIリクエストに失敗した場合、エラーをスローすること', async () => {
        mockGet.mockRejectedValue({
          isAxiosError: true,
          response: {
            status: 400,
            statusText: 'Bad Request',
          },
        })

        vi.spyOn(axios, 'isAxiosError').mockReturnValue(true)

        const connpass = new Connpass('test-api-key')

        await expect(
          connpass.getUserPresenterEvents('invalid'),
        ).rejects.toThrow('APIリクエストに失敗しました: 400 Bad Request')
      })

      it('予期しないエラーが発生した場合、エラーをスローすること', async () => {
        mockGet.mockRejectedValue(new Error('Unexpected error'))

        const connpass = new Connpass('test-api-key')

        await expect(connpass.getUserPresenterEvents('test')).rejects.toThrow(
          '予期しないエラーが発生しました: Unexpected error',
        )
      })
    })
  })
})
