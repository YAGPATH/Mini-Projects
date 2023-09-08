import "./App.css";
import { useEffect, useState } from "react";
import CreateLecture from "./Components/CreateLecture";
import ShowLectures from "./Components/ShowLectures";
import Pagination from "./Components/Pagination";



const App = () => {

let [data,setData] = useState([]);
let [TP, setPage] = useState(0);
let [currentPage, setCurrentPage] = useState(1);

const apireq = async() => {
  try {
    const response = await fetch (`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/lectures?_page=${currentPage}&_limit=5`);

    const responseData = await response.json();

    setPage(response.headers.get(`X-Total-Count`));
    setData(responseData);
  }
  catch (error) {
    console.log("APP js error", error);
  }
}

useEffect (() => {
  apireq() 
}, [currentPage] )

  return <div className="App">

  <h1> Course Platform </h1>
  <CreateLecture apireq = {apireq} />
  <ShowLectures lecture = {data} deleteLectures={apireq} />
  <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} page = {TP} apireq = {apireq} />



  </div>;
};

export default App;
