import "./App.css";
import moment from "moment";
import { useState } from "react";

function App() {
  const [time, setTime] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  /**
  다이어리 완료 버튼
  @localstorage  타이틀 내용 생성된시간 수정시간 마지막업데이트한 날짜 
  */
  const clickDiaryCompleted = () => {
    localStorage.setItem(
      "Diary",
      JSON.stringify({
        title: title,
        content: content,
        createTime: time,
        updateTime: "",
        lastUpdateTime: "",
      })
    );
    setTime("");
    setTitle("");
    setContent("");
  };

  return (
    <div className="note">
      <div className="bg-orange-100 w-1/2 note-container rounded-xl p-7">
        <div className="noteHeader mt-5">
          <h2 className="text-3xl  font-bold ">일기 쓰기</h2>
          <div className="flex justify-between items-center">
            <p className="mt-2">오늘의 하루를 적어보세요 </p>
            <button className="bg-orange-400 hover:bg-orange-500 mt-4 text-white font-bold py-1 px-2 rounded">
              back
            </button>
          </div>
        </div>
        <div className="write_container">
          <input
            type="text"
            className="mt-4 rounded w-full pl-2 h-8 "
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="제목"
            value={title}
          />
          <textarea
            value={content}
            placeholder="오늘의 하루"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            className="mt-4 pl-2 w-full resize-none rounded h-64"
          ></textarea>
          <div className="flex justify-between mt-4">
            <button className="bg-orange-400 hover:bg-orange-500 font-bold py-1 px-2 rounded text-white">
              Delete
            </button>
            <button
              className="bg-orange-500 hover:bg-orange-600 font-bold py-1 px-3 rounded text-white"
              onClick={() => {
                clickDiaryCompleted();
              }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
