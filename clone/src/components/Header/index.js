import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import {
    Container, 
    MenuIconMaterial,
    MenuIconYoutube,
    YoutubeImage,
    DivInput,
    Input,
    IconeSearch,
    DivIconSeach,
    DivCamera,
    DivApp,
    DivNotification,
    DivAccount
} from './styled';

// Importação dos icones da biclioteca
import MenuIcon from '@material-ui/icons/Menu';

export default () => {
    return(
        <Container>
            <MenuIconMaterial>
                <MenuIcon />
            </MenuIconMaterial>
            <MenuIconYoutube>
                <YoutubeImage  src="https://conteudo.imguol.com.br/c/noticias/57/2017/08/29/novo-logo-do-youtube-tem-icone-de-player-na-frente-e-nome-do-site-na-sequencia-1504042734067_615x300.jpg" alt=""/>
            </MenuIconYoutube>
            <DivInput>
                <Input placeholder="Pesquisar"/>
                {/* <KeyboardIcon /> */}
                
                <IconeSearch data-tip="Pesquisar" data-for="tip-top">
                    <DivIconSeach>
                        <SearchIcon />
                    </DivIconSeach>
                </IconeSearch>
            </DivInput>

            <DivCamera data-tip="Criar" data-for="tip-top">
                <VideoCallIcon />
            </DivCamera>

            <DivApp data-tip="Aplicativos do YouTube" data-for="tip-top">
                <AppsIcon />
            </DivApp>

            <DivNotification data-tip="Notificações" data-for="tip-top">
                <NotificationsIcon />
            </DivNotification>

            <DivAccount>
                <AccountCircleIcon />
            </DivAccount>
            

        </Container>
    );
}