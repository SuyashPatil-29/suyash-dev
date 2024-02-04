import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="text-center text-white flex flex-col items-center gap-6 pt-20">
      <h2 className="text-3xl font-bold">This is a test blog. Please check back later</h2>
      <Link href="/" className={buttonVariants({variant : "outline"})}>Return Home</Link>
    </div>
  )
}
