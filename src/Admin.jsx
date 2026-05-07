import { useState } from "react"

import {
  useNavigate,
} from "react-router-dom"

function Admin({
  duties,
  addDuty,
  deleteDuty,
  notices,
  addNotice,
  deleteNotice,
}) {

  const navigate =
    useNavigate()

  const [date, setDate] =
    useState("")

  const [front, setFront] =
    useState("")

  const [back, setBack] =
    useState("")

  // 공지 제목
  const [
    noticeTitle,
    setNoticeTitle,
  ] = useState("")

  // 공지 내용
  const [
    noticeContent,
    setNoticeContent,
  ] = useState("")

  // 로그아웃
  const logout = () => {

    localStorage.removeItem(
      "role"
    )

    navigate("/")
  }

  // 날짜 변환
  const formatDate = (
    dateString
  ) => {

    const dateObj =
      new Date(dateString)

    const month =
      dateObj.getMonth() + 1

    const day =
      dateObj.getDate()

    const days = [
      "일",
      "월",
      "화",
      "수",
      "목",
      "금",
      "토",
    ]

    const dayName =
      days[dateObj.getDay()]

    return `${month}/${day} (${dayName})`
  }

  // 일정 추가
  const handleAddDuty = () => {

    if (
      !date ||
      !front ||
      !back
    ) {

      alert(
        "모든 칸을 입력하세요."
      )

      return
    }

    addDuty({

      date:
        formatDate(date),

      front: front,

      back: back,
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
          "공지 제목과 내용을 입력하세요."
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

  // 날짜 정렬
  const sortedDuties =
    [...duties].sort(
      (a, b) => {

        const getDate = (
          text
        ) => {

          const onlyDate =
            text.split(" ")[0]

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

        <button
          className="logout-btn"
          onClick={logout}
        >
          로그아웃
        </button>

      </header>

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
          placeholder="정문 담당"
          value={front}
          onChange={(e) =>
            setFront(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="후문 담당"
          value={back}
          onChange={(e) =>
            setBack(
              e.target.value
            )
          }
        />

        <button
          onClick={handleAddDuty}
        >
          일정 추가
        </button>

      </div>

      {/* 공지 추가 */}
      <div className="card">

        <h2>
          공지 작성
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
          rows="5"
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
          공지 추가
        </button>

      </div>

      {/* 공지 목록 */}
      {notices.map((
        notice,
        index
      ) => (

        <div
          className="card"
          key={index}
        >

          <h2>
            📢 {notice.title}
          </h2>

          <p>
            {notice.content}
          </p>

          <button
            onClick={() =>
              deleteNotice(
                index
              )
            }
          >
            공지 삭제
          </button>

        </div>

      ))}

      {/* 일정 목록 */}
      {sortedDuties.map((
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

          <button
            onClick={() =>
              deleteDuty(index)
            }
          >
            삭제
          </button>

        </div>

      ))}

    </div>
  )
}

export default Admin