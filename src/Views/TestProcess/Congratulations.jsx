import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MobileHeader from '../../Components/MobileHeader'
import Sidebar from '../../Components/Sidebar'
/* images */
import congrats from '../../assets/images/congrats.svg'

function Congratulations (props) {
  const locationn = useLocation()

  // useState
  const [toggle, setToggle] = useState()

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
          <div className='title-header no-breadcrumbs'>
            <ul className='breadcrumbs'>
              {locationn.state.allTestCompletedFlag === true
                ? (
                    ''
                  )
                : (
                <li className='breadcrumbs-item'>
                  <h3>{locationn?.state?.title} Question test</h3>
                </li>
                  )}
            </ul>
          </div>
          <div className='main-layout whitebox-layout fullscreendata'>
            <div className='contentbox'>
              <div className='timesupdesc'>
                <img src={congrats} alt='timeup' />
                <h2>Congratulation...!</h2>
                {locationn.state.allTestCompletedFlag === false ||
                locationn?.state?.name === 'Interest'
                  ? (
                  <>
                    {' '}
                    <h4>You have attempted test successfully</h4>
                    <h4> </h4>
                  </>
                    )
                  : locationn?.state?.name === 'Interest'
                    ? (
                        ''
                      )
                    : (
                  <h4>
                    {' '}
                    Thank you had given all the test.We will declare result
                    soon.
                  </h4>
                      )}
                {locationn.state.id === undefined ||
                locationn.state.allTestCompletedFlag === true
                  ? (
                      ''
                    )
                  : <>
                  {
                    (locationn.state.title === 'Language Usage')
                      ? <Link
                          // to ={{
                          //   pathname: '/test-process/test-question/interest-test',
                          //   state: { id: 2 }
                          // }}
                          to={'/test-process/test-question/interest-test'} state={{ data: 2 }}
                          className='theme-btn text-none'
                        >
                      Go to Next Test
                     </Link>
                      : <Link
                    to={`/test-process/test-category-detail/${
                      Number(locationn?.state?.id) + 1
                    }`}
                    className='theme-btn text-none'
                  >
                    Go to Next Test
                </Link>
                  }

                  </>

                    }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Congratulations
