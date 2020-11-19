import React from 'react';
import {
    Container,
    DivImage,
    Imagee,
    DivTitle,
    DivDescription,
    DivViews,
    DivTime,
    DivImagePerfil,
    ImagePerfil,
    ContainerPerfil
} from './styled';

export default ({data}) => {

    return(
        <Container>
            <DivImage>
                <Imagee src={data.image} />
            </DivImage>
            <DivImagePerfil>
                <ImagePerfil src={data.image}/>
                <ContainerPerfil>
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
                </ContainerPerfil>
            </DivImagePerfil>
            
        </Container>
    );
}

