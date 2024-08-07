import React, { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Tabs = [
  ,
  {
    Title: "Growth Tech",
    Icon: "",
    Description:
      "Encapsulates the idea that leveraging technological innovations can enhance financial processes, streamline operations, and improve overall efficiency Encapsulates the idea that leveraging technological innovations can enhance financial processes, streamline operations, and improve overall efficiency",
  },
  {
    Title: "IT Services",
    Icon: "",
    Description:
      "Encapsulates the idea that leveraging technological innovations can enhance financial processes, streamline operations, and improve overall efficiency Encapsulates the idea that leveraging technological innovations can enhance financial processes, streamline operations, and improve overall efficiency",
  },
  {
    Title: "Semiconductors and Materials",
    Icon: "",
    Description:
      "Encapsulates the idea that leveraging technological innovations can enhance financial processes, streamline operations, and improve overall efficiency Encapsulates the idea that leveraging technological innovations can enhance financial processes, streamline operations, and improve overall efficiency",
  },
  {
    Title: "Applications",
    Icon: "",
    Description:
      "Encapsulates the idea that leveraging technological innovations can enhance financial processes, streamline operations, and improve overall efficiency Encapsulates the idea that leveraging technological innovations can enhance financial processes, streamline operations, and improve overall efficiency",
  },
  {
    Title: "Infrastructure",
    Icon: "",
    Description:
      "Encapsulates the idea that leveraging technological innovations can enhance financial processes, streamline operations, and improve overall efficiency Encapsulates the idea that leveraging technological innovations can enhance financial processes, streamline operations, and improve overall efficiency",
  },
  {
    Title: "Consumer Tech: End-User Devices",
    Icon: "",
    Description:
      "Encapsulates the idea that leveraging technological innovations can enhance financial processes, streamline operations, and improve overall efficiency Encapsulates the idea that leveraging technological innovations can enhance financial processes, streamline operations, and improve overall efficiency",
  },
  {
    Title: "Consumer Tech: Apps and Services",
    Icon: "",
    Description:
      "Encapsulates the idea that leveraging technological innovations can enhance financial processes, streamline operations, and improve overall efficiency Encapsulates the idea that leveraging technological innovations can enhance financial processes, streamline operations, and improve overall efficiency",
  },
];
const Card6 = () => {
  const [visibleTabs, setVisibleTabs] = useState(
    Array(Tabs.length).fill(false)
  );

  // Function to toggle visibility of a specific tab
  const toggleVisibility = (index:any) => {
    const newVisibleTabs = [...visibleTabs];
    newVisibleTabs[index] = !newVisibleTabs[index];
    setVisibleTabs(newVisibleTabs);
  };

  return (
    <div className="flex  place-content-center flex-col font-lato w-screen bg-slate-900 ">
      <div className="w-3/4 mx-auto py-12">
        <div className="text-base  my-4 font-black leading-none w-3/4  text-blue-800">
          Expand All
        </div>
        {Tabs.map((tab, index) => (
          <div
            key={index}
            className=" border-solid border-[#CCCCCC] border-t-2  gap-8 flex relative flex-col w-full max-md:max-w-full"
          >
            <div className="flex place-content-center my-auto absolute right-0 top-4 z-0 flex-col w-5 h-5">
              <FontAwesomeIcon
                icon={faPlus}
                className="h-5 w-5 text-[#5498FE]"
                onClick={() => toggleVisibility(index)}
              />
            </div>
            <div className="py-3 w-full text-lg font-bold leading-tight text-blue-400 uppercase max-md:pr-5 max-md:max-w-full">
              {tab?.Title}
            </div>
            {visibleTabs[index] && (
              <div className="w-full pb-4 -mt-6 text-xs font-bold leading-tight text-white uppercase max-md:pr-5 max-md:max-w-full">
                {tab?.Description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card6;
