import {
  useState
} from "react"

function Admin({
  duties,
  addDuty,
  deleteDuty,

  notices,
  addNotice,
  deleteNotice,
}) {

  // 일정
  const [date, setDate] =
    useState("")

  const [front, setFront] =
    useState("")

  const [back, setBack] =
    useState("")

  // 공지
  const [
    noticeTitle,
    setNoticeTitle,
  ] = useState("")

  const [
    noticeContent,
    setNoticeContent,
  ] = useState("")

  // 날짜 변환
  const formatDate = (
    value
  ) => {

    const dateObj =
      new Date(value)

    return dateObj.toLocaleDateString(
      "ko-KR",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      }
    )
  }

  // 일정 추가
  const handleAddDuty =
    () => {

      if (
        !date ||
        !front ||
        !back
      ) {
        alert(
          "모든 칸 입력"
        )
        return
      }

      addDuty({
        date:
          formatDate(
            date
          ),
        front,
        back,
      })

      setDate("")
      setFront("")
      setBack("")
    }

  // 공지 추가
  const handleAddNotice =
    () => {

      if (
        !noticeTitle ||
        !noticeContent
      ) {
        alert(
          "공지 입력"
        )
        return
      }

      addNotice({
        title:
          noticeTitle,

        content:
          noticeContent,
      })

      setNoticeTitle("")
      setNoticeContent("")
    }

  // 로그아웃
  const logout = () => {

    localStorage.removeItem(
      "role"
    )

    window.location.href =
      "/"
  }

  return (

    <div className="main-page">

      <div className="header">

        <h1>
          관리자 페이지
        </h1>

        <button
          className="logout-btn"
          onClick={logout}
        >
          로그아웃
        </button>

      </div>

      {/* 일정 추가 */}

      <div className="card">

        <h2>
          일정 추가
        </h2>

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="앞문"
          value={front}
          onChange={(e) =>
            setFront(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="뒷문"
          value={back}
          onChange={(e) =>
            setBack(
              e.target.value
            )
          }
        />

        <button
          onClick={
            handleAddDuty
          }
        >
          일정 추가
        </button>

      </div>

      {/* 공지 추가 */}

      <div className="card">

        <h2>
          공지 추가
        </h2>

        <input
          type="text"
          placeholder="공지 제목"
          value={noticeTitle}
          onChange={(e) =>
            setNoticeTitle(
              e.target.value
            )
          }
        />

        <textarea
          placeholder="공지 내용"
          value={noticeContent}
          onChange={(e) =>
            setNoticeContent(
              e.target.value
            )
          }
        />

        <button
          onClick={
            handleAddNotice
          }
        >
          공지 등록
        </button>

      </div>

      {/* 공지 목록 */}

      <div className="card">

        <h2>
          공지 목록
        </h2>

        {
          notices.length ===
          0 && (
            <p>
              공지 없음
            </p>
          )
        }

        {
          notices.map(
            (notice) => (

              <div
                key={notice.id}
                style={{
                  borderBottom:
                    "1px solid #ddd",
                  padding:
                    "10px 0",
                }}
              >

                <h3>
                  {
                    notice.title
                  }
                </h3>

                <p>
                  {
                    notice.content
                  }
                </p>

                <button
                  onClick={() =>
                    deleteNotice(
                      notice.id
                    )
                  }
                >
                  삭제
                </button>

              </div>
            )
          )
        }

      </div>

    </div>
  )
}

export default Admin