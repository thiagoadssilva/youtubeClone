import React from 'react';
import {
    Container,
    DivImage,
    Imagee,
    DivTitle,
    DivDescription,
    DivViews,
    DivTime
} from './styled';

export default ({data}) => {

    return(
        <Container>
            <DivImage>
                <Imagee src={data.image} />
            </DivImage>
            <DivTitle>
                {data.titulo}
            </DivTitle>
            <DivDescription>
                {data.descricao}
            </DivDescription>
            <DivViews>
                {data.visualizacaoes}
            </DivViews>
            <DivTime>
                {data.tempo}
            </DivTime>
        </Container>
    );
}

