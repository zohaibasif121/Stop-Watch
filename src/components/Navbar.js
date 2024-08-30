import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Alarm-Clock-2--Streamline-Sharp-Remix.png';
function Navbar() {
  return (
    <div>

      <nav className=' text-black bg-[#ACE1AF] m-5 rounded flex items-center  '>
        {/* <div className=''> */}
        <img src={logo} alt='logo' className='ms-10 me-5'/>
        {/* </div> */}
        <ul className='space-x-4 p-2'>
      <NavLink to={`/`}
      className={({isActive})=>
      isActive ? 'font-bold text-lg': ''
      }
      >StopWatch </NavLink>

      <NavLink to={`/Timer`}
      className={({isActive})=>
      isActive? 'font-bold text-lg':''
      }
      >Timer </NavLink>
            </ul>
      </nav>
    </div>
  );
}

export default Navbar;
