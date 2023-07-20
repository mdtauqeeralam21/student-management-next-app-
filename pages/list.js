import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import Link from "next/link";
//import useAuthenticatedRedirect from "@/components/AuthenticatedRedirect";



export default function StudentList() {

  //const redirect = useAuthenticatedRedirect()

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
    <Layout>
    <div className="tableContainer">
      <table className="table">
        <thead className="tableHead">
          <tr className="tableHeadTr">
            <th>Name</th>
            <th>Year of Passing</th>
            <th>Degree</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item)=> (
          <tr>
            <td>{item.fullName}</td>
            <td>{item.yearOfPassed}</td>
            <td>{item.email}</td>
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
    </Layout>
</>
  );
}