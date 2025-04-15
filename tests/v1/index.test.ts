import { describe, expect, test, vi } from 'vitest'
import { ConnpassV1 } from '../../src'

const mockEvents = [
  {
    event_id: 1,
    title: 'Event 1',
    catch: 'Catch 1',
    description: 'Description 1',
    event_url: 'https://example.com/event/1',
    hash_tag: 'tag1',
    started_at: '2025-05-01T10:00:00+09:00',
    ended_at: '2025-05-01T12:00:00+09:00',
    limit: 100,
    event_type: 'offline',
    series: {
      id: 1,
      title: 'Series 1',
      url: 'https://example.com/series/1',
    },
    address: 'Tokyo',
    place: 'Somewhere',
    lat: '35.6895',
    lon: '139.6917',
    owner_id: 123,
    owner_nickname: 'owner1',
    owner_display_name: 'Owner One',
    accepted: 50,
    waiting: 0,
    updated_at: '2025-04-01T00:00:00+09:00',
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
            results_returned: 3,
            results_available: 3,
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
