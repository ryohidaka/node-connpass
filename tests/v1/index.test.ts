import { describe, expect, test, vi } from 'vitest'
import { ConnpassV1 } from '../../src'

const mockEvents = [
  {
    id: 364,
    event_id: 364,
    title: 'BPStudy#56',
    catch: '株式会社ビープラウドが主催するWeb系技術討論の会',
    description:
      '今回は「Python プロフェッショナル　プログラミング」執筆プロジェクトの継続的ビルドについて、お話しして頂きます。',
    url: 'https://bpstudy.connpass.com/event/364/',
    event_url: 'https://bpstudy.connpass.com/event/364/',
    image_url: 'string',
    hash_tag: 'bpstudy',
    started_at: '2012-04-17T18:30:00+09:00',
    ended_at: '2012-04-17T20:30:00+09:00',
    limit: 80,
    event_type: 'participation',
    open_status: 'open',
    series: {},
    address: '東京都豊島区東池袋3-1-1',
    place: 'BPオフィス (サンシャイン60 45階)',
    lat: '35.729402000000',
    lon: '139.718209000000',
    owner_id: 8,
    owner_nickname: 'haru860',
    owner_display_name: '佐藤 治夫',
    accepted: 80,
    waiting: 15,
    updated_at: '2012-03-20T12:07:32+09:00',
  },
]

vi.mock('axios', async () => {
  const actualAxios = await vi.importActual<typeof import('axios')>('axios')
  return {
    ...actualAxios,
    default: {
      create: () => ({
        get: vi.fn().mockResolvedValue({
          data: {
            results_returned: 1,
            results_available: 91,
            results_start: 1,
            events: mockEvents,
          },
        }),
      }),
    },
  }
})

describe('src/index.ts', () => {
  test('getEvents', async () => {
    expect.assertions(1)
    const connpass = new ConnpassV1()
    const response = await connpass.getEventsV1({ count: 1 })
    expect(response.events.length).toBe(1)
  })
})
