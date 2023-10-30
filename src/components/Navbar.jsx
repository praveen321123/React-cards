import React from 'react'

export const Navbar = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-info ">
        <div className="container-fluid sticky-top">
          <a className="navbar-brand" href="#">Super Bikes</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
         <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
           <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#">Contact</a>
            </li>
           </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
