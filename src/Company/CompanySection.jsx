import React from "react";
import company1 from "../../src/assets/microsoft.svg";
import company2 from "../../src/assets/google.svg";
import company3 from "../../src/assets/amazon.svg";

function CompanyFeatured() {
  return (
    <section className="bg-[#D9D9D9]/10">
      <section className="company__section max-w-3xl  mx-auto pt-48 md:pt-72 pb-10 lg:py-20 px-10 lg:px-10 xl:px-0">
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Client
          </h2>
          <p>Using our experience to make your digital experience brighter</p>
        </div>
        <div className="flex items-center flex-col lg:flex-row gap-y-10 gap-x-5 p-5">
          <div className="flex items-center flex-wrap gap-6 justify-between gap-x-5 w-[calc(100%-32px)]">
            <img src={company1} alt="" />
            <img src={company2} alt="" />
            <img src={company3} alt="" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default CompanyFeatured;
