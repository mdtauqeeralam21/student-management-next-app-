import { useState, useEffect } from "react";
import Link from "next/link";
export default function StudentList() {
  const [data,setdata] = useState([])
  function click(){
    fetch('/api/getData')
    .then((response) => response.json())
    .then((json) => setdata(json))
  }
  useEffect(()=>{
    click()
  },[])
  return (
    
    <>
    <Link href={"/add"}
    className="flex flex-col">
    <div className="bg-blue-500 rounded text-center p-3 w-1/7 mr-2 self-end">
    Add Details
    </div>
    </Link>
    <div className="tableContainer">
      <table className="table">
        <thead className="tableHead">
          <tr className="tableHeadTr">
            <th>Name</th>
            <th>Year of Passing</th>
            <th>Course</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item)=> (
          <tr key={item.id}>
            <td>{item.fullName}</td>
            <td>{item.yearOfPassed}</td>
            <td>{item.degree} ( {item.branch} )</td>
            <td>
            <Link href={"/student/"+item.id}>
              <button className="detail-btn" >Details</button>
              </Link>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
</>
  );
}