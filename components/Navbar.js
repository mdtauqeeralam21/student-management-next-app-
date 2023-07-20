import Link from 'next/link';
import Login from './Login';


const Navbar = () => {
  return (
   <div className='nav-main-div'>
    <div className="nav">
    <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title">
      ALUMNI PORTAL
    </div>
  </div>
  <div className="nav-btn">
    <label className="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <Link href="/">HOME</Link>
    <Link href="/student">ALUMNI LIST</Link>
    {/* <Login/> */}
  </div>
</div>
</div>
  );
};

export default Navbar;