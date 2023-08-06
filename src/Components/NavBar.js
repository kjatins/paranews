import React from 'react'
import { Link , NavLink} from "react-router-dom";

export default function NavBar(props) {
  let { mode , btntext, toggleMode } = props;
  return (
    <>
      <nav className="navbar" style={props.mode}>
        <div className='logo'>
          <img src="./images/paranewslogo.png" alt="" />
          <h1>ParaNews</h1>
        </div>
        <div className='tabitems' style={mode}>
          <NavLink className="Navlink" to="/">
            <img src="./images/home.ico" alt="" /><p>Home</p></NavLink>
            <vr></vr>
          <div className='cate'>
            <p>Category</p>
            <ul className='cateitems'>
              <li><NavLink className="nav-Navlink" to="/general">General</NavLink></li>
              <li><NavLink className="nav-Navlink" to="/business">Business</NavLink></li>
              <li><NavLink className="nav-Navlink" to="/technology">Technology</NavLink></li>
              <li><NavLink className="nav-Navlink" to="/entertainment">Entertainment</NavLink></li>
              <li><NavLink className="nav-Navlink" to="/sports">Sports</NavLink></li>
              <li><NavLink className="nav-Navlink" to="/science">Science</NavLink></li>
              <li><NavLink className="nav-Navlink" to="/health">Health</NavLink></li>
            </ul>
          </div>
          <NavLink className="sbc" to="/health">
            <img src="./images/location.ico" alt="" /><p>search by country</p></NavLink>
        </div>
        <button className='darkmode' style={mode} onClick={props.toggleMode}>
                <label className="switch">
                    <input type="checkbox" />
                    <span className='slider'></span>
                </label>
                {props.btntext}
            </button>
      </nav>
    </>
  )
}
