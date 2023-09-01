'use client'
import { Container } from "./components/Container";
import { Hands } from "./components/Hands";
import Header from "./components/Header";

export default function Home() {
  const savedScore = localStorage.getItem('score');
  const score = savedScore ? parseInt(savedScore) : 0;
  console.log('Principal', score);

  return (
    <Container>
      <Header score={score} />
      <Hands />
    </Container>
  )
}
