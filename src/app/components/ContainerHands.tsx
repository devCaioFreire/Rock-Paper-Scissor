'use client'
import { ReactNode } from "react";

interface HandProps {
  id: string;
  icon: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const ContainerHands = ({ id, icon, onClick }: HandProps) => {
  return (
    <div
      id={id}
      onClick={onClick}
      className="flex items-center justify-center rounded-full bg-stone-400 transition-all
      hover:bg-stone-200
      sm:w-14 sm:h-14
      md:w-20 md:h-20
      lg:w-28 lg:h-28"
    >
      {icon}
    </div>
  )
}