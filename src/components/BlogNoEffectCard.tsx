import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {
  title: string,
  description: string,
  date: string
  href: string
}

const BlogNoEffectCard = ({ date, title, description, href }: Props) => {
  return (
    <Link href={href} className="relative h-full md:p-6 p-4 bg-[rgb(41,41,47)] rounded-xl text-white">
      <div className="flex items-start justify-between mb-2 gap-3">
        <h1 className="md:text-2xl text-xl font-semibold md:p-2 md:pl-0 flex-1">{title}</h1>
        <p className="md:w-[150px] w-[75px] text-center">{formatDate(date)}</p>
      </div>
      <p className="text-muted-foreground">{description.substring(0, 150)}...</p>
    </Link>
  )
}

export default BlogNoEffectCard
