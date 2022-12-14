import "./App.css";
import moment from "moment";
import { useState } from "react";

function App() {
  const [time, setTime] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));
  const [title, setTitle] = useState();
  return (
    <div className="note">
      <div className="bg-orange-100 w-1/2 note-container rounded-xl p-7">
        <div className="noteHeader mt-5">
          <h2 className="text-3xl  font-bold ">일기 쓰기</h2>
          <p className="mt-2">오늘의 하루를 적어보세요 </p>
        </div>
        <button className="bg-orange-400 hover:bg-orange-500 mt-4 text-white font-bold py-1 px-2 rounded">
          back
        </button>
        <div className="write_container">
          <input
            type="text"
            className="mt-4 rounded w-full px-4 "
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="제목"
            value={title}
          />
          <textarea className="mt-4 w-full"></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
