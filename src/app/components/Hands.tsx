'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';
import { ContainerHands } from "./ContainerHands";

export const Hands = () => {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleStart = (id: string) => (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(`Clicked on: ${id}`);
    setSelectedId(id);
    router.push(`/game?selectedOption=${id}`);
  };

  return (
    <main className="flex items-center justify-center h-[calc(100vh-30vh)]">
      <div className='grid grid-cols-3 gap-10'>
        <ContainerHands id="rock" onClick={handleStart("rock")} icon={<FaHandRock className="w-10 h-10 text-stone-600" />} />
        <ContainerHands id="paper" onClick={handleStart("paper")} icon={<FaHandPaper className="w-10 h-10 text-stone-600" />} />
        <ContainerHands id="scissors" onClick={handleStart("scissors")} icon={<FaHandScissors className="w-10 h-10 text-stone-600" />} />
      </div>
    </main>
  )
}