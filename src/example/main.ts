import Connpass from '..'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <button id="fetchButton">Get Event List.</button>
  <div id="result"></div>
`

const connpass = new Connpass()

document.getElementById('fetchButton')?.addEventListener('click', async () => {
  const response = await connpass.getEvents({ count: 3 })
  const events = response.events

  const tableHtml = `
    <table border="1" cellpadding="5">
      <thead>
        <tr>
          <th>Title</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        ${events
          .map(
            (event: any) => `
          <tr>
            <td>${event.title}</td>
            <td><a href="${event.event_url}" target="_blank">Link</a></td>
          </tr>
        `,
          )
          .join('')}
      </tbody>
    </table>
  `

  document.getElementById('result')!.innerHTML = tableHtml
})
