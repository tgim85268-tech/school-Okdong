import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import {
  useState,
  useEffect,
} from "react"

import Login from "./Login"
import Admin from "./Admin"
import User from "./User"
import Notice from "./Notice"
import NoticeDetail from "./NoticeDetail"

function App() {

  // role 상태 관리
  const [role] =
    useState(
      localStorage.getItem(
        "role"
      )
    )

  // 일정
  const [duties, setDuties] =
    useState(() => {

      const saved =
        localStorage.getItem(
          "duties"
        )

      return saved
        ? JSON.parse(saved)
        : []
    })

  // 공지 목록
  const [notices, setNotices] =
    useState(() => {

      const saved =
        localStorage.getItem(
          "notices"
        )

      return saved
        ? JSON.parse(saved)
        : []
    })

  // 저장
  useEffect(() => {

    localStorage.setItem(
      "duties",
      JSON.stringify(duties)
    )

  }, [duties])

  useEffect(() => {

    localStorage.setItem(
      "notices",
      JSON.stringify(notices)
    )

  }, [notices])

  // 일정 추가
  const addDuty = (
    newDuty
  ) => {

    setDuties([
      ...duties,
      newDuty,
    ])
  }

  // 일정 삭제
  const deleteDuty = (
    index
  ) => {

    const updated =
      duties.filter(
        (_, i) =>
          i !== index
      )

    setDuties(updated)
  }

  // 공지 추가
  const addNotice = (
    newNotice
  ) => {

    setNotices([
      ...notices,
      newNotice,
    ])
  }

  // 공지 삭제
  const deleteNotice = (
    index
  ) => {

    const updated =
      notices.filter(
        (_, i) =>
          i !== index
      )

    setNotices(updated)
  }

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/admin"
          element={
            role === "admin"
              ? (
                  <Admin
                    duties={duties}
                    addDuty={addDuty}
                    deleteDuty={
                      deleteDuty
                    }
                    notices={notices}
                    addNotice={
                      addNotice
                    }
                    deleteNotice={
                      deleteNotice
                    }
                  />
                )
              : (
                  <Navigate to="/" />
                )
          }
        />

        <Route
          path="/user"
          element={
            role === "user"
              ? (
                  <User
                    duties={duties}
                  />
                )
              : (
                  <Navigate to="/" />
                )
          }
        />

        <Route
          path="/notice"
          element={
            <Notice
              notices={notices}
            />
          }
        />

        <Route
          path="/notice/:id"
          element={
            <NoticeDetail
              notices={notices}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App