import { Container, Form, Background } from "./styles";

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'

export function SingUp(){
    return (
        <Container>
            <Background />
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input 
                    placeholder ="Nome"
                    type = "text"
                    icon={FiUser}
                /> 

                <Input 
                    placeholder ="Email"
                    type = "text"
                    icon={FiMail}
                /> 
                 <Input 
                    placeholder ="Senha"
                    type = "password"
                    icon={FiLock}
                /> 
                <Button title="Cadastras"/>
                    
                <Link to="/">Voltar para o login</Link>


             
            </Form>

            
        </Container>
    );
}