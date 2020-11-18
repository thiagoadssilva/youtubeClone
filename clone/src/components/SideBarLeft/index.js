import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';

import {
    Container,
    DivHome,
    DivWhatshot,
    DivSub,
    ContainerIcons,
    DivLibrary,
} from './styled';

export default () => {
    return(
        <Container>
            <ContainerIcons>
               
                <DivHome>    
                    <HomeIcon />
                    Inicio
                </DivHome>
                
                <DivWhatshot>
                    <WhatshotSharpIcon /> 
                    Em alta
                </DivWhatshot>

                <DivSub>
                    <SubscriptionsSharpIcon />
                    Inscrições
                </DivSub>

                <DivLibrary>
                    <VideoLibrarySharpIcon />
                    Biblioteca
                </DivLibrary>
            </ContainerIcons>
        </Container>
    );
}