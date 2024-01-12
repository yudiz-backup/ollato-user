import React, { useEffect, useRef, useState } from 'react'

/* React Packages */
import { Link, useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

/* Components */
import Sidebar from '../../Components/Sidebar'
import Header from '../../Components/Header'
import MobileHeader from '../../Components/MobileHeader'
import TitleHeader from '../../Components/TitleHeader'
import backarrow from '../../assets/images/backarrow.svg'

/* Action file */
import { getPackageDataByIDAction } from '../../Actions/packages'

const PackageDetail = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const params = useParams()

  // Token
  const token = localStorage.getItem('token')

  // useState
  const [packageArrayData, setPackagesArrayData] = useState([])
  const [toggle, setToggle] = useState()

  // useSelector
  const data = useSelector(state => state.packages.packageDataById)
  const previousProps = useRef({ data }).current

  useEffect(() => {
    if (token) {
      dispatch(getPackageDataByIDAction(params.id, token))
    }
  }, [token])
  useEffect(() => {
    if (previousProps?.data !== data) {
      if (data) {
        setPackagesArrayData(data)
      }
    }
    return () => {
      previousProps.data = data
    }
  }, [data])

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
            <Header />
            <TitleHeader title='Your Courses Package'/>
            <div className='main-layout whitebox-layout'>
              <div className="back-btn">
              <Link to={'/activepackage-detail'}><img src={backarrow} alt="" /> <span>Back</span> </Link>
              {/* <Link to="/forgot-password" >Forgot Password?</Link> */}
              </div>
                <div className='common-white-box'>
                    <div className="left-box">
                        <h5>{packageArrayData?.title}</h5>
                        <h4>{packageArrayData?.f2f_call ? ' Face-2-Face meeting' : ''}</h4>
                        <h4>{packageArrayData?.online_test ? ' Online Testing' : ''}</h4>
                        <h4>{packageArrayData?.video_call ? 'Video Call' : ''}</h4>
                    </div>
                    <div className="right-box">
                        <div className="price-box">
                            <h5>{packageArrayData?.amount}/- Rs</h5>
                            <p>+ 18% GST</p>
                        </div>
                    </div>
                </div>
                <div className="package-description">
                    <p>{packageArrayData?.description}</p>
                </div>
                {/* <button className="theme-btn text-none">Active Package Now</button> */}
                {/* <Link className="theme-btn text-none" to={`/package-detail/active/${packageArrayData?.id}`}>Active Package Now</Link> */}
            </div>
          </div>
    </div>
  </>
  )
}

export default PackageDetail
