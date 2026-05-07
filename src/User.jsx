import {
  useNavigate,
} from "react-router-dom"

function User({
  duties,
}) {

  const navigate =
    useNavigate()

  // 날짜 정렬
  const sortedDuties =
    [...duties].sort(
      (a, b) => {

        const getDate =
          (text) => {

            const onlyDate =
              text.split(
                " "
              )[0]

            const [
              month,
              day,
            ] =
              onlyDate.split("/")

            return new Date(
              2026,
              month - 1,
              day
            )
          }

        return (
          getDate(a.date) -
          getDate(b.date)
        )
      }
    )

  return (

    <div className="main-page">

      <header className="header">

        <h1>
          학교 선도부 시스템
        </h1>

      </header>

      <div
        className="card"
        onClick={() =>
          navigate("/notice")
        }
      >

        <h2>
          📢 공지사항
        </h2>

        <p>
          공지사항 보러가기
        </p>

      </div>

      {sortedDuties.map(
        (
          duty,
          index
        ) => (

          <div
            className="card"
            key={index}
          >

            <h2>
              {duty.date}
            </h2>

            <p>

              <strong>
                정문:
              </strong>

              {" "}
              {duty.front}

            </p>

            <p>

              <strong>
                후문:
              </strong>

              {" "}
              {duty.back}

            </p>

          </div>
        )
      )}

    </div>
  )
}
export default User