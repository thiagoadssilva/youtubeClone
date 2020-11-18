import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 72px; 
    background-color:  #FFFFFF;
    font-size: 10px;
    outline: 0;
`;

export const ContainerIcons = styled.div`    
    padding-top: 38px;

`;

export const DivHome = styled.div`
    padding: -10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 38px;
    cursor: pointer;    
    

    &:hover{
        background-color: #CCC;
    }
`;

export const DivWhatshot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 38px;
    margin-top: 5px;
    margin-bottom: 38px;
    cursor: pointer;

    &:hover{
        background-color: #CCC;
    }
`;

export const DivSub = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 38px;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 38px;
    cursor: pointer;

    &:hover{
        background-color: #CCC;
    }
`;

export const DivLibrary = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 38px;
    margin-top: 5px;
    margin-bottom: 38px;
    cursor: pointer;
    
    &:hover{
        background-color: #CCC;
    }
`;