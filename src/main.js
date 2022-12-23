import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/ko";

const Main = () => {
  const [myList, setMyList] = useState([]);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("Diary"));
    setMyList(data);
  }, []);

  return (
    <div className="diaryList p-3">
      {myList &&
        myList.map((x) => {
          return (
            <div className="bg-white rounded-lg p-3 m-3 " key={x.id}>
              <h2 className="font-extrabold text-xl mb-2">
                {moment(x.createTime).format("YYYY년 MMMM Do dddd LT")}
              </h2>
              <span>{x.title}</span>
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
