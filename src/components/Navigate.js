import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Navigate = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default Navigate