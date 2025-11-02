import React from "react"



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
    title: "Main Menu",
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
  return (
    <aside className="h-screen">
      <nav className=" h-full flex flex-col w-60 border-r border-gray-300 shadow-md shadow-gray-400 ">
        <div id="logo" className='flex flex-row gap-2 border-b border-gray-200 px-4 py-2 items-center'>
          <img src="/Megainventory.svg" alt="Mega Inventory Logo" />
          <span> Mega Inventory</span>
        </div>
        <div className="overflow-y-scroll scrollbar-hide">
          {
            menuSections.map((section, index) => {
              return (
                <div key={index} className="my-5 mx-3 lato-regular">
                  <span className="lato-regular text-sm text-[#6A717F]">{section.title}</span>
                  {
                    section.item.map((item, index) => {
                      return (
                        <div key={index} className="flex flex-row px-3 py-2 gap-2 text-gray-500 rounded-sm hover:cursor-pointer hover:bg-gray-300 hover:text-black">
                          <img src={item.icon} className="text-[#6A717F]" key={index} />
                          <span className="text-xs "> {item.label}</span>
                        </div>
                      )
                    })
                  }
                </div>


              )
            })
          }
        </div>

        <div id="profile" className='flex flex-row relative bottom-0 left-0 items-center gap-2 border-t py-2'>
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
