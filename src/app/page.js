
import Image from 'next/image'
import HomeC from './components/Home'
import { Navbar } from './components/Navbar'


export default function Home() {
  return (
    <div>

      <Navbar />
      <div className='flex flex-col container mx-auto '>

        <div className='mt-8'>

          <HomeC />
        </div>
      </div>
    </div>

  )
}
