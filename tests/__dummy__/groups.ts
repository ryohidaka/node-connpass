export const dummyGroupsQuery = {
  subdomain: ['testgroup'],
}

export const dummyGroupsResponse = {
  results_start: 1,
  results_returned: 1,
  results_available: 1,
  groups: [
    {
      id: 123,
      subdomain: 'testgroup',
      title: 'Test Group',
      sub_title: 'This is a test group',
      url: 'https://testgroup.connpass.com',
      description: 'A sample group for testing.',
      owner_text: 'John Doe',
      image_url: 'https://testgroup.connpass.com/image.png',
      website_url: 'https://testgroup.example.com',
      website_name: 'TestGroup Official',
      twitter_username: 'testgroup',
      facebook_url: 'https://facebook.com/testgroup',
      member_users_count: 42,
    },
  ],
}
