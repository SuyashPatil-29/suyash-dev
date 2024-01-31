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
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-semibold md:p-2 md:pl-0">{title}</h1>
        <p>{formatDate(date)}</p>
      </div>
      <p className="text-muted-foreground">{description.substring(0, 150)}...</p>
    </Link>
  )
}

export default BlogNoEffectCard
