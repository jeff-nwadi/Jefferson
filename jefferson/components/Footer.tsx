import Link from "next/link"


export const Footer = () => {
  return (
    <div className="flex justify-center items-center py-20">
        <div className="flex gap-4">
            <Link href="https://x.com/jefftech91" className="flex heading-text items-center gap-2 bg-[#D9D9D9] rounded-full px-4 py-2">
                X/Twitter
            </Link>
            <Link href="https://github.com/jeff-nwadi" className="flex heading-text items-center gap-2 bg-[#D9D9D9] rounded-full px-4 py-2">
                GitHub
            </Link>
            <Link href="https://www.instagram.com/jefftech_5/" className="flex heading-text items-center gap-2 bg-[#D9D9D9] rounded-full px-4 py-2">
                Instagram
            </Link>
        </div>
    </div>
  )
}
