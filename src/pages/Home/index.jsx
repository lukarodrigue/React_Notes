
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote, } from './styles';

import { Note } from '../../components/Note'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
    return (
        <Container>
            
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            
            <Header>

            </Header>

            <Menu>
            <li><ButtonText title='Todos'></ButtonText></li>
            
            <li><ButtonText title='React'></ButtonText></li>
            
            <li><ButtonText title='Nodejs'></ButtonText></li>
            </Menu>
                
            <Search>
                <Input placeholder="Pesquisar pelo titulo"  icon={FiSearch} />      
            </Search>

            <Content>
              
              <Section title="Minhas notas">
                <Note data={{
                  title: 'React',
                  tags:[
                    {id:'1', name:'React'},
                    {id:'2', name:'ReactNotes'}
                    ]
                    }} 
                    />
              
              </Section>
            </Content>

            <NewNote to="/new">
            <FiPlus />
            Criar nota
            </NewNote>
       
       
        </Container>
    );
}