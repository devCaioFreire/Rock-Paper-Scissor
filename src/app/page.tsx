'use client'
import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { Hands } from "./components/Hands";
import Header from "./components/Header";

export default function Home() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedScore = localStorage.getItem('score');
    const parsedScore = savedScore ? parseInt(savedScore) : 0;
    setScore(parsedScore);
    console.log('Principal', parsedScore);
  }, []); 

  return (
    <Container>
      <Header score={score} />
      <Hands />
    </Container>
  )
}
