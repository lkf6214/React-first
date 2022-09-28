import React, { useState } from "react";

export default function StatePractice() {
  const [message, setMessage] = useState("");

  const onClickEnter = () => {
    setMessage("안녕하세요");
  };

  const onClickLeave = () => {
    setMessage("안녕히가세요");
  };

  return (
    <div>
      <div>
        <h1>{message}</h1>
        {/* 리엑트에서 속성값은 onClick 대문자 */}
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
      </div>
    </div>
  );
}
