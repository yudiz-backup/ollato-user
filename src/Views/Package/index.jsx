import React, { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import { useSnackbar } from 'react-notistack'

/* Components */
// import CommanSpinner from '../../Components/CommonSpinner'
import Sidebar from '../../Components/Sidebar'
// import Header from '../../Components/Header'
import MobileHeader from '../../Components/MobileHeader'
import TitleHeader from '../../Components/TitleHeader'

/* Action File */
import { getPackagesDataAction, purchasePackageAction, purchasePackageSucees } from '../../Actions/packages'

const Package = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  // useState
  const [toggle, setToggle] = useState()
  const [sort] = useState('title')
  const [start] = useState(0)
  const [sortOrder] = useState('asc')
  const [limit] = useState(10)
  const [search] = useState('')
  const isPurchased = useSelector(state => state.packages.packagePurchased)
  const packagePurchasedData = useSelector(state => state.packages.packagePurchasedDetails)
  const isPackagePurchaseFlag = useSelector(state => state.packages.isPackagePurchase)
  const meData = useSelector(state => state.auth.profileData)
  const data = useSelector(state => state.packages.packageDataById)
  const responseMessage = useSelector(state => state.packages.ressMessage)
  const previousProps = useRef({ data, packagePurchasedData, meData, isPackagePurchaseFlag }).current
  console.log('data :>> ', data)
  // useSelector
  const packagesArrayData = useSelector((state) => state.packages.packagesData)
  // Function for handle toggle
  const handleCallback = (toggle) => {
    setToggle(toggle)
  }

  // const handleCallback2 = (childData) => {
  //   setSearch(childData)
  // }
  function loadScript (src) {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }
  useEffect(() => {
    const data = {
      start,
      limit,
      sort,
      order: sortOrder
    }
    if (token && location.pathname === '/package') {
      dispatch(getPackagesDataAction(data, token))
    }
  }, [token && location.pathname])

  useEffect(() => {
    const data = {
      start,
      limit,
      sort,
      order: sortOrder,
      search
    }
    dispatch(getPackagesDataAction(data, token))
  }, [search])
  const handleActivePackage = async (id) => {
    console.log('id :>> ', id)
    const dataa = {
      packageId: id
    }
    console.log('dataa :>> ', dataa)
    if (dataa) {
      dispatch(purchasePackageAction(dataa, token))
    }
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    )

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?')
    }
  }
  console.log('packagePurchasedData', packagePurchasedData)
  // Toastify Notification
  useEffect(() => {
    if (previousProps?.isPackagePurchaseFlag !== isPackagePurchaseFlag) {
      if (isPackagePurchaseFlag === true) {
        enqueueSnackbar(`${responseMessage}`, {
          variant: 'success',
          autoHide: true,
          hide: 3000
        })
        navigate('/thank-you')
      } else if (isPackagePurchaseFlag === false) {
        enqueueSnackbar(`${responseMessage}`, {
          variant: 'error',
          autoHide: true,
          hide: 3000
        }
        )
      }
    }
    return () => {
      previousProps.isPackagePurchaseFlag = isPackagePurchaseFlag
    }
  }, [isPackagePurchaseFlag])
  useEffect(() => {
    if (previousProps?.isPurchased !== isPurchased) {
      if (isPurchased) {
        enqueueSnackbar(`${responseMessage}`, {
          variant: 'success',
          autoHide: true,
          hide: 3000
        })
      } else if (isPurchased === false) {
        enqueueSnackbar(`${responseMessage}`, {
          variant: 'error',
          autoHide: true,
          hide: 3000
        }
        )
      }
    }
    return () => {
      previousProps.isPurchased = isPurchased
    }
  }, [isPurchased])
  useEffect(() => {
    if (previousProps?.packagePurchasedData !== packagePurchasedData) {
      if (packagePurchasedData) {
        console.log('data?.title :>> ', data)
        const options = {
          key: 'rzp_test_zNZiB3KgbnDuIG', // Enter the Key ID generated from the Dashboard
          amount: Number(packagePurchasedData?.amount),
          currency: packagePurchasedData?.currency,
          name: meData?.first_name + ' ' + meData?.middle_name + ' ' + meData?.last_name,
          description: data?.title,
          email: meData?.email,
          image: { },
          order_id: packagePurchasedData?.id,
          handler: function (response) {
            const data = {
              razorpay_payment_id: response?.razorpay_payment_id,
              razorpay_order_id: response?.razorpay_order_id,
              razorpay_signature: response?.razorpay_signature
            }
            dispatch(purchasePackageSucees(data, token))
          },
          prefill: {
            name: meData?.first_name + ' ' + meData?.middle_name + ' ' + meData?.last_name,
            email: meData?.email,
            contact: meData?.mobile
          },
          notes: {
            address: 'Soumya Dey Corporate Office'
          },
          theme: {
            color: '#61dafb'
          }
        }

        const paymentObject = new window.Razorpay(options)
        // const paymentObject = new window.Razorpay(options)
        paymentObject.open()
      }
    }
    return () => {
      previousProps.packagePurchasedData = packagePurchasedData
    }
  }, [packagePurchasedData])
  return (
    <>
      <div
        className={`common-layout common-dashboard-wrapper no-breadcrumbs ${
          toggle ? 'open-sidebar' : ''
        }`}
      >
      <Helmet>
        <meta charSet='utf-8' />
        <title>Package - Ollato</title>
      </Helmet>
        <Sidebar
          location={location?.pathname}
          toggleHandle={handleCallback}
          toggle={toggle}
        />
        <MobileHeader parentCallback={handleCallback} toggle={toggle} setToggle={setToggle} />
         <>
            <div className='main-content-box price-grid'>
              {/* <Header parentCallback={handleCallback2} /> */}
              <TitleHeader title='Your Courses Package' location={location} />
              <div className='main-layout'>
                <div className='package-module'>
                  <ul>
                    {packagesArrayData && packagesArrayData.length >= 0
                      ? (
                          packagesArrayData.map((data) => {
                            return (
                          <>
                            <li className='common-white-box'>
                              <div className='left-box'>
                                <h5>{data.title}</h5>
                               <div className="bullet-point">
                               <h4 className='text-align-left' dangerouslySetInnerHTML={{ __html: data?.description }} ></h4>
                               </div>
                              </div>
                              <div className='right-box'>
                                <div className='price-box'>
                                  <h5>{data.amount}/- Rs</h5>
                                  <p style={{ color: 'black' }}> (inclusive GST)</p>
                                </div>
                                {/* <NavLink
                                  to={`/package/package-detail/${data.id}`}
                                  className='theme-btn'
                                >
                                  View Details
                                </NavLink> */}
                                <button className="theme-btn text-none" onClick={() => handleActivePackage(data.id)} >Active Package Now</button>
                              </div>
                            </li>
                          </>
                            )
                          })
                        )
                      : (
                           <>
                           </>
                        )}
                  </ul>
                </div>
              </div>
            </div>
          </>
      </div>
    </>
  )
}

export default Package
