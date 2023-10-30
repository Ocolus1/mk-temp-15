import React from "react";
import benefitImage from "../../src/assets/brandimg.png";
import brand1 from "../assets/design.svg";
import brand2 from "../assets/seo.svg";
import brand3 from "../assets/shield.svg";

const brandData = [
  {
    name: "Design Services",
    image: brand1,
    description: "We guide you to the best design services",
  },
  {
    name: "SEO",
    image: brand2,
    description: "We guide you to the best design services",
  },
  {
    name: "Security Tester",
    image: brand3,
    description: "We guide you to the best design services",
  },
];

const BrandSection = () => (
  <section className="brand__section max-w-5xl mx-auto">
    <div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl max-w-lg mx-auto text-center">
          Specific challenges require specific solutions
        </h2>
        <p className="text-center">
          Some of the industries our digital agency specialises in
        </p>
      </div>
      <div className="flex items-center justify-between py-7 gap-x-5">
        {brandData.map(({ name, image, description }) => (
          <div className="p-10 flex flex-col gap-y-2 items-start w-full lg:w-1/3">
            <div className="flex items-center gap-x-5">
              <img className="w-8 h-8" src={image} alt="" />
              <p>{name}</p>
            </div>

            <p className="text-slate-700">{description}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-5xl bg-[#F5F3FE] rounded-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-x-10 px-7 lg:px-10 py-10 ">
      <div className="benefit-left-part w-full px-10 py-2 lg:p-0 lg:w-1/2 max-w-2xl mx-auto">
        <div className="benefit-headline flex flex-col gap-y-2">
          <h3 className="text-base md:text-lg lg:text-2xl font-semibold text-stone-600">
            Instant email & postal delivery
          </h3>
          <p className="text-slate-700 font-medium mt-2">
            We delivery best for our customers with an instant email through
            various platforms or through by the olden age postal delivery either
            way we deliver what you need
          </p>
          <a
            href=""
            className="bg-[#6738EE] text-white px-5 py-2 w-full lg:w-fit text-center lg:text-left rounded-lg"
          >
            Try for free
          </a>
        </div>
      </div>
      <div className="benefit-right-part w-full p-8 px-10 lg:p-0 lg:w-1/2 mx-auto">
        <img className="rounded-xl mx-auto ld:mx-0" src={benefitImage} alt="" />
      </div>
    </div>
  </section>
);

export default BrandSection;
