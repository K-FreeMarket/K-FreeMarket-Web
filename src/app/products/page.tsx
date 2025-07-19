import Image from 'next/image'
import ProductsImage from '@image/images/products.png'
import ProductGrid from '@/components/products/ProductGrid'

export default function ProductPage() {
  return (
    <main className='row-start-2 flex h-full w-full flex-col gap-[32px] px-60 pb-20'>
      <div className='w-full'>
        <Image src={ProductsImage} alt='상품 이미지' loading='lazy' />
      </div>

      <ProductGrid productGridTitle={'상품'} />
    </main>
  )
}
