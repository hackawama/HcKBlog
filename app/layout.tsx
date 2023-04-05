import Link from "next/link"
import "../styles/globals.css"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <><div className="h-2.5 mt-20 bg-red-600 "></div>
      <div className="mt-3 text-center	">
        {/* TODO : Make it An Array */}
        <Link className="mx-3 text-xl font-bold	" href={"/blog "}>Blog</Link>
        <Link className="mx-3 text-xl font-bold	" href={"/courses "}>Courses</Link>
        <Link className="mx-3 text-xl font-bold	" href={"/books "}>Books</Link>
        <Link className="mx-3 text-xl font-bold	" href={"/aboutme "}>About me</Link>
      </div></>
  )
  const footer = (<div>
    <div className="flex items-center flex-col">
      <div className="flex">
        {/* TODO : Make it An Component */}
        <FaTwitter size={25} color="lightgray" className="mx-1" />
        <FaLinkedin size={25} color="lightgray" className="mx-1" />
        <FaGithub size={25} color="lightgray" className="mx-1" />
      </div>
      <span className="text-sm text-gray-300">H.B @ 2023 V 1.0</span>
    </div>
  </div>)
  return (
    <html lang="en">
      <head />

      <body>
        <header>{header}</header>
        {children}
        <footer>{footer}</footer>
      </body>


    </html>
  )
}
