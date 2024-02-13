import { FiLock, FiMail } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Background, Container, Form } from "./styles";
import { Link } from "react-router-dom";

export function Signin() {
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links uteis</p>

                <h2>Faça seu login</h2>

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

                <Button tittle="Entrar" />

                <Link to="/signup">
                    Criar Conta
                </Link>
            </Form>

            <Background />
        </Container>
    )
}