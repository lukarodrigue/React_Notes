import { Container } from "./styles.js"
import { Button } from "../../components/Button/index.jsx"


export function Details() {
  return (
    <Container>
      <h1>Hello World!</h1>
      <h2>Qualquer Coisa</h2>
      <h3>Qualquer Coisa</h3>
      <Button title="Entrar" loading ></Button>
      <Button title="Cadastrar" ></Button>
      <Button title="Voltar" ></Button>

    </Container>
  )
}