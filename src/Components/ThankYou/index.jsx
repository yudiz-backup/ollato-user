
import React, { useState } from 'react'
import MobileHeader from '../../Components/MobileHeader'
import Sidebar from '../../Components/Sidebar'
/* images */
import congrats from '../../assets/images/congrats.svg'

function Congratulations (props) {
  const [toggle, setToggle] = useState()

  // Function for handle toggle
  const handleCallback = (toggle) => {
    setToggle(toggle)
  }
  return (
    <>
       <div className={`common-layout common-dashboard-wrapper no-breadcrumbs no-dropdown ${
        toggle ? 'open-sidebar' : ''
      }`}>
          <Sidebar location={location} toggleHandle={handleCallback}
            toggle={toggle} />
          <MobileHeader parentCallback={handleCallback}
            toggle={toggle}
            setToggle={setToggle} />
          <div className='main-content-box'>
            <div className='main-layout whitebox-layout fullscreendata'>
                <div className='contentbox'>
                    <div className="timesupdesc">
                        <img src={congrats} alt='timeup' />
                        <h2>Thank you for purchasing the package...!</h2>
                        {/* <Link to={'/package'} className='theme-btn text-none'></Link> */}

                    </div>
                </div>
            </div>
          </div>
    </div>
    </>
  )
}

export default Congratulations
