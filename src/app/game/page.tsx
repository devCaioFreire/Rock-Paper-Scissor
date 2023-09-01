'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";
import { Container } from "../components/Container";
import { ContainerHands } from "../components/ContainerHands";
import { Header } from "../components/Header";

export default function Game() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('selectedOption')
  const [selectedOption, setSelectedOption] = useState<string | null>(search);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [gameResult, setGameResult] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);

  let icon = null;

  if (selectedOption === 'rock') {
    icon = <ContainerHands id="rock" icon={<FaHandRock className="w-8 h-8 text-stone-600" />} />
  } else if (selectedOption === 'paper') {
    icon = <ContainerHands id="paper" icon={<FaHandPaper className="w-8 h-8 text-stone-600" />} />;
  } else if (selectedOption === 'scissors') {
    icon = <ContainerHands id="scissors" icon={<FaHandScissors className="w-8 h-8 text-stone-600" />} />
  }

  useEffect(() => {
    const savedScore = localStorage.getItem('score');
    if (savedScore) {
      setScore(parseInt(savedScore));
    }
  }, []);

  useEffect(() => {
    function computerPlay() {
      const options = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * options.length);
      return options[randomIndex];
    }

    const choice = computerPlay();
    setComputerChoice(choice);

    let roundScore = 0;

    if (selectedOption === choice) {
      setGameResult('Draw 🤝');
      roundScore = 1;
    } else if (
      (selectedOption === 'rock' && choice === 'scissors') ||
      (selectedOption === 'paper' && choice === 'rock') ||
      (selectedOption === 'scissors' && choice === 'paper')
    ) {
      setGameResult('You won 🎉');
      roundScore = 2;
    } else {
      setGameResult('The computer won 😔');
    }

    // Atualize o estado do score
    setScore((prevScore) => prevScore + roundScore);
    console.log('Game:',score);
  }, [selectedOption]);

  useEffect(() => {
    localStorage.setItem('score', score.toString());
  }, [score]);

  let computerIcon = null;

  if (computerChoice === 'rock') {
    computerIcon = <ContainerHands id="rock" icon={<FaHandRock className="w-8 h-8 text-stone-600" />} />;
  } else if (computerChoice === 'paper') {
    computerIcon = <ContainerHands id="paper" icon={<FaHandPaper className="w-8 h-8 text-stone-600" />} />;
  } else if (computerChoice === 'scissors') {
    computerIcon = <ContainerHands id="scissors" icon={<FaHandScissors className="w-8 h-8 text-stone-600" />} />;
  }

  return (
    <Container>
      <Header score={score} />
      <main className="flex w-full items-center justify-center h-[calc(100vh-30vh)]">
        <div className="flex items-center justify-between w-full">

          {/* Player 1 */}
          <div className="flex flex-col items-center gap-4">
            <span className="font-semibold">Player 1</span>
            {icon}
          </div>

          {/* Computer */}
          <div className="flex flex-col items-center gap-4">
            <span className="font-semibold">Computer</span>
            {computerIcon}
          </div>
        </div>

        {/* Play again */}
        <footer className="absolute flex flex-col gap-3 bottom-10 items-center">

          {/* Result */}
          {gameResult && (
            <div className="font-medium mt-4">{gameResult}</div>
          )}

          <button onClick={() => router.push('/')} className="flex flex-col gap-2 px-4 py-2 border border-stone-500 bg-stone-800 rounded items-center">
            Play again!
          </button>
        </footer>
      </main>
    </Container >
  )
}
