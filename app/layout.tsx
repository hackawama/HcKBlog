'use client';

import Link from "next/link"
import "../styles/globals.css"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import { data } from "@/data";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const header =
    pathname === "/" ? <><div className="h-2.5 mt-20 bg-red-600 "></div>
      <div className="mt-3 text-center	">
        {/* TODO : Make it An Array */}
        <Link className="mx-3 text-xl font-bold	" href={"/blog "}>Blog</Link>
        <Link className="mx-3 text-xl font-bold	" href={"/courses "}>Courses</Link>
        <Link className="mx-3 text-xl font-bold	" href={"/projects "}>Projects</Link>
        <Link className="mx-3 text-xl font-bold	" href={"/aboutme "}>About me</Link>
      </div></> : <div className="flex justify-center sm:justify-between align-middle px-2 sm:px-8 py-6 flex-wrap">
      <Link href={"/"}>
        <Image
          src="/logoText.png"
          alt="Picture of the author"
          width={200}
          height={90}
          className="max-w-xs mb-2"
        /></Link>
      <div className=" flex justify-center align-middle flex-wrap">
        {/* TODO : Make it An Array */}
        <Link className={pathname !== "/blog" ? "mx-3 md:mx-6 text-xl font-bold	" : "mx-3  md:mx-6 text-xl  text-red-600 font-bold"} href={"/blog "}>Blog</Link>
        <Link className="mx-3 md:mx-6 text-xl font-bold	" href={"/courses "}>Courses</Link>
        <Link className="mx-3  md:mx-6 text-xl font-bold	" href={"/projects "}>Projects</Link>
        <Link className="mx-3  md:mx-6 text-xl font-bold	" href={"/aboutme "}>About me</Link>

      </div>
    </div>

  const footer = (<div>
    <div className="flex items-center flex-col mt-20">
      <div className="flex">
        {
          data.socialLinks.map(s => <Link href={s.link}>
            {s.icon}
          </Link>)
        }
      </div>
      <span className="text-sm text-gray-300">{data.footerSigniture}</span>
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
