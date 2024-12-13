import Image from "next/image";
import React from "react";
import TitleWithSpoon from "./extra/title-with-spoon";

interface LaurelProps {
  title: string;
  description: string;
  number: number;
}

const OurLaurels = () => {
  const LAURELS: LaurelProps[] = [
    {
      title: "Bib Gourmond",
      description: "Lorem ipsum dolor sit amet, consectetur.",
      number: 2,
    },
    {
      title: "Rising Star",
      description: "Lorem ipsum dolor sit amet, consectetur.",
      number: 1,
    },
    {
      title: "AA Hospitality",
      description: "Lorem ipsum dolor sit amet, consectetur.",
      number: 5,
    },
    {
      title: "Outstanding Chef",
      description: "Lorem ipsum dolor sit amet, consectetur.",
      number: 3,
    },
  ];
  return (
    <div className="bg-[url('/about-bg.svg')] bg-cover bg-no-repeat h-[959px] flex w-full items-center justify-center font-cormorant relative">
      <Image
        alt="two-spoon"
        src={"two-spoon.svg"}
        className="absolute top-[50px] left-[100px]"
        width={146}
        height={146}
      />
      <div className="max-w-7xl flex items-center  mx-auto z-10 justify-between w-full  gap-[90px] relative">
        <div className="flex flex-col gap-[90px]">
          {/** description */}
          <div className="flex flex-col items-start  gap-1 w-full  ">
            <TitleWithSpoon
              title="Awards & recognition"
              titleClass="text-white text-[23px]"
            />
            <h2 className="text-gold text-[64px]">Our Laurels</h2>
          </div>

          {/** laurels */}
          <div className="grid grid-cols-2 gap-2">
            {LAURELS.map((item, index) => (
              <LaurelItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/** image */}
        <Image src={"chkn.svg"} alt="chkn.svg" width={483} height={961} />
      </div>
    </div>
  );
};

export default OurLaurels;

const LaurelItem = ({ title, description, number }: LaurelProps) => (
  <div className="flex items-center gap-7 mr-4 w-[301px] mb-9">
    <Image src={`/num${number}.svg`} alt="number" width={79} height={79} />

    <div className="flex flex-col gap-x-2">
      <h5 className="text-gold text-[23px] font-cormorant">{title}</h5>
      <p className="text-16px font-normal text-gray">{description}</p>
    </div>
  </div>
);
