import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Pricingtoggle from "./Pricingtoggle";
import { useState } from "react";

function PricingSection() {
  const [enabled, setEnabled] = useState(false);
  const pricingOptions = [
    {
      price: "Free",
      yearlyPrice: "Free",
      description:
        "Just using this for yourself? Lite is the way to go for the lites platform.",
      backgroundColor: "#FFFFFF",
      buttonColor: "bg-[#16403F]",
      buttonText: "Try now",
      buttonTextColor: "text-white",
      tagColor: "bg-gray-200",
      tagTextColor: "text-black",
    },
    {
      price: "$100",
      yearlyPrice: "$1200",
      description:
        "For companies that need to manage work happening across multiple teams.",
      backgroundColor: "#FFFFFF",
      buttonColor: "bg-[#1F605E]",
      buttonText: "Get started",
      buttonTextColor: "text-white",
      tagColor: "bg-gray-200",
      tagTextColor: "text-black",
    },
    {
      price: "Custom",
      yearlyPrice: "Custom",
      description:
        "For enterprise that need additional security, control, and support.",
      backgroundColor: "#EFF5E4",
      buttonColor: "#000000",
      buttonText: "Contact us",
      buttonTextColor: "text-black",
      tagColor: "bg-indigo-500",
      tagTextColor: "text-white",
    },
  ];

  return (
    <div className="pricing max-w-5xl mx-auto py-10">
      <div className="featured-headline flex flex-col items-center justify-center gap-y-5">
        <h3 className="text-3xl sm:text-4xl lg:text-[44px] max-w-xs mx-auto md:max-w-full md:mx-0 text-center font-bold leading-[1.15] text-black">
          Pricing that suits you
        </h3>
        <p className="max-w-sm text-center">
          The expectation that productivity should always lead to tangible
          results or accomplishments.
        </p>
        <div className="flex justify-center mt-4">
          <Pricingtoggle enabled={enabled} setEnabled={setEnabled} />
        </div>
        <div className="pricing-card grid px-10 lg:px-14 xl:px-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 lg:py-12 lg:pb-20 lg:pt-8">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`card pricing-card-box border border-slate-500/10 rounded-lg grid`}
              style={{ backgroundColor: option.backgroundColor }}
            >
              <div className="p-5 flex flex-col gap-y-10 justify-between">
                <div>
                  <h3 className="mt-5 text-sm font-medium text-slate-500/70">
                    <span className="text-3xl font-bold text-slate-800">
                      {enabled ? option.yearlyPrice : option.price}
                    </span>{" "}
                    {option.price !== "Free" && option.price !== "Custom"
                      ? enabled
                        ? "/year"
                        : "/month"
                      : ""}
                  </h3>
                  <p className="text-sm lg:text-base text-slate-600 font-medium">
                    {option.description}
                  </p>
                </div>
                <div>
                  <button className="my-2 flex text-base lg:text-lg items-center justify-center rounded h-12 w-full font-bold  border border-slate-500 hover:shadow-lg hover:drop-shadow-lg transition duration-200 bg-transparent text-black">
                    {option.buttonText}

                    <BsArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
