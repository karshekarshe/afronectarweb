import React, { useState, useLayoutEffect } from 'react'
import {CircleAnimationIcon} from "../pages/ActivateAccountPage";
const DelayedFallback = () => {
  const [show, setShow] = useState(true)
  useLayoutEffect(() => {
    const timer = setTimeout(() => setShow(false),
                                      3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {show && <CircleAnimationIcon className="w-32 stroke-green-600" />}
    </>
  )
}
export default DelayedFallback