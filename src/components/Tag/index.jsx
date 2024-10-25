import { Container } from "./styles";

export function Tag({ title }) {
    return(
        <Container {...rest}>
            { title }
        </Container>

    );
}