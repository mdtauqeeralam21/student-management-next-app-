import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import useAuthenticatedRedirect from "@/components/AuthenticatedRedirect";



export default function StudentList() {

  const redirect = useAuthenticatedRedirect()

  const [data,setdata] = useState([])

  function click(){
    fetch('http://localhost:3030/alumnis')
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
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
            <td>
              <button className="detail-btn" onClick={redirect}>Details</button>
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
