import React from 'react'

const Summary = () => {

    const SumItem = [
        {
            id: 1,
            title: "Arcade (Monthly)",
            time: "$9/mo"
        },
        {
            id: 2,
            title: "Online Service",
            time: "+$1/mo"
        },
        {
            id: 3,
            title: "Larger Storage",
            time: "+$2/mo"
        }
    ]

    const SumCard = ({title, time}) => {
        return (
          <div className='flex justify-between items-center px-4 py-2 bg-lgtblue rounded-lg'>
            <div>
                <p>{title}</p>
                <a>Change</a>
            </div>
            <div>
                <p>{time}</p>
            </div>
          </div>
        );
    }
  return (
    <div>
      <div className="pb-6">
        <h1 className="text-marblue font-[800] text-2xl">Finishing up</h1>
        <p className="text-md text-marblue">
          {" "}
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div>
        <div>
          {SumItem.map((item, index) => (
            <SumCard key={index} title={item.title} time={item.time} />
          ))}
        </div>
        <div className="flex justify-between items-center px-4 py-2 rounded-lg">
          <div>
            <p className="font-[500]">Total (per month)</p>
          </div>
          <div>
            <p className="font-[600] text-xl">+12/mo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary