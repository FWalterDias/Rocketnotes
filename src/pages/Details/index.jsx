import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { Container, Links, Content } from "./styles"

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Notas" />

          <h1>Introdução a React</h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, porro. Eius repudiandae beatae iusto! Eius doloribus eveniet autem voluptates iure asperiores id, magnam itaque veniam obcaecati vel recusandae quas iusto, dolorum maxime ea at qui sed provident alias consectetur. Perspiciatis facilis dolorem unde eveniet nulla incidunt iste, recusandae aperiam laboriosam veniam sapiente explicabo ad quaerat fugiat aliquam harum ea, corporis aspernatur nisi cumque distinctio, ratione ex vel sed. Labore excepturi qui tempore odio. Adipisci eos, voluptatum provident asperiores, a aspernatur quidem, dignissimos odit eum neque molestiae non commodi velit dolorem ad quo porro voluptatem accusamus? Iste corrupti incidunt aut reiciendis!
          </p>

          <Section title="Links Úteis">
            <Links>
              <li>
                <a href="#">wwww.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">wwww.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="Node" />
          </Section>

          <Button tittle="Carregando" loading />

        </Content>
      </main>
    </Container>
  )
}