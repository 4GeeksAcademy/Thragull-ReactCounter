import React from 'react'
import chrono from '../../img/Crono.png'

const Header = () => {
  return (
    <div id='header' className='text-center bg-warning py-2 d-flex justify-content-center'>
        <img className="chronos" src={chrono}/>
        <h1 className='text-secondary'>THRAGULL TIME MACHINE</h1>
        <img className="chronos" src={chrono}/>
    </div>
  )
}

export default Header