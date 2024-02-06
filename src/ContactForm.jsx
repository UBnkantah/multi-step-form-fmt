import React, { useContext, useState } from "react";
import Main from "./components/Main";
import DataContext from "./context/DataContext";
import CheckMark from "./assets/icon-thank-you.svg"
import { toast } from "react-toastify";

const ContactForm = () => {
  const { setPage, prevHide, nextHide, submitHide, page } =
    useContext(DataContext);

    const [showThanks, setShowThanks] = useState(false)
  const FormItem = [
    {
      id: 1,
      step: "STEP 1",
      text: "YOUR INFO",
    },
    {
      id: 2,
      step: "STEP 2",
      text: "SELECT PLAN",
    },
    {
      id: 3,
      step: "STEP 3",
      text: "ADD-ONS",
    },
    {
      id: 4,
      step: "STEP 4",
      text: "SUMMARY",
    },
  ];

  const StepCard = ({ no, step, text }) => {
    return (
      <div className="flex flex-row justify-start items-center gap-4">
        <div
          className={`rounded-full w-8 h-8 border border-white flex justify-center items-center ${
            page + 1 == no ? "bg-pasblue text-purblue" : ""
          }`}
        >
          <p className="text-xl font-[500]">{no}</p>
        </div>
        <div>
          <p className="text-md">{step}</p>
          <p className="font-[600]">{text}</p>
        </div>
      </div>
    );
  };

  const handlePrev = () => setPage((prev) => prev - 1);

  const handleNext = () => setPage((next) => next + 1);

  const Thankyou = () => {
    return (
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <img src={CheckMark} alt="" />
        <h4 className="text-3xl font-[700]">Thank You!</h4>
        <p className="text-lg font-[400]">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
        setShowThanks(true)
        toast.info("Data Received Thanks", {position: "bottom-left"})
    } catch (error) {
        console.log(error, "from submit")
    }
  }

  return (
    <div className="bg-white p-4 rounded-xl w-[80%] flex flew row">
      <div className="bg-stepimg bg-cover bg-center pb-36 text-white p-8 w-72 rounded-xl">
        <div className="flex flex-col gap-8">
          {FormItem.map((item, index) => (
            <StepCard
              key={index}
              no={item.id}
              step={item.step}
              text={item.text}
            />
          ))}
        </div>
      </div>
      {!showThanks ? (
        <div className="w-[100%] px-16 py-8">
        <Main />

        <div className="flex justify-between items-center w-[100%] pt-8 pb-4">
          <button
            className={`px-4 py-2 rounded-lg bg-white  text-marblue border border-marblue ${prevHide}`}
            onClick={handlePrev}
          >
            Go Back
          </button>
          <button
            className={`px-4 py-2 rounded-lg bg-marblue text-white ${nextHide}`}
            onClick={handleNext}
          >
            Next Step
          </button>
          <button
            className={`px-4 py-2 rounded-lg bg-marblue text-white ${submitHide}`}
            onClick={handleSubmit}
          >
            Confirm
          </button>
        </div>
      </div>
      ): (
        <div className="w-[100%] px-16 py-8 m-auto">
            <Thankyou />
        </div>
      )}
      
    </div>
  );
};

export default ContactForm;
