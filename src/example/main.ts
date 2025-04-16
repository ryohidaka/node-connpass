import { Connpass, ConnpassEvent, EventOrder } from '..'
import { Prefecture } from '../types/prefecture'
import { Presentation } from '../types'

// DOM 初期セット
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h3>イベント一覧</h3>
    <button id="fetchEvents">イベント取得</button>
    <div id="eventsResult"></div>
    <hr />
    <h3>資料一覧</h3>
    <input type="text" id="eventIdInput" placeholder="イベントIDを入力" />
    <button id="fetchPresentations">資料取得</button>
    <div id="presentationsResult"></div>
  </div>
`

const apiKey = import.meta.env.VITE_CONNPASS_API_KEY
const connpass = new Connpass(apiKey)

// ✅ イベント一覧HTML生成関数
function renderEvents(events: ConnpassEvent[]): string {
  if (events.length === 0) {
    return '<p>イベントが見つかりませんでした。</p>'
  }

  return `
    <h3>イベント一覧</h3>
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
            (event) => `
          <tr>
            <td>${event.id}</td>
            <td>${event.title}</td>
            <td>${event.started_at}</td>
            <td><img src="${event.image_url}" width="100" /></td>
            <td><a href="${event.url}" target="_blank">リンク</a></td>
          </tr>
        `,
          )
          .join('')}
      </tbody>
    </table>
  `
}

// ✅ 資料一覧HTML生成関数
function renderPresentations(presentations: Presentation[]): string {
  if (presentations.length === 0) {
    return '<p>資料が見つかりませんでした。</p>'
  }

  return `
    <h3>イベント資料一覧</h3>
    <table border="1" cellpadding="5">
      <thead>
        <tr>
          <th>資料タイトル</th>
          <th>タイプ</th>
          <th>投稿者</th>
          <th>発表者</th>
          <th>資料URL</th>
        </tr>
      </thead>
      <tbody>
        ${presentations
          .map(
            (p) => `
          <tr>
            <td>${p.name}</td>
            <td>${p.presentation_type}</td>
            <td>${p.user.nickname}</td>
            <td>${p.presenter?.nickname}</td>
            <td><a href="${p.url}" target="_blank">リンク</a></td>
          </tr>
        `,
          )
          .join('')}
      </tbody>
    </table>
  `
}

// ✅ イベント取得処理
document.getElementById('fetchEvents')?.addEventListener('click', async () => {
  const resultDiv = document.getElementById('eventsResult')!
  resultDiv.innerHTML = `<p>イベント取得中...</p>`

  try {
    const response = await connpass.getEvents({
      keyword: ['python', 'go'],
      prefecture: [Prefecture.OSAKA, Prefecture.TOKYO],
      order: EventOrder.STARTED_AT,
      count: 5,
    })

    resultDiv.innerHTML = renderEvents(response.events)
  } catch (e: any) {
    resultDiv.innerHTML = `<p style="color:red;">エラー: ${e.message}</p>`
  }
})

// ✅ 資料取得処理（入力されたイベントIDで）
document
  .getElementById('fetchPresentations')
  ?.addEventListener('click', async () => {
    const input = document.getElementById('eventIdInput') as HTMLInputElement
    const id = input.value.trim()
    const resultDiv = document.getElementById('presentationsResult')!

    if (!id) {
      resultDiv.innerHTML =
        '<p style="color:red;">イベントIDを入力してください。</p>'
      return
    }

    resultDiv.innerHTML = `<p>資料取得中...</p>`

    try {
      const response = await connpass.getEventPresentations(id)
      resultDiv.innerHTML = renderPresentations(response.presentations)
    } catch (e: any) {
      resultDiv.innerHTML = `<p style="color:red;">エラー: ${e.message}</p>`
    }
  })
