import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <nav className='navbar navbar-expand-lg bg-body-secondary'>
            <div className='container-fluid'>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#tabSelector' aria-controls='tabSelector'
                        aria-expanded="false" aria-label='toggleNavigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <select id="watchSelector" className="form-select col-2" aria-label="Select Watch">
                    <option value="digital" selected>Digital</option>
                    <option value="analogic">Analogic</option>                                                                                                                       
                </select>
                <div className='collapse navbar-collapse justify-content-center' id='tabSelector'>
                    <ul className="navbar-nav">
                        <li className="nav-item me-5">
                            <a id="counter" className={`nav-link ${props.active[0]}`} aria-current="page" href="#">Second Counter</a>
                        </li>
                        <li className="nav-item me-5">
                            <a id="chrono" className={`nav-link ${props.active[1]}`} href="#">Chronometer</a>
                        </li>
                        <li className="nav-item me-5">
                            <a id="countdown" className={`nav-link ${props.active[2]}`} href="#">Countdown</a>
                        </li>
                        <li className="nav-item me-5">
                            <a id="clock" className={`nav-link ${props.active[3]}`} href="#">Clock</a>
                        </li>
                        <li className="nav-item me-5">
                            <a id="alarm" className={`nav-link ${props.active[4]}`} href="#">Alarm</a>
                        </li>
                    </ul>
                </div>
            </div> 
            
        </nav>
    </div>
  )
}

export default Navbar