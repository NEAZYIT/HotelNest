import Link from "next/link"
import { BiMessageDetail } from "react-icons/bi"
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="mt-16 font-montserrat">
      <div className="container mx-auto px-4">
        <Link href="/" className="font-black text-tertiary-light">
            HotelNest
        </Link>

        <h4 className="font-semibold text-[40px] py-6">Contact</h4>

        <div className="flex flex-wrap gap-16 items-center justify-between">
            <div className="flex-1">
                <p>address for example xxx</p>
                <div className="flex items-center py-4">
                    <BsFillSendFill />
                    <p className="ml-2">CodeWithme</p>
                </div>

                <div className="flex items-center">
                    <BsTelephoneOutbound />
                    <p className="ml-2">xxx-xxx-xxx</p>
                </div>

                <div className="flex items-center pt-4">
                    <BiMessageDetail />
                    <p className="ml-2">CodeWithme</p>
                </div>                
            </div>

            <div className="flex-1 md:text-right">
              <p className="pb-4">Us</p>
              <p className="pb-4">Get In Touch</p>
              <p className="pb-4">Our Privacy</p>
              <p className="pb-4">Terms of Service</p>
              <p>Costume Support</p>
            </div>

            <div className="flex-1 md:text-right">
              <p className="pb-4">Dining Experience</p>
              <p className="pb-4">Wellness</p>
              <p className="pb-4">Fitness</p>
              <p className="pb-4">Sport</p>
              <p>Event</p>
            </div>
        </div>
      </div>
      
      <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0" />
    </footer>
  )
}

export default Footer