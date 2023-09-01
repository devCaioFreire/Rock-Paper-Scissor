import { Container } from "./components/Container";
import { Hands } from "./components/Hands";
import { Header, ScoreType } from "./components/Header";

export default function Home({ score }: ScoreType) {
  console.log('Principal', score);
  return (
    <Container>
      <Header score={score} />
      <Hands />
    </Container>
  )
}
