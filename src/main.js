import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import "moment/locale/ko";

const Main = () => {
  let navigate = useNavigate();
  const [myList, setMyList] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("Diary"));
    data = data.filter((x) => {
      return x.title.toLowerCase().search(search.toLowerCase()) >= 0;
    });
    console.log(data);
    setMyList(data);
  }, [search]);

  return (
    <div className="diaryList p-3">
      <div className="relative rounded-lg shadow-sm w-full">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">
          <svg
            className="absolute text-slate-400 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        {console.log(search)}
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search"
          className=" block text-sm w-full pl-10 py-2 px-3 ring-1 ring-slate-900/10 text-slate-500 rounded-lg dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-400"
        />
      </div>
      {myList &&
        myList.map((x) => {
          return (
            <div
              className="bg-white rounded-lg p-3 m-3 cursor-pointer"
              key={x.id}
              onClick={() => {
                navigate(`write/?id=${x.id}`);
              }}
            >
              <h2 className="font-extrabold text-xl mb-2">{x.title}</h2>
              <span className="text-sm">
                {moment(x.createTime).format("YYYY년 MMMM Do dddd LT")}에 쓴
                일기
              </span>
            </div>
          );
        })}
      <div className="flex justify-end">
        <Link to="/write">
          <button className="bg-orange-400 hover:bg-orange-500 mt-4 text-white font-bold py-1 px-2 rounded">
            Writing a diary
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Main;
