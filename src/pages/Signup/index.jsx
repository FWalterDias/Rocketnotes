import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Background, Container, Form } from "./styles";
import { Link } from "react-router-dom";

export function Signup() {
    return (
        <Container>
            <Background />

            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links uteis</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button tittle="Castrar" />

                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>

        </Container>
    )
}