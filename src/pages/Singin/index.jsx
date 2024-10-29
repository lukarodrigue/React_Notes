import { FiLock, FiMail } from 'react-icons/fi'

import { Link } from 'react-router-dom'

import { Container, Form, Background } from "./styles";

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'


export function SingIn(){
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
                /> 
                 <Input 
                    placeholder ="Email"
                    type = "text"
                    icon={FiLock}
                /> 
                <Button title="Entrar"/>

                <Link to="/register">
                    Criar Conta
                </Link>    


             
            </Form>

            <Background />
        </Container>
    );
}