import React from "react";
import tv from "../assets/wallet.svg";
import chat from "../assets/secure.svg";
import taskboard from "../assets/phone.svg";

const FeaturesData = [
  {
    image: tv,
    title: "Live classes",
    description: "We are providing live classes with the best tutor for you",
  },
  {
    image: chat,

    title: "Discussions",
    description: "Conversations with teachers or another students about tasks",
  },
  {
    image: taskboard,

    title: "Tasks",
    description:
      "We give every of our students task for gathering knowledge at home",
  },
];

function FeatureSection() {
  return (
    <section className="feature__section max-w-5xl px-7 lg:px-10 py-14 mx-auto ">
      <div className="">
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-zinc-800 text-center">
          Time less productivity
        </h2>
        <p className="max-w-lg mx-auto text-center">
          The expectation that productivity should always lead to tangible
          results or accomplishments.
        </p>
      </div>
      <div className="w-full pt-10 lg:w-full relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FeaturesData.map(({ image, title, description }) => (
          <div
            key={title}
            className="flex flex-col items-tvt justify-tvt gap-y-3 w-full bg-[#CBDCA5]/20 border border-stone-300/30 p-5 rounded-lg"
          >
            <div className={`w-fit p-2 px-3 rounded`}>
              <img className="w-8 h-8" src={image} alt="" />
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-slate-700/70 max-w-[15rem] ">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
