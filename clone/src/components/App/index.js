import React from 'react';
import Header from '../../components/Header';
import ReactToolTip from 'react-tooltip';
import {Container, ContainerRight, ContainerC} from './styled';

import SideBarLeft from '../SideBarLeft';
import SideBarRight from '../SideBarRight';

export default () => {
    return(
        <>
            <Header>
                
            </Header>
            <ContainerC>
                <Container>
                    <SideBarLeft />
                </Container>
                <ContainerRight>
                    <SideBarRight />
                </ContainerRight>
            </ContainerC>

            <ReactToolTip id="tip-top" place="top" effect="solid"/>
        </>
        
    );
}