import {
  EventType,
  GetEventsQuery,
  GetEventsResponse,
  OpenStatus,
} from '../../src'

export const dummyEventsQuery: GetEventsQuery = {
  keyword: ['React'],
  count: 1,
}

export const dummyEventsResponse: GetEventsResponse = {
  events: [
    {
      id: 1,
      title: 'Event 1',
      catch: 'Catch 1',
      description: 'Description 1',
      url: 'https://example.com/event/1',
      image_url: '',
      hash_tag: 'tag1',
      started_at: '2025-05-01T10:00:00+09:00',
      ended_at: '2025-05-01T12:00:00+09:00',
      limit: 100,
      event_type: EventType.ADVERTISEMENT,
      open_status: OpenStatus.OPEN,
      group: {
        id: 1,
        subdomain: '',
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
  ],
  results_start: 1,
  results_returned: 1,
  results_available: 1,
}
