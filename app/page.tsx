import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=' p-10 flex flex-wrap-reverse  justify-around'>
      <div className=' w-96 flex flex-col justify-center mt-5'>
        <h1 className='text-4xl font-bold'>
          Cyber Security & <br />Software Enginering
        </h1>
        <span className='text-xl'> o b Darija!</span>
        <div className='mt-2 py-1'>
          {/* TODO :Make it A Component */}
          <Link className='px-3 py-1 rounded-lg bg-red-600 text-orange-300 font-bold' href={"/blog"}>Blog</Link>
          <Link className='px-3 py-1 mx-3 rounded-lg bg-orange-300 text-red-600 font-bold' href={"/courses"}>Courses</Link>
        </div>
      </div>
      <div className='  w-96flex justify-center items-center'>
        <Image
          src="/hckawa-logo-title-glasses.png"
          alt="Picture of the author"
          width={200}
          height={300}
        />
      </div>
    </div>
  )
}
