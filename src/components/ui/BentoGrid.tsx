import React, { ReactNode } from 'react';
import { cn } from "../../utils/cn";
import { motion } from "motion/react";
import  BentoGridItem  from "./BentoGridItem";


 
 const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};
 
export default BentoGrid;
