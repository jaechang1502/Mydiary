import { useState } from "react";
import moment from "moment";
import { Link, useSearchParams } from "react-router-dom";

const DiaryWriteContent = () => {
  const [searchParams] = useSearchParams();
  const diary = localStorage.getItem("Diary");
  let data = [];
  if (JSON.parse(diary)) data = JSON.parse(diary);
  let id = Number(searchParams.get("id"));
  let result = [];
  if (data.length > 0) {
    result = data.find((x) => {
      return x.id === id;
    });
  }
  const searchDiary = data.findIndex((k) => Number(k.id) === id);
  const [title, setTitle] = useState(result?.title || "");
  const [content, setContent] = useState(result?.content || "");
  /**
  다이어리 완료 버튼
  @localstorage  타이틀 내용 생성된시간 수정시간 마지막업데이트한 날짜  
  */

  const clickDiaryCompleted = () => {
    if (searchDiary >= 0) {
      data[searchDiary] = {
        id: id,
        title: title,
        content: content,
        createTime: moment.unix(id).format(),
        updateTime: moment().unix(),
      };
    } else {
      data.push({
        id: moment().unix(),
        title: title,
        content: content,
        createTime: moment().format(),
        updateTime: "",
      });
    }

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
        <button
          className="bg-orange-400 hover:bg-orange-500 font-bold py-1 px-2 rounded text-white"
          onClick={() => {
            setTitle("");
            setContent("");
          }}
        >
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
