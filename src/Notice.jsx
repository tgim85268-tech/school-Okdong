import {
  useNavigate,
} from "react-router-dom"

function Notice({
  notices,
}) {

  const navigate =
    useNavigate()

  return (

    <div className="main-page">

      <header className="header">

        <h1>
          공지사항
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

      {notices.map((
        notice,
        index
      ) => (

        <div
          className="card"
          key={index}

          onClick={() =>
            navigate(
              `/notice/${index}`
            )
          }
        >

          <h2>
            📢 {notice.title}
          </h2>

          <p>
            눌러서 상세보기
          </p>

        </div>

      ))}

    </div>
  )
}

export default Notice