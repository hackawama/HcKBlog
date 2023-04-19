

import Link from "next/link"
import { PostMetadata } from "../lib/PostMetadata"

export default function PostItem({ link, title, intention, description, category, createdAt }: PostMetadata) {
    return (
        <Link href={"/blog/" + link} className="block mt-3 w-4/5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
            <p className="font-normal text-gray-400 ">{description}</p>
            <span className="text-xs text-gray-300">{createdAt}</span>
            <div className='mt-2'>
                <span className='px-3 py-1 rounded-lg bg-red-600 text-orange-300 font-bold' >{intention}</span>
                <span className='px-3 py-1 mx-3 rounded-lg bg-orange-300 text-red-600 font-bold' >{category}</span>
            </div>
        </Link>
    )
}
