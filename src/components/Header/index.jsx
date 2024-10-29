import { Profiler } from "react";
import { Container, Profile, Logout } from "./styles.js";
import { RiShutDownLine } from "react-icons/ri";


export function Header() {
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

        <Logout>
            <RiShutDownLine>

            </RiShutDownLine>
        </Logout>

        </Container>
    )
}