export const dummyUsersQuery = {
  nickname: ['testuser'],
}

export const dummyUsersResponse = {
  results_start: 1,
  results_returned: 1,
  results_available: 1,
  users: [
    {
      id: 123,
      nickname: 'testuser',
      display_name: 'Test User',
      description: 'A sample user for testing.',
      url: 'https://testgroup.connpass.com',
      image_url: 'https://testuser.connpass.com/image.png',
      created_at: '2025-05-01T10:00:00+09:00',
      attended_event_count: 1,
      organize_event_count: 1,
      presenter_event_count: 1,
      bookmark_event_count: 1,
    },
  ],
}
