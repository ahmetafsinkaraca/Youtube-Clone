import React from 'react'
import HomeLayout from './pages/Home/layout'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home/home'
import MainPage from './pages/Content/mainpage'
import Subscription from './pages/Content/subscription'
import Shorts from './pages/Content/shorts'

const routes = [
  {
    path : '/',
    element:<HomeLayout/>,
    children:[
      {
          index:true,
          element:<Home/>
      },
      {
        path:'mainpage',
        element:<MainPage/>
      },
      {
        path:'shorts',
        element: <Shorts/>
      },
      {
        path: 'subscription',
        element: <Subscription />
      },
    ]
  }
]

const authCheck = routes => routes.map(route => {
  if(route?.auth){
    route.element = <PrivateRoute>{route.element}</PrivateRoute>
  }
  if(route?.children){
    route.children = authCheck(route.children)
  }
  return route
})

export default authCheck(routes)
