import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({title,about,home,mode,toggleMode}) {
  return (
    <>
  <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <Link className="navbar-brand" to="/">{title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarScroll">
    <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style={{maxheight: 100}}>
      <li className="nav-item active">
        <Link className="nav-link" to="/">{home} <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{about}</Link>
      </li>
      
      
    </ul>
    
    <div className={`custom-control custom-switch text-${mode==='light'?'dark':'light'}`}>
  <input type="checkbox" className="custom-control-input" id="customSwitches" onClick={toggleMode}/>
  <label className="custom-control-label" htmlFor="customSwitches">Enbale Dark Mode</label>
</div>
</div>

</nav>
    </>
  )
}

export default Navbar