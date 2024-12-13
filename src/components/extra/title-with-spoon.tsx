import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const TitleWithSpoon = ({
  title,
  titleClass,
  imgClass,
  className,
}: {
  title: string;
  titleClass?: string;
  imgClass?: string;
  className?: string;
}) => {
  return (
    <div className={cn(className)}>
      <h1 className={cn("text-gold text-[64px]", titleClass)}>{title}</h1>
      <Image
        className={imgClass}
        src={"/spoon.svg"}
        alt="spoon"
        width={40}
        height={9}
      />
    </div>
  );
};

export default TitleWithSpoon;
