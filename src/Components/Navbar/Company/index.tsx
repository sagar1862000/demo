import React from 'react'
interface CompanyProps {
  onClose: () => void; // Prop for closing the Personal component
}
const Company: React.FC<CompanyProps> = ({ onClose }) => {
    const NavbarDetails=[
        {Title:'Industries',
          Items:['Finence','Career','Capabilities','Products','Contact Us']
        },
        {Title:'Company',
          Items:['Updates','Career','Capabilities','Products','Contact Us']
        },
        {Title:'Company',
          Items:['Updates','Career','Capabilities','Products','Contact Us']
        },
        {Title:'Company',
          Items:['Updates','Career','Capabilities','Products','Contact Us']
        },
        {Title:'Company',
          Items:['Updates','Career','Capabilities','Products','Contact Us']
        },
        {Title:'Company',
          Items:['Updates','Career','Capabilities','Products','Contact Us']
        },
        {Title:'Company',
          Items:['Updates','Career','Capabilities','Products','Contact Us']
        },
        {Title:'Company',
          Items:['Updates','Career','Capabilities','Products','Contact Us']
        },
      ];

      const handleItemClick = (item:any) =>{
        onClose();
      }
    
      return (
        <div className="bg-gray-900 text-white absolute bg-opacity-60 w-full z-10">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {NavbarDetails.map((section, index) => (
                <div key={index} >
                  <h2 className="font-extrabold font-lato text-13xl text-[#5498FE]">
                    {section.Title}
                  </h2>
                  <text className="font-normal font-lato text-xl list-none text-left ">
                    {section.Items.map((item, idx) => (
                      <li className=" text-left cursor-pointer" key={idx}  onClick={() => handleItemClick(item)}>{item}</li>
                    ))}
                  </text>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Company