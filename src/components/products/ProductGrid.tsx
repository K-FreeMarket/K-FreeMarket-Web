import ProductCard from '@/components/products/ProductCard'

interface ProductGridInterface {
  productGridTitle: string
}

export default function ProductGrid({ productGridTitle }: ProductGridInterface) {
  const productList = [
    {
      id: 1,
      title: '세상에서 가장 멋지고 사랑스러운 블랙박스',
      price: 115000,
      discountPrice: 100000,
      discountRate: 15,
    },
    {
      id: 2,
      title: '세상에서 가장 멋지고 사랑스러운 블랙박스2',
      price: 120000,
      discountPrice: 200000,
      discountRate: 10,
    },
  ]
  return (
    <div className='mt-5 w-full'>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl font-medium'>{productGridTitle}</h2>
        <div className='flex items-center justify-center gap-4'>
          <button>최신순</button>
          <button>인기순</button>
        </div>
      </div>
      <hr className='mt-2 text-gray-400' />
      <div className='mt-10 grid w-full grid-cols-4 gap-10'>
        {productList.map((item, key) => (
          <ProductCard
            key={`product-${key}`}
            id={item.id}
            title={item.title}
            price={item.price}
            discountPrice={item.discountPrice}
            discountRate={item.discountRate}
          />
        ))}
      </div>
    </div>
  )
}
