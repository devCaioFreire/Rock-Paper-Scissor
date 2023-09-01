import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';

export type ScoreType = {
  score: number;
}
export const Header = ({ score }: ScoreType) => {
  console.log('Header:', score);
  return (
    <header className="flex items-center justify-between mx-4 px-4 py-2 w-full h-[30%] border border-stone-500 rounded ">
      <div className="flex flex-col justify-between">
        <h1 className='flex items-center gap-2'><FaHandRock className="w-4 h-4 text-stone-500" />Rock</h1>
        <h1 className='flex items-center gap-2'><FaHandPaper className="w-4 h-4 text-stone-500" />Paper</h1>
        <h1 className='flex items-center gap-2'><FaHandScissors className="w-4 h-4 text-stone-500" />Scissor</h1>
      </div>

      <div className="flex justify-center px-4 py-2 items-center border rounded border-stone-500 bg-stone-900">
        <div className="flex flex-col items-center">
          <h1>Score</h1>
          <span className='font-medium'>{score || 0}</span>
        </div>
      </div>
    </header>
  )
}