import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

/* React Packages */
import { useSelector, useDispatch } from 'react-redux'

/* Images */
import notification from '../../assets/images/notification.svg'
import profile from '../../assets/images/profile.png'

// Action files
import { viewProfileAction } from '../../Actions/auth'

function Header (props) {
  const dispatch = useDispatch()
  const token = localStorage.getItem(['token'])

  // useState
  const [searchValue, setsearchValue] = useState('')

  // useSelector
  const profileData = useSelector((state) => state.auth.profileData)

  useEffect(() => {
    if (token) {
      dispatch(viewProfileAction(token))
    }
  }, [])

  // Function for handleChnage
  const handleChange = (e) => {
    const value = e.target.value
    setsearchValue(value)
  }

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (props?.parentCallback) {
      // eslint-disable-next-line react/prop-types
      props?.parentCallback(searchValue)
    }
  }, [searchValue])

  return (
    <>
        <header className="header-section">
            <div className="search-box">
                <Form>
                    <Form.Group className="form-group mb-0" controlId="formsearch">
                        <Form.Control type="search" placeholder="Search"
                          onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                </Form>
            </div>
            <div className="profile-info">
                <button type='button' className="notification-box"><img src={notification} alt="" /></button>
                <button className="profile-box">
                    <img src={profile} alt="" />
                    <h6>{profileData?.user_name}</h6>
                </button>
            </div>
        </header>
    </>
  )
}

export default Header
