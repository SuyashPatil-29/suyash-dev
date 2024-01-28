import { allAuthors, allBlogs } from "contentlayer/generated"
import { notFound } from "next/navigation"

import { Mdx } from "@/components/MdxComponents"

import "@/app/mdx.css"
import Image from "next/image"
import Link from "next/link"

import { Icons } from "@/components/Icons"
import { buttonVariants } from "@/components/ui/button"
import { cn, formatDate } from "@/lib/utils"


interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params) {
  const slug = params?.slug
  const post = allBlogs.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="relative max-w-3xl py-6 lg:py-10 prose-base">
      <Link
        href="/archive"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex text-white hover:text-black rounded-xl"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all posts
      </Link>
      <div>
        {post.date && (
          <time
            dateTime={post.date}
            className="block text-sm text-gray-300"
          >
            Published on {formatDate(post.date)}
          </time>
        )}
        <h1 className="mt-2 inline-block font-semibold text-4xl leading-tight lg:text-5xl lg:font-extrabold text-white">
          {post.title}
        </h1>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <Mdx code={post.body.code} />
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }),"text-white hover:text-black rounded-xl")}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
    </article>
  )
}