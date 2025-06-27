import ShoppingCart from '@image/icons/shoppingbag.svg'
import Link from 'next/link'
import UserOption from '@/components/HeaderComponents/UserOption'

export default function HeaderRight() {
  return (
    <div className='flex w-50 justify-end gap-5'>
      <UserOption />

      <Link href={'/cart'}>
        <ShoppingCart className='h-7 w-7' />
      </Link>
    </div>
  )
}
