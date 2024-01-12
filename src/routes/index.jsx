/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
/* Components */
import PublicRoute from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'
import { useSnackbar } from 'react-notistack'

import Login from '../Views/auth/login'
import SignUp from '../Views/auth/SignUp'
import EducationDetails from '../Components/Signup/EducationDetails'
// const PublicRoute = React.lazy(() => import('./PrivateRoutes'))
// const PrivateRoutes = React.lazy(() => import('./PublicRoutes'))
// const Login = React.lazy(() => import('../Views/auth/login'))
// const SignUp = React.lazy(() => import('../Views/auth/SignUp'))
// const PublicRoute = React.lazy(() => import('./PrivateRoutes'))
// const PrivateRoutes = React.lazy(() => import('./PublicRoutes'))
// const Login = React.lazy(() => import('../Views/auth/login'))
// const SignUp = React.lazy(() => import('../Views/auth/SignUp'))
const ThankYou = React.lazy(() => import('../Components/ThankYou'))
const Forgot = React.lazy(() => import('../Views/auth/ForgotPassword'))
const LoginWithOTP = React.lazy(() => import('../Views/auth/LoginWithOtp'))
const OneTimePassword = React.lazy(() => import('../Views/auth/OneTimePassword'))
const Dashboard = React.lazy(() => import('../Views/Dashboard'))
const ResetPassword = React.lazy(() => import('../Views/auth/ResetPassword'))
const PackageDetail = React.lazy(() => import('../Views/Package/PackageDetail'))
const ActivePackageDetail = React.lazy(() => import('../Views/Package/ActivePackageDetail'))
const PackageHistory = React.lazy(() => import('../Views/Package/PackageHistory'))
const Signup = React.lazy(() => import('../Views/auth/SignUp'))
const Package = React.lazy(() => import('../Views/Package'))
const TestProcess = React.lazy(() => import('../Views/TestProcess'))
const TestCategoryDetail = React.lazy(() => import('../Views/TestProcess/TestCategoryDetail'))
const TestQuestion = React.lazy(() => import('../Views/TestProcess/TestQuestion'))
const InterestTestQuestion = React.lazy(() => import('../Views/TestProcess/InterestQuestionTest'))
const Timesup = React.lazy(() => import('../Views/TestProcess/Timesup'))
const Congratulations = React.lazy(() => import('../Views/TestProcess/Congratulations'))
const TestCategoryDetails = React.lazy(() => import('../Views/TestProcess/TestCategoryDetail'))
const MyProfile = React.lazy(() => import('../Views/Settings/MyProfile'))
const ChangePassword = React.lazy(() => import('../Views/Settings/ChangePassword'))
const EditMyProfile = React.lazy(() => import('../Views/Settings/EditMyProfile'))
const Assessment = React.lazy(() => import('../Views/Assessment'))
const TestScore = React.lazy(() => import('../Views/Assessment/TestScore'))
const Counselling = React.lazy(() => import('../Views/Counselling'))
const SessionHistory = React.lazy(() => import('../Views/Counselling/SessionHistory'))
const Reschedule = React.lazy(() => import('../Views/Counselling/Reschedule'))
const CancelSession = React.lazy(() => import('../Views/Counselling/CancelSession'))
const CounselorDetail = React.lazy(() => import('../Views/Counselling/CounselorDetail'))
const Congragualations = React.lazy(() => import('../Views/TestProcess/Congratulations'))
const PackDetail = React.lazy(() => import('../Views/Package/AddOnPackageDetail'))
const Chart = React.lazy(() => import('../Views/Assessment/graph'))
const ViewCounsellor = React.lazy(() => import('../Views/Counselling/ViewCounselor'))
function RoutesFile () {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  axios.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    if (error.response.status === 401) {
      localStorage.removeItem('token')
      enqueueSnackbar('Authentication Failed! Please login again', {
        variant: 'error',
        autoHide: true,
        hide: 3000
      })
      // window.location = '/'
      navigate('/login')
    } else if (error.toJSON().message === 'Network Error') {
      enqueueSnackbar('No Internet Connection. Please Connect it!', {
        variant: 'error',
        autoHide: true,
        hide: 3000
      })
    } else {
      return Promise.reject(error)
    }
  })
  return (
     <>
      <Routes>
      {/* <Route
        exact
        path='/'
        element={<PublicRoute element={<Login />} />}
        /> */}
      {/* {Router.map((route) => {
      return route.children.map((child) => {
        if (route.isRequiredLoggedIn) {
          return (
            <PrivateRoutes isAllowedTo={child.isAllowedTo} path={child.path} exact={child.exact} component={child.component} {...child} />
          )
        } else {
          return (
            <>
              <Route exact path="/" element={<Login />} ></Route>
              <Route exact path="/forgot-password" element={<Forgot />} ></Route>
            </>
          )
          // return <PublicRoute path={child.path} exact={child.exact} component={child.component} />
        }
      })
    })} */}

{/*       <Route exact path="/dashboard" element={<Dashboard />}></Route>
      <Route exact path="/signup-educationdetails" element={<EducationDetails />}></Route>
      <Route exact path="/signup" element={<Signup />}></Route>
      <Route exact path="/reset-password" element={<ResetPassword />}></Route>
      <Route exact path="/one-time-password" element={<OneTimePassword />}></Route>
      <Route exact path="/forgot-password" element={<Forgot />}></Route>
      <Route exact path="/login-with-otp" element={<LoginWithOTP />}></Route>
      <Route exact path="/" element={<Login />}></Route>
      <Route exact path="/signup" element={<SignUp />}></Route>
      <Route exact path="/package" element={<Package />}></Route>
      <Route exact path="/package-detail/:id" element={<PackageDetail />}></Route>
      <Route exact path="/activepackage-detail/:id" element={<ActivePackageDetail />}></Route>
      <Route exact path="/package-history" element={<PackageHistory />}></Route>
      <Route exact path="/test-process" element={<TestProcess />}></Route>
      <Route exact path="/test-category-detail" element={<TestCategoryDetail />}></Route>
      <Route exact path="/test-question" element={<TestQuestion />}></Route>
      <Route exact path="/timesup" element={<Timesup />}></Route>
      <Route exact path="/congratulations" element={<Congratulations />}></Route>
      <Route exact path="/settings/my-profile" element={<MyProfile />}></Route>
      <Route exact path="/settings/change-password" element={<ChangePassword />}></Route>
      <Route exact path="/settings/my-profile/editmyprofile" element={<EditMyProfile />}></Route>
      <Route exact path="/assessment" element={<Assessment />}></Route>
      <Route exact path="/assessment/test-score" element={<TestScore />}></Route> */}
      <Route path="/*" render={() => <Navigate to="/" />} />
    </Routes>
    {/* <Routes>
        <Route
    {/* //   <Route exact path="/dashboard" element={<Dashboard />}></Route>
    //   <Route exact path="/signup-educationdetails" element={<EducationDetails />}></Route>
    //   <Route exact path="/signup" element={<Signup />}></Route>
    //   <Route exact path="/reset-password" element={<ResetPassword />}></Route>
    //   <Route exact path="/one-time-password" element={<OneTimePassword />}></Route>
    //   <Route exact path="/forgot-password" element={<Forgot />}></Route>
    //   <Route exact path="/login-with-otp" element={<LoginWithOTP />}></Route>
    //   <Route exact path="/" element={<Login />}></Route>
    //   <Route exact path="/signup" element={<SignUp />}></Route>
    //   <Route exact path="/package" element={<Package />}></Route>
    //   <Route exact path="/package-detail/:id" element={<PackageDetail />}></Route>
    //   <Route exact path="/activepackage-detail/:id" element={<ActivePackageDetail />}></Route>
    //   <Route exact path="/package-history" element={<PackageHistory />}></Route>
    //   <Route exact path="/test-process" element={<TestProcess />}></Route>
    //   <Route exact path="/test-category-detail" element={<TestCategoryDetail />}></Route>
    //   <Route exact path="/test-question" element={<TestQuestion />}></Route>
    //   <Route exact path="/timesup" element={<Timesup />}></Route>
    //   <Route exact path="/congratulations" element={<Congratulations />}></Route>
    //   <Route path="/*" render={() => <Navigate to="/" />} />
    // </Routes> */}
    <Routes>
        <Route
          exact
          path='/'
          element={<PublicRoute element={<Login />} />}
        />
        <Route
          exact
          path='/login'
          element={<PublicRoute element={<Login />} />}
        />
        <Route
          exact
          path='/signup'
          element={<PublicRoute element={<SignUp />} />}
        />
        <Route
          exact
          path='/signup-educationdetails'
          element={<PublicRoute element={<EducationDetails />} />}
        />
        <Route
          exact
          path='/reset-password'
          element={<PublicRoute element={<ResetPassword />} />}
        />
        <Route
          exact
          path='/one-time-password'
          element={<PublicRoute element={<OneTimePassword />} />}
        />
        <Route
          exact
          path='/forgot-password'
          element={<PublicRoute element={<Forgot />} />}
        />
        <Route
          exact
          path='/login-with-otp'
          element={<PublicRoute element={<LoginWithOTP />} />}
        />
        <Route
          exact
          path='/'
          element={<PublicRoute element={<Login />} />}
        />
        <Route
          exact
          path='/dashboard'
          element={<PrivateRoutes element={<Dashboard />} />}
        />
        <Route
          exact
          path='/assetment'
          element={<PrivateRoutes element={<Assessment />} />}
        />
        <Route
          exact
          path='/package'
          element={<PrivateRoutes element={<Package />} />}
        />
        <Route
          exact
          path='/thank-you'
          element={<PrivateRoutes element={<ThankYou />} />}
        />
        <Route
          exact
          path='package/package-detail/:id'
          element={<PrivateRoutes element={<PackageDetail />} />}
        />
        <Route
          exact
          path='/package-detail/active/:id'
          element={<PrivateRoutes element={<PackDetail />} />}
        />
        <Route
          exact
          path='/activepackage-detail'
          element={<PrivateRoutes element={<ActivePackageDetail />} />}
        />
        <Route
          exact
          path='/package-history'
          element={<PrivateRoutes element={<PackageHistory />} />}
        />
        <Route
          exact
          path='/test-process'
          element={<PrivateRoutes element={<TestProcess />} />}
        />
        <Route
          exact
          path='/test-process/test-category-detail/:id'
          element={<PrivateRoutes element={<TestCategoryDetails />} />}
        />
        <Route
          exact
          path='/test-process/test-question/:id'
          element={<PrivateRoutes element={<TestQuestion />} />}
        />
        <Route
          exact
          path='/test-process/test-question/interest-test'
          element={<PrivateRoutes element={<InterestTestQuestion />} />}
        />
        <Route
          exact
          path="/settings/my-profile"
          element={<PrivateRoutes element={<MyProfile />} />}>
        </Route>
        <Route
          exact
          path="/settings/change-password"
          element={<PrivateRoutes element={<ChangePassword />} />}>
        </Route>
        <Route
          exact
          path="/settings/my-profile/editmyprofile"
          element={<PrivateRoutes element={<EditMyProfile />} />}>
        </Route>
        <Route
          exact
          path="/congratulations"
          element={<PrivateRoutes element={<Congragualations />} /> }>
        </Route>
        <Route
          exact
          path="/counselling"
          element={<PrivateRoutes element={<Counselling />} /> }>
        </Route>
        <Route
          exact
          path="/counselling/career"
          element={<PrivateRoutes element={<Counselling />} /> }>
        </Route>
        <Route
          exact
          path="/counselling/over"
          element={<PrivateRoutes element={<Counselling />} /> }>
        </Route>
        <Route
          exact
          path="/counselling/psy"
          element={<PrivateRoutes element={<Counselling />} /> }>
        </Route>
        <Route
          exact
          path="/counselling/expert"
          element={<PrivateRoutes element={<Counselling />} /> }>
        </Route>
        <Route
          exact
          path="/counselling/session-history/:type"
          element={<PrivateRoutes element={<SessionHistory />} /> }>
        </Route>
        <Route
          exact
          path="/counselling/reschedule"
          element={<PrivateRoutes element={<Reschedule />} /> }>
        </Route>
        <Route
          exact
          path="/counselling/cancel-session"
          element={<PrivateRoutes element={<CancelSession />} /> }>
        </Route>
        <Route
          exact
          path="/counselling/counselor-detail/:id"
          element={<PrivateRoutes element={<CounselorDetail />} /> }>
        </Route>
        <Route
          exact
          path="/counselling/session-detail/:id"
          element={<PrivateRoutes element={<ViewCounsellor />} /> }>
        </Route>
        <Route
          exact
          path="/chart"
          element={<PrivateRoutes element={<Chart />} /> }>
        </Route>
      </Routes>
    </>
  )
}
export default RoutesFile
