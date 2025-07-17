import ProductCard from '@/components/products/ProductCard'

export default function ProductGrid() {
  return (
    <div className='mt-5 w-full'>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl font-medium'>상품</h2>
        <div className='flex items-center justify-center gap-4'>
          <button>최신순</button>
          <button>인기순</button>
        </div>
      </div>
      <hr className='mt-2 text-gray-400' />
      <div className='mt-10 grid w-full grid-cols-4 gap-10'>
        <ProductCard
          id={1}
          title={'세상에서 가장 멋지고 사랑스러운 블랙박스'}
          price={115000}
          discountPrice={100000}
          discountRate={15}
        />
      </div>
    </div>
  )
}
