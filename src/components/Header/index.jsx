import { Profiler } from "react";
import { Container, Profile, Logout } from "./styles.js";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from '../../hooks/auth.jsx'

export function Header() {
    const { singOut } = useAuth();

    return (
        <Container>

            <Profile to="/profile">
                <img src="https://github.com/lukarodrigue.png"
                    alt="Foto do usuário"
                />

                <div>
                    <span> Bem vindo </span>
                    <strong>Luka Rodrigues Gonçalves</strong>
                </div>
            </Profile>

            <Logout onClick={singOut}>
                <RiShutDownLine>

                </RiShutDownLine>
            </Logout>

        </Container>
    )
}