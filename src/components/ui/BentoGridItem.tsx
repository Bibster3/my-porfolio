import { cn } from "../../utils/cn";
import React from 'react';


 const BentoGridItem = ({
  title,
  description,
  header,
  icon,
  className,
}: {
  title: string;
  description: string;
  header: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
      className
    )}
  >
    {header}
    <div className="transition duration-200 group-hover/bento:translate-x-2">
      {icon}
      <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
        {title}
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        {description}
      </p>
    </div>
  </div>
);

export default BentoGridItem;
