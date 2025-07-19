import MainBanner from '@/components/main/MainBanner'
import MainBestProduct from '@/components/main/MainBestProduct'
import MainEventProducts from '@/components/main/MainEvnetProducts'

export default function Home() {
  return (
    <main className='row-start-2 flex h-full w-full flex-col gap-[32px] px-60 pb-20'>
      <MainBanner />
      <MainEventProducts />
      <MainBestProduct />
    </main>
  )
}
