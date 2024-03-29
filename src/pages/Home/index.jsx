import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText title="Todos" isActive />
                </li>
                <li>
                    <ButtonText title="React" />
                </li>
                <li>
                    <ButtonText title="Node" />
                </li>
            </Menu>

            <Search>
                <Input placeholder="pesquisar" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="Minhas Notas">
                    <Note data={{
                        title: "React",
                        tags: [
                            { id: 1, name: "React" },
                            { id: 2, name: "JavaScript" }]
                    }} />
                </Section>
            </Content>

            <NewNote to="/new">
                Criar Nota
                <FiPlus />
            </NewNote>
        </Container>
    )
}