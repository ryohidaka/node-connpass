import { GetEventPresentationsResponse, PresentationType } from '../../src'

export const dummyPresentationsResponse: GetEventPresentationsResponse = {
  results_returned: 1,
  results_available: 91,
  results_start: 1,
  presentations: [
    {
      user: {
        id: 8,
        nickname: 'haru860',
      },
      url: 'https://togetter.com/li/294875',
      name: 'Togetterまとめ',
      presenter: {
        id: 8,
        nickname: 'haru860',
      },
      presentation_type: PresentationType.BLOG,
      created_at: '2012-04-29T19:44:03+09:00',
    },
  ],
}
