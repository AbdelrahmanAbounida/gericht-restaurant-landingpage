import Image from "next/image";
import React from "react";
import MainButton from "./extra/btn";
import TitleWithSpoon from "./extra/title-with-spoon";

interface MenuItemProps {
  title: string;
  price: number;
  details: string[];
}

const TodaySpecial = () => {
  const WINE_LIST: MenuItemProps[] = [
    {
      title: "Chapel Hill Shiraz",
      price: 56,
      details: ["AU", "Bottle"],
    },
    {
      title: "Catena Malbec",
      price: 59,
      details: ["AR", "Bottle"],
    },
    {
      title: "La Vieille Rosé",
      price: 44,
      details: ["FR", "750 ml"],
    },
    {
      title: "Rhino Pale Ale",
      price: 31,
      details: ["CA", "750 ml"],
    },
    {
      title: "Irish Guinness",
      price: 26,
      details: ["IE", "750 ml"],
    },
  ];

  const COCKTAIL_LIST: MenuItemProps[] = [
    {
      title: "Aperol Spritz",
      price: 20,
      details: ["Aperol", "Villa Marchesi prosecco", "soda", "30ml"],
    },
    {
      title: "Dark 'N' Stormy",
      price: 16,
      details: ["Dark rum", "Ginger beer", "Slice of lime"],
    },
    {
      title: "Daiquiri",
      price: 10,
      details: ["Rum", "Citrus juice", "Sugar"],
    },
    {
      title: "Old Fashioned",
      price: 31,
      details: ["Bourbon", "Brown sugar", "Angostura Bitters"],
    },
    {
      title: "Negroni",
      price: 26,
      details: ["Gin", "Sweet Vermouth", "Campari", "Orange garnish"],
    },
  ];
  return (
    <div className="w-full">
      <div className="w-full  justify-center max-w-7xl flex items-center  mx-auto">
        <div className="flex flex-col gap-2 w-full">
          {/** title */}
          <div className="font-cormorant mx-auto my-12 items-center justify-center flex flex-col gap-1">
            <TitleWithSpoon
              className="text-center flex flex-col justify-center items-center"
              titleClass="text-white text-[24px] font-semibold"
              title="Menu that fits you palatte"
            />
            <h1 className="text-gold text-[64px] font-medium">
              {"Today’s Special"}
            </h1>
          </div>

          <div className="mt-2 flex items-start gap-12 w-full ">
            {/** list left */}

            <div className="gap-12 flex flex-col justify-center items-center">
              <h3 className="text-[45px] text-white font-cormorant">
                Wine & Beer
              </h3>
              <div className="flex-1  h-full gap-10 flex flex-col">
                {WINE_LIST.map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}
              </div>
            </div>
            {/** middle image */}
            <Image
              src={"/coktail.svg"}
              alt="spoon"
              width={412}
              height={660}
              className=""
            />
            {/** list right */}
            <div className="gap-12 flex flex-col justify-center items-center">
              <h3 className="text-[45px] text-white font-cormorant">
                Cocktails
              </h3>
              <div className="flex-1  h-full gap-10 flex flex-col w-[412px] ">
                {COCKTAIL_LIST.map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}
              </div>
            </div>
          </div>

          {/** button */}
          <MainButton
            btnTitle="View More"
            className="mt-12 w-[136px] h-[44px] text-[16px] font-cormorant mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TodaySpecial;

const MenuItem = ({ title, price, details }: MenuItemProps) => (
  <div className=" flex flex-col font-cormorant w-[412px]">
    <div className="flex items-center gap-5 ">
      <h5 className=" w-[70%]  text-gold text-[21px]  font-medium">{title}</h5>
      <div className="h-[1px] w-[25%] bg-gray " />

      <h5 className="text-white text-[24px] w-[1%] font-medium">${price}</h5>
    </div>

    {/** details */}
    <div className="flex items-center gap-2 font-sans text-[#AAAAAA] text-[16px]">
      {details.map((item, index) => (
        <>
          <div className="text-gray" key={index}>
            {item}
          </div>
          {index < details.length - 1 && "|"}
        </>
      ))}
    </div>
  </div>
);
