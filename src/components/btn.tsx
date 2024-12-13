import { cn } from "@/lib/utils";
import React from "react";

const MainButton = ({
  btnTitle,
  className,
}: {
  btnTitle: string;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "bg-gold py-[8px] hover:opacity-90 px-[32px]  font-semibold",
        className
      )}
    >
      {btnTitle}
    </button>
  );
};

export default MainButton;
