import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center">
    {/* <span className="font-bold text-emerald-600 text-xl">DicoDZ</span> */}
  <Image src='/dicodz.png' alt='logo' width={74} height={29} />

      </div>
  )
}

export default Logo
