import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from './staticdata/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div>
        <h1 className='bg-[#3772ff]  w-full text-center text-white h-auto fixed '>Lorem ipsum is simply dummy text of the printing</h1>
        <Sidebar />
      </div>
    </div>
  )
}
