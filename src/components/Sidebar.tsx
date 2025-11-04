import React, { useState } from "react"



interface MenuItem {
  icon: string,
  label: string,
  href?: string
}

interface MenuSection {
  title: string,
  item: MenuItem[]
}
const menuSections: MenuSection[] = [
  {
    title: "Main menu",
    item: [
      { icon: "/home.svg", label: "Dashboard" },
      { icon: "/Cart.svg", label: "Order Management" },
      { icon: "/star.svg", label: "Subscription" },
      { icon: "/money.svg", label: "Payout" },
      { icon: "/customers.svg", label: "Customers" },
      { icon: "atm-card.svg", label: "Transaction" },
      { icon: "/ticket.svg", label: "Coupon Code" },
    ]
  },
  {
    title: "Partners",
    item: [
      { icon: "/circle-plus.svg", label: "Kitchen Partners" },
      { icon: "/circle-plus.svg", label: "Rider Partners" },
      { icon: "/image-icon.svg", label: "Kitchen Inventory" },
      { icon: "/circle-square.svg", label: "Categories" },
      { icon: "/packed-box.svg", label: "Rider Application" },
      { icon: "/reviews.svg", label: "Kitchen Reviews" },
    ]
  },
  {
    title: "Admin",
    item: [
      { icon: "/user-profile-circle.svg", label: "Users" }
    ]
  }

]

const Sidebar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<string>("");
  const [notification, setNotification] = useState<string[]>(["Categories", "Order Management"])

  const handleAcitveIndex = (element: string) => {
    setActiveIndex(element)
    setNotification((prev) => (
      prev.filter( item => item !== element)
      
    )
  )
  }
  return (
    <aside className="h-screen w-[294px] shadow-lg bg-white">
      <nav className=" h-full flex flex-col ">
        <div id="logo" className='flex flex-row gap-2 px-4 pt-6 items-center'>
          <img src="/Megainventory.svg" alt="Mega Inventory Logo" />
          <span className="lato-regular text-[#6A717F] text-[15px]"> Mega Inventory</span>
        </div>
        <div className="overflow-y-scroll scrollbar-hide">
          {
            menuSections.map((section, index) => {
              return (
                <div key={index} className="lato-regular">
                  <p className="px-5 lato-regular text-[15px] pb-[15px] mt-[27.63px] text-[#6A717F]">{section.title}</p>
                  <div className="flex flex-col px-3.5 gap-2 justify-center text-center">
                    {

                      section.item.map((item, index) => {
                        return (
                          <div
                            key={index}
                            onClick={() => handleAcitveIndex(item.label)}
                            className="flex  text-gray-500  hover:cursor-pointer hover:text-black items-center">
                              
                            <div className={`relative rounded-tr-xl rounded-br-xl right-3.5 w-1 h-[47px] ${activeIndex === item.label ? " bg-[#121212] " : "bg-white"}`}> </div>

                            <div className="flex flex-row gap-2 px-4 py-[9px] items-center  text-center">
                              <img src={item.icon} className="text-[#6A717F] text-[16px]" />
                              <p className={` w-full text-[16px] ${activeIndex == item.label ? "text-[#121212] lato-bold" : ""}`}> {item.label}</p>
                            </div>

                            <div className={`w-2 h-2 bg-[#4EA674] rounded-full ${notification.includes(item.label)? "" : "hidden"}`}></div>

                          </div>
                        )
                      })
                    }
                  </div>
                </div>


              )
            })
          }
        </div>

        <div id="profile" className='flex gap-3 relative bottom-[26px] left-5 items-center pt-10 cursor-pointer '>
          <div className='w-10'>
            <img src="https://ui-avatars.com/api/?name=Arjun+Rathore&rounded=true&background=random&bold=true&border=true" alt="" />
          </div>
          <div className='flex flex-col text-[14px] gap-1 leading-4'>
            <span className='lato-semibold text-[#1F2937]'>Arjun Rathore</span>
            <span className='inter-regular text-[#737373]'>Arjun@pakaoo.com</span>
          </div>
          <img src="/logout.svg" className="pl-1" />
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
