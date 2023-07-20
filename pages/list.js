
export default function StudentList() {
  
  return (
    <>
    <table className="shadow-lg bg-white border-collapse mx-auto">
  <thead>
    <tr>
    <th className="bg-blue-100 border text-left px-8 py-4">Company</th>
    <th className="bg-blue-100 border text-left px-8 py-4">Contact</th>
    <th className="bg-blue-100 border text-left px-8 py-4">Country</th>
  </tr>
  <tr className="hover:bg-gray-50">
    <td className="border px-8 py-4">Alfreds Futterkiste</td>
    <td className="border px-8 py-4">Dante Sparks</td>
    <td className="border px-8 py-4">Italy</td>
  </tr>
  <tr className="hover:bg-gray-50">
    <td className="border px-8 py-4">Centro comercial Moctezuma</td>
    <td className="border px-8 py-4">Neal Garrison</td>
    <td className="border px-8 py-4">Spain</td>
  </tr>
  <tr className="hover:bg-gray-50">
    <td className="border px-8 py-4">Ernst Handel</td>
    <td className="border px-8 py-4">Maggie O'Neill</td>
    <td className="border px-8 py-4">Austria</td>
  </tr>
</thead>
</table>
</>
  );
}
