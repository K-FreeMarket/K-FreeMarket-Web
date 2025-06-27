'use client'

import OAuthLogoutButton from '@/components/buttons/OAuthLogoutButton'
import User from '@image/icons/user.svg'
import Link from 'next/link'
import { useState } from 'react'

export default function UserOption() {
  const [open, setOpen] = useState(false)

  return (
    <div
      className='relative inline-block'
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <User className='h-7 w-7 cursor-pointer' />

      {/* 마우스 감지용 투명 패딩 영역 */}
      {open && (
        <>
          <div className='absolute top-full right-0 z-10 h-3 w-32' />
          <div className='absolute -right-13 z-30 mt-3 w-32 rounded-md border border-gray-200 bg-white p-2 shadow-md'>
            <Link href='/login' className='block px-2 py-1 text-black hover:bg-gray-100'>
              로그인
            </Link>
            <OAuthLogoutButton />
          </div>
        </>
      )}
    </div>
  )
}
