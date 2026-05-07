import { useState } from "react"

import {
  useNavigate,
} from "react-router-dom"

function Login() {

  const [id, setId] =
    useState("")

  const [pw, setPw] =
    useState("")

  const navigate =
    useNavigate()

  const login = () => {

    if (
      id === "admin" &&
      pw === "1234"
    ) {

      localStorage.setItem(
        "role",
        "admin"
      )

      navigate("/admin")
    }

    else if (
      id === "user" &&
      pw === "1234"
    ) {

      localStorage.setItem(
        "role",
        "user"
      )

      navigate("/user")
    }

    else {

      alert("로그인 실패")
    }
  }

  return (

    <div className="login-page">

      <div className="login-box">

        <h1>
          학교 선도부 시스템
        </h1>

        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) =>
            setId(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={(e) =>
            setPw(e.target.value)
          }
        />

        <button onClick={login}>
          로그인
        </button>

      </div>

    </div>
  )
}

export default Login