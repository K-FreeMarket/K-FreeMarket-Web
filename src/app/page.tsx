import MainBanner from '@/components/mainpageComponents/MainBanner'
import MainBestProduct from '@/components/mainpageComponents/MainBestProduct'

export default function Home() {
  return (
    <main className='row-start-2 flex h-full w-full flex-col gap-[32px] px-60 pb-20'>
      <MainBanner />
      <MainBestProduct />
    </main>
  )
}
