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
  const [activeIndex, setActiveIndex] = useState <string>("");

  const handleAcitveIndex = (item : string) =>{
    setActiveIndex(item)
  }
  return (
    <aside className="h-screen">
      <nav className=" h-full flex flex-col w-60">
        <div id="logo" className='flex flex-row gap-2 px-4 pt-6 items-center'>
          <img src="/Megainventory.svg" alt="Mega Inventory Logo" />
          <span className="lato-regular text-gray-400 text-[15px]"> Mega Inventory</span>
        </div>
        <div className="overflow-y-scroll scrollbar-hide">
          {
            menuSections.map((section, index) => {
              return (
                <div key={index} className="lato-regular">
                  <p className="my-5 mx-4 lato-regular text-[15px] mb-3 text-[#6A717F]">{section.title}</p>
                  {
                    section.item.map((item, index) => {
                      return (
                        <div 
                        key={index} 
                        onClick={()=>handleAcitveIndex(item.label)}
                        className="flex flex-row text-gray-500  hover:cursor-pointer hover:text-black">
                          <div className={`relative rounded-tr-xl rounded-br-xl left-0 w-1 h-8 ${activeIndex === item.label ? " bg-black " : "bg-white"}`}> </div>
                          <div className="flex flex-row mx-2 my-1 px-4 py-2 gap-2">

                          <img src={item.icon} className="text-[#6A717F] text-[16px]" />
                          <span className={` text-xs ${activeIndex==item.label ? "text-black": ""}`}> {item.label}</span>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>


              )
            })
          }
        </div>

        <div id="profile" className='flex flex-row relative bottom-0 left-0 items-center gap-2 py-2'>
          <div className='w-8 ml-2'>
            <img src="https://ui-avatars.com/api/?name=Chetan+Sahu&rounded=true&background=random&bold=true&border=true" alt="" />
          </div>
          <div className='flex flex-col text-sm leading-2'>
            <span className='font-bold text-xs'>Chetan Sahu</span>
            <span className='text-xs'>chetansahuwork@gmail.com</span>
          </div>
          <img src="/logout.svg" className="ml-2 hover:" />
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
