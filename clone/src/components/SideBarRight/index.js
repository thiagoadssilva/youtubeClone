import React, {useState} from 'react';
import {Container} from './styled';
import Content from '../Content';

export default () => {

    const [data, setData] = useState({
        image: 'https://phixies.com.br/publico/tecnologias-galeria/48/!0339c8e835cdcbe2b14071d34d069056ba93046f4f7e74f5db75fb475d911b33.png',
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
            
            
          
        </Container>
    );
}