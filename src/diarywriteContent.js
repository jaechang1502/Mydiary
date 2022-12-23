import { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const DiaryWriteContent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  /**
  다이어리 완료 버튼
  @localstorage  타이틀 내용 생성된시간 수정시간 마지막업데이트한 날짜 
  */
  const clickDiaryCompleted = () => {
    let diary = localStorage.getItem("Diary");
    let data = JSON.parse(diary);

    if (data === null) {
      data = [];
    }
    data.push({
      id: moment().unix(),
      title: title,
      content: content,
      createTime: moment().format(),
      updateTime: "",
      lastUpdateTime: "",
    });
    localStorage.setItem("Diary", JSON.stringify(data));
    setTitle("");
    setContent("");
  };
  return (
    <div className="write_container">
      <Link to="/">
        <button className="bg-orange-400 hover:bg-orange-500 mt-4 text-white font-bold py-1 px-2 rounded">
          back
        </button>
      </Link>
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
  );
};
export default DiaryWriteContent;
