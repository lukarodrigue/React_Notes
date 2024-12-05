import { useState } from "react";
import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { useAuth } from '../../hooks//auth'

import { Link } from 'react-router-dom'

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


export function Profile() {
    const { user } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Avatar>
                <img
                    src="https://github.com/lukarodrigue.png"
                    alt="Foto do usuario"
                />

                <label htmlFor="avatar">
                    <FiCamera />

                    <input
                        id="avatar"
                        type="file"
                    />

                </label>

            </Avatar>

            <Form>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}     
                />

                <Input
                    placeholder="Nova senha"
                    type="passworf"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}     
                />


                <Button title="Salvar" />

            </Form>

        </Container>
    )


}


