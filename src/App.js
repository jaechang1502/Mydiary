import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import Diary from "./diarywriteContent";
import Main from "./main.js";

function App() {
  return (
    <div className="note">
      <div className="bg-orange-100 w-1/2 note-container rounded-xl p-7">
        <div className="noteHeader mt-5">
          <h2 className="text-3xl  font-bold ">일기 쓰기</h2>
          <p className="mt-2">오늘의 하루를 적어보세요 </p>
        </div>
        {/* router 설정  */}
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/write" element={<Diary />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
