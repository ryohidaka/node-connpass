import { GetEventPresentationsResponse, PresentationType } from '../../src'

export const dummyPresentationsResponse: GetEventPresentationsResponse = {
  results_start: 1,
  results_returned: 2,
  results_available: 2,
  presentations: [
    {
      name: '資料タイトル1',
      url: 'https://example.com/presentation/1',
      presentation_type: PresentationType.BLOG,
      user: {
        id: 1,
        nickname: 'user1',
      },
      presenter: {
        id: 2,
        nickname: 'presenter1',
      },
      created_at: '2025-04-01T00:00:00+09:00',
    },
    {
      name: '資料タイトル2',
      url: 'https://example.com/presentation/2',
      presentation_type: PresentationType.MOVIE,
      user: {
        id: 3,
        nickname: 'user2',
      },
      presenter: {
        id: 4,
        nickname: 'presenter2',
      },
      created_at: '2025-04-01T00:00:00+09:00',
    },
  ],
}
