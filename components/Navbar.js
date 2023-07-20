import Link from 'next/link';
import Login from './Login';


const Navbar = () => {
  return (
   <div className='nav-main-div'>
    <div className="nav">
    <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div class="nav-title">
      ALUMNI PORTAL
    </div>
  </div>
  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <Link href="/">HOME</Link>
    <Link href="/list">ALUMNI LIST</Link>
    {/* <Login/> */}
  </div>
</div>
</div>
  );
};

export default Navbar;