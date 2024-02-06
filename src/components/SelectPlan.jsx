import {useContext} from 'react'
import DataContext from '../context/DataContext'
import ArcSvg from "../assets/icon-arcade.svg";
import AdvSvg from "../assets/icon-advanced.svg";
import ProSvg from "../assets/icon-pro.svg";

const SelectPlan = () => {
  const {data} = useContext(DataContext);

  const SelItem = [
    {
      id: 1,
      title: "Arcade",
      text: "$9/month",
      img: ArcSvg
    },
    {
      id: 2,
      title: "Advanced",
      text: "$12/month",
      img: AdvSvg
    },
    {
      id: 3,
      title: "Pro",
      text: "$15/month",
      img: ProSvg
    }
  ]

  const SelCard = ({title, text, img}) => {
    return (
      <div className="border border-marblue rounded-lg w-36 h-40 p-4 flex flex-col justify-between items-start">
        <img src={img} alt="" />
        <div>
          <p className="text-lg font-[500] text-marblue">{title}</p>
          <p className="text-md font-[400] text-marblue">{text}</p>
        </div>
      </div>
    );
  }


  return (
    <div>
      <div>
        <h2 className="text-marblue font-[800] text-2xl">Select your plan</h2>
        <p className="text-md text-marblue">
          You have the option of monthly or yearly biling
        </p>
      </div>
      <div className="flex flex-row gap-4 py-8">
        {SelItem.map((item, index) => (
          <SelCard key={index} title={item.title} text={item.text} img={item.img} />
        ))}
      </div>
    </div>
  );
}

export default SelectPlan