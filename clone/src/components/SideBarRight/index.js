import React, {useState} from 'react';
import {Container} from './styled';
import Content from '../Content';

export default () => {

    const [data, setData] = useState({
        image: 'https://www.webhozz.com/code/wp-content/uploads/2020/01/logo-reactjs.jpg',
        titulo: 'Treinamento em Reactjs',
        descricao: 'Uma biblioteca para criação de tudo!!!',
        visualizacaoes: '120 mil visualizações',
        tempo: 'há 43 minutos'
    });

    return(
        <Container>
            <Content 
                data={data}
                setTeste={setData}
            />
            <Content 
                data={data}
                setTeste={setData}
            />
              <Content 
                data={data}
                setTeste={setData}
            />
            <Content 
                data={data}
                setTeste={setData}
            />
            <Content 
                data={data}
                setTeste={setData}
            />
             <Content 
                data={data}
                setTeste={setData}
            />
             <Content 
                data={data}
                setTeste={setData}
            />
            <Content 
                data={data}
                setTeste={setData}
            />
            <Content 
                data={data}
                setTeste={setData}
            />
        </Container>
    );
}