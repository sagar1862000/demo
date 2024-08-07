import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
interface PersonalProps {
  onClose: () => void; // Prop for closing the Personal component
}

const Personal: React.FC<PersonalProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const NavbarDetails = [
    {Title:'Industries',
      Items:['Finance','Career','Capabilities','Products','Contact Us']
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

  const handleItemClick = (item :any)=>{
    const value = item
    switch(value){
      case 'Finance':
        console.log('Finance');
        navigate('/finance');
        break;
    }
    onClose();
  }

  return (
    <div className="pt-12 bg-transparent text-white absolute w-full z-10 bg-opacity-100 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {NavbarDetails.map((section, index) => (
            <div key={index} >
              <h2 className="font-extrabold font-lato text-13xl text-[#5498FE]">
                {section.Title}
              </h2>
              <text className="font-normal font-lato text-5xl list-none text-left cursor-pointer ">
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
};

export default Personal;
