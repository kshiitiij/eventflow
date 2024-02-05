import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <div className="flex items-center">
          <Image 
            src="/assets/images/logo.png"
            alt="logo"
            width={38}
            height={8}
            className="rounded"
          />
          <h5 className="font-bold ml-2">Event<span className="text-blue-600">Flow</span></h5>

          </div>
        </Link>

        <p>2024 EventFlow. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer