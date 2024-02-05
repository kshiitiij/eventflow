import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex-1'>
      <div className="flex h-screen flex-col">
        <Header/>
        {children}
        <Footer/>
      </div>
    </div>
  )
}
