import { FiLock, FiMail } from 'react-icons/fi'
import {  useState } from 'react';
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Container, Form, Background } from "./styles";

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'


export function SingIn(){
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");



    const { singIn } = useAuth();

    function handleSignIn(){
        singIn({email, password})
    }


    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <Input 
                    placeholder ="Email"
                    type = "text"
                    icon={FiMail}
                    onChange={event => setEmail(event.target.value)}
                /> 
                 <Input 
                    placeholder ="Senha"
                    type = "password"
                    icon={FiLock}
                    onChange={event => setPassword(event.target.value)}
                /> 
                <Button title="Entrar" onClick={handleSignIn} />

                <Link to="/register">
                    Criar Conta
                </Link>    


             
            </Form>

            <Background />
        </Container>
    );
}