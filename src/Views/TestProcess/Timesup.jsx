
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileHeader from '../../Components/MobileHeader'
import Sidebar from '../../Components/Sidebar'
/* images */
import timesup from '../../assets/images/timesup.svg'

function Timesup (props) {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState()

  const handleTime = () => {
    // eslint-disable-next-line react/prop-types
    props.setTimeUp(false)
    // eslint-disable-next-line react/prop-types
    navigate(`/test-process/test-category-detail/${Number(props?.id) + 1}`)
  }
  // Function for handle toggle
  const handleCallback = (toggle) => {
    setToggle(toggle)
  }
  return (
    <>
       <div className={`common-layout common-dashboard-wrapper no-breadcrumbs light-bg admin-myprofile ${
      toggle
      ? 'open-sidebar'
      : ''
    }`}>
          <Sidebar location={location} toggleHandle={handleCallback}
          toggle={toggle} />
          <MobileHeader parentCallback={handleCallback} toggle={toggle} setToggle={setToggle} />
          <div className='main-content-box'>
            <div className="title-header no-breadcrumbs">
                <ul className="breadcrumbs">
                   {/* eslint-disable-next-line react/prop-types */}
                    <li className="breadcrumbs-item"><h3>{props?.title} Question test</h3></li>
                </ul>
            </div>
            <div className='main-layout whitebox-layout fullscreendata'>
                <div className='contentbox'>
                    <div className="timesupdesc">
                        <img src={timesup} alt='timeup' />
                        <h2>Time’s Up</h2>
                        {/* eslint-disable-next-line react/prop-types */}
                        <h4>Unfortunately you’ve run out of time to complete the {props?.title} Question Test.</h4>
                         {/* eslint-disable-next-line react/prop-types */}
                         <button onClick={() => handleTime()} className='theme-btn text-none'>Go to Next Test</button>

                                {/* eslint-disable-next-line react/prop-types */}
                        {/* <Link to={`/test-process/test-question/${Number(props?.id) + 1}`} className='theme-btn text-none'>Back To Test List</Link> */}
                    </div>
                </div>
            </div>
          </div>
    </div>
    </>
  )
}

export default Timesup
