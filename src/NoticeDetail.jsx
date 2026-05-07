import {
  useParams,
  useNavigate,
} from "react-router-dom"

function NoticeDetail({
  notices,
}) {

  const { id } =
    useParams()

  const navigate =
    useNavigate()

  const notice =
    notices[id]

  if (!notice) {

    return (

      <div className="main-page">

        <h1>
          공지를 찾을 수 없습니다.
        </h1>

      </div>
    )
  }

  return (

    <div className="main-page">

      <header className="header">

        <h1>
          공지 상세
        </h1>

        <button
          className="logout-btn"
          onClick={() =>
            navigate(-1)
          }
        >
          뒤로가기
        </button>

      </header>

      <div className="card">

        <h2>
          📢 {notice.title}
        </h2>

        <p>
          {notice.content}
        </p>

      </div>

    </div>
  )
}

export default NoticeDetail