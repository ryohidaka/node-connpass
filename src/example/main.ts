import { Connpass, ConnpassEvent, EventOrder } from '..'
import { Prefecture } from '../types/prefecture'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h3>イベント一覧</h3>
    <button id="fetchButton">取得</button>
    <div id="result"></div>
  </div>
`

const apiKey = import.meta.env.VITE_CONNPASS_API_KEY
const connpass = new Connpass(apiKey)

document.getElementById('fetchButton')?.addEventListener('click', async () => {
  const response = await connpass.getEvents({
    keyword: ['python', 'go'],
    prefecture: [Prefecture.OSAKA, Prefecture.TOKYO],
    order: EventOrder.STARTED_AT,
    count: 3,
  })
  const events = response.events

  const tableHtml = `
    <table border="1" cellpadding="5">
      <thead>
        <tr>
          <th>イベントID</th>
          <th>イベント名</th>
          <th>開催日時</th>
          <th>イベント画像</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        ${events
          .map(
            (event: ConnpassEvent) => `
          <tr>
            <td>${event.id}</td>
            <td>${event.title}</td>
            <td>${event.started_at}</td>
            <td>
              <img src="${event.image_url}" width="100"></img>
            </td>
            <td>
              <a href="${event.url}" target="_blank">リンク</a>
            </td>
          </tr>
        `,
          )
          .join('')}
      </tbody>
    </table>
  `

  document.getElementById('result')!.innerHTML = tableHtml
})
