import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar navbar-expand-lg bg-body-secondary'>
            <div className='container-fluid'>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#tabSelector' aria-controls='tabSelector'
                        aria-expanded="false" aria-label='toggleNavigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse justify-content-center' id='tabSelector'>
                    <ul className="navbar-nav">
                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="#">Second Counter</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link" href="#">Chronometer</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link" href="#">Countdown</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link" href="#">Clock</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar