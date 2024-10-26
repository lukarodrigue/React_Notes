import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input'
import { FiLock, FiMail } from 'react-icons/fi'
import { Button } from '../../components/Button'

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
                    
                <a href="#">Criar Conta</a>


             
            </Form>

            <Background />
        </Container>
    );
}