import ProductDetail from '@/components/products/ProductDetail'

type Params = Promise<{ id: string }>

export default async function ProductDetailPage({ params }: { params: Params }) {
  const { id } = await params

  return (
    <main className='row-start-2 flex h-full w-full flex-col gap-[32px] px-60 pb-20'>
      <ProductDetail id={id} />
    </main>
  )
}
