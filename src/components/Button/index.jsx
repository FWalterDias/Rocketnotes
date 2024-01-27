import { ContainerButton } from "./styles";

export function Button({ tittle, loading = false, ...rest }) {
    return (
        <ContainerButton
            type="button"
            disabled={loading}
            {...rest}
        >
            {loading ? "Carregando..." : tittle}
        </ContainerButton>
    )
}