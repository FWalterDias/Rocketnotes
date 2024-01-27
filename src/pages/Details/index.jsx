import { Button } from "../../components/Button"
import { Container } from "./styles"

export function Details() {
  return (
    <Container>
      <h1>Pagina principal</h1>

      <Button tittle="Salvar" loading />
      <Button tittle="Salvar" />
    </Container>
  )
}