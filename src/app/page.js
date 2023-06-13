
import Image from 'next/image'
import HomeC from './components/Home'
import { Navbar } from './components/Navbar'
import Overview from './components/Overview'



export default function Home() {
  return (
    <div className='bg-orange-50 dark:bg-slate-500'>


      <div className='flex flex-col container mx-auto  min-h-screen bg-transparent '>

        <div className='mt-3 m-1'>
          <Navbar />
        </div>

        <div className='mt-6 m-1 '>

          <Overview />
          <HomeC />

        </div>
      </div>
    </div>

  )
}
