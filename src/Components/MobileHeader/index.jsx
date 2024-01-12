import React, { } from 'react'
import { bool, PropTypes } from 'prop-types'

// Images
import logo from '../../assets/images/logo-mobile.svg'
import hamburger from '../../assets/images/hamburger.svg'
import notification from '../../assets/images/notification.svg'

function MobileHeader (props) {
  const handleToggle = () => {
    console.log('--------------------------')
    props?.setToggle(!props?.toggle)
  }
  return (
    <>
        <div className="mobile-header-section d-md-none d-flex justify-content-between align-items-center open-sidebar ">
                <div className="logo-box">
                    <img src={logo} />
                </div>
                <div className="mobile-profile">
                    <button type='button' className="notification-box"><img src={notification} alt="notification" /></button>
                    <button className="hamburger-menu" onClick={() => handleToggle()}>
                        <img src={hamburger} alt="hamburger" />
                    </button>
                </div>
        </div>
    </>
  )
}

export default MobileHeader

MobileHeader.propTypes = {
  parentCallback: PropTypes.Func,
  setToggle: PropTypes.Func,
  toggle: bool
}
