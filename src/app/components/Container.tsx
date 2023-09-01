import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}
export function Container({ children }: Props) {
  return (
    <div className="flex flex-col px-4 items-center justify-space w-full mx-auto mt-8 sm:max-w-[300px] md:sm:max-w-[748px] lg:max-w-[1246px]">
      {children}
    </div>
  )
}
