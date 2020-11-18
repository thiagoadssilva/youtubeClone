import React from 'react';
import Header from '../../components/Header';
import ReactToolTip from 'react-tooltip';
import {Container} from './styled';

import SideBarLeft from '../SideBarLeft';
import SideBarRight from '../SideBarRight';

export default () => {
    return(
        <>
            <Header>
                
            </Header>

            <Container>
                <SideBarLeft />

                <SideBarRight />
            </Container>
            <ReactToolTip id="tip-top" place="top" effect="solid"/>
        </>
        
    );
}