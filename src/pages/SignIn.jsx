import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickSignIn = (e) => {
    e.preventDefault();
    const signinData = {
      id: id,
      password: password,
    };
    axios
      .post("http://210.109.52.15/signip", signinData, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/");
        }
      })
      .catch((e) => {
        alert("서버와 연결되지 않았습니다.");
        console.log("로그인 오류 => " + e);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 pt-16">
      <img
        id="what-in-my-refridge"
        src="https://i.imgur.com/yk6aldW.png"
        alt="프로젝트 이미지"
        className="max-w-64 h-auto mb-4"
      />
      <div className="bg-blue-100 p-6 rounded-lg w-80">
        <form onSubmit={onClickSignIn}>
          <input
            type="text"
            value={id}
            onChange={handleId}
            placeholder="이메일"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-black"
          />
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder="비밀번호"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-black"
          />
          <button
            type="submit"
            className="Jua-font w-full p-2 text-white bg-blue-900 rounded hover:bg-blue-800"
          >
            로그인
          </button>
        </form>
        <div
          onClick={() => {
            navigate("/SignUp");
          }}
          className="mt-4 text-center text-blue-900 cursor-pointer hover:text-blue-800"
        >
          회원가입
        </div>
      </div>
    </div>
  );
};

export default SignIn;
