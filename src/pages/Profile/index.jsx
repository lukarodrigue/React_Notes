import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Link } from 'react-router-dom'

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


export function Profile(){
    return(
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
                    placeholder = "Nome"
                    type = "text"
                    icon= {FiUser}            
                />

                <Input 
                    placeholder = "E-mail"
                    type = "text"
                    icon= {FiMail}            
                />

                <Input 
                    placeholder = "Senha atual"
                    type = "password"
                    icon= {FiLock}            
                />

                <Input 
                    placeholder = "Nova senha"
                    type = "passworf"
                    icon= {FiLock}            
                />


                <Button title="Salvar" />

            </Form>

        </Container>
    )


}


