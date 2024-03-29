import { Container, Form } from "./styles";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">
                            voltar
                        </Link>
                    </header>

                    <Input
                        placeholder="titulo"
                    />

                    <Textarea
                        placeholder="Observações"
                    />

                    <Section title="Links Uteis">
                        <NoteItem
                            value="https://www.google.com"
                        />
                        <NoteItem
                            isNew
                            placeholder="Novo Link"
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react" />
                            <NoteItem isNew placeholder="Nova Tag" />
                        </div>
                    </Section>

                    <Button tittle="Salvar" />
                </Form>
            </main>
        </Container>
    )
}