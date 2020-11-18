import React from 'react';
import Header from '../../components/Header';
import ReactToolTip from 'react-tooltip';
import {Container, SideBarLeft, SideBarRight} from './styled';

export default () => {
    return(
        <>
            <Header>
                
            </Header>

            <Container>
                <SideBarLeft>
                    SidebatLeft
                </SideBarLeft>
                <SideBarRight>
                    SidebatRight
                </SideBarRight>
               
            </Container>
            <ReactToolTip id="tip-top" place="top" effect="solid"/>
        </>
        
    );
}