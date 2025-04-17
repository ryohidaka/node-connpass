import { Connpass, ConnpassEvent, EventOrder } from '..'
import { Prefecture } from '../types/prefecture'
import { ConnpassGroup, ConnpassUser, Presentation } from '../types'

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
    <hr />
    <h3>グループ一覧</h3>
    <button id="fetchGroups">グループ取得</button>
    <div id="groupsResult"></div>
    <hr />
    <h3>ユーザー一覧</h3>
    <button id="fetchUsers">ユーザー取得</button>
    <div id="usersResult"></div>
  </div>
`

const apiKey = import.meta.env.VITE_CONNPASS_API_KEY
const connpass = new Connpass(apiKey)

// イベント一覧HTML生成関数
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

// 資料一覧HTML生成関数
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

// グループ一覧HTML生成関数
function renderGroups(groups: ConnpassGroup[]): string {
  if (groups.length === 0) {
    return '<p>グループが見つかりませんでした。</p>'
  }

  return `
    <h3>グループ一覧</h3>
    <table border="1" cellpadding="5">
      <thead>
        <tr>
          <th>グループID</th>
          <th>グループ名</th>
          <th>サブドメイン</th>
          <th>主催者</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        ${groups
          .map(
            (group) => `
          <tr>
            <td>${group.id}</td>
            <td>${group.title}</td>
            <td>${group.subdomain}</td>
            <td>${group.owner_text}</td>
            <td><a href="${group.url}" target="_blank">リンク</a></td>
          </tr>
        `,
          )
          .join('')}
      </tbody>
    </table>
  `
}

// ユーザー一覧HTML生成関数
function renderUsers(users: ConnpassUser[]): string {
  if (users.length === 0) {
    return '<p>ユーザーが見つかりませんでした。</p>'
  }

  return `
    <h3>ユーザー一覧</h3>
    <table border="1" cellpadding="5">
      <thead>
        <tr>
          <th>ユーザーID</th>
          <th>ニックネーム</th>
          <th>表示名</th>
          <th>自己紹介文</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        ${users
          .map(
            (user) => `
          <tr>
            <td>${user.id}</td>
            <td>${user.nickname}</td>
            <td>${user.display_name}</td>
            <td>${user.description}</td>
            <td><a href="${user.url}" target="_blank">リンク</a></td>
          </tr>
        `,
          )
          .join('')}
      </tbody>
    </table>
  `
}

// イベント取得処理
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

// 資料取得処理（入力されたイベントIDで）
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

// グループ取得処理
document.getElementById('fetchGroups')?.addEventListener('click', async () => {
  const resultDiv = document.getElementById('groupsResult')!
  resultDiv.innerHTML = `<p>グループ取得中...</p>`

  try {
    const response = await connpass.getGroups({
      subdomain: ['bpstudy', 'beproud'],
    })

    resultDiv.innerHTML = renderGroups(response.groups)
  } catch (e: any) {
    resultDiv.innerHTML = `<p style="color:red;">エラー: ${e.message}</p>`
  }
})

// ユーザー取得処理
document.getElementById('fetchUsers')?.addEventListener('click', async () => {
  const resultDiv = document.getElementById('usersResult')!
  resultDiv.innerHTML = `<p>ユーザー取得中...</p>`

  try {
    const response = await connpass.getUsers({
      nickname: ['haru860', 'ian'],
    })

    resultDiv.innerHTML = renderUsers(response.users)
  } catch (e: any) {
    resultDiv.innerHTML = `<p style="color:red;">エラー: ${e.message}</p>`
  }
})
