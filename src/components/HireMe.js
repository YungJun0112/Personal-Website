import React from 'react'
import { HireMeCircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className="fixed right-4 bottom-4 flex items-center justify-center overflow-hidden">
        <div className="w-36 h-auto flex items-center justify-center relative">
            <HireMeCircularText className={"fill-dark animate-spin-slow"}/>
        </div>
    </div>
  )
}

export default HireMe