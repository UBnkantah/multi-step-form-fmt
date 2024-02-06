import React from 'react'

const AddOn = () => {

    const AddItems = [
      {
        id: 1,
        title: "Online service",
        text: "Access to multiplayer games",
        time: "+$1/mo",
      },
      {
        id: 2,
        title: "Larger storage",
        text: "Extra 1TB of cloud save",
        time: "+$2/mo",
      },
      {
        id: 3,
        title: "Customizable Profile",
        text: "Custom theme on your profile",
        time: "+$2/mo",
      },
    ];

    const AddCard = ({title, text, time}) => {
        return (
          <div className="border border-marblue rounded-xl p-4 gap-4 flex flex-row justify-start">
            <input type="checkbox" name="" id="" />
            <div className="flex justify-between items-center w-full">
              <div>
                <p className="text-lg font-[500]">{title}</p>
                <p className="text-md font-[400]">{text}</p>
              </div>
              <div>
                <p className="text-lg font-[500]">{time}</p>
              </div>
            </div>
          </div>
        );
    }


  return (
    <div>
      <div className="pb-6">
        <h1 className="text-marblue font-[800] text-2xl">Pick add-ons</h1>
        <p className="text-md text-marblue">
          {" "}
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {AddItems.map((item, index) => (
          <AddCard
            key={index}
            text={item.text}
            title={item.title}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
}

export default AddOn