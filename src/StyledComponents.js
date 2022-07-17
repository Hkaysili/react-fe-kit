import styled, {css} from 'styled-components'; 

export const Title =  styled.h1`
    font-size: 3rem;
    font-weight: 500;
    text-decoration: underline;
    text-align: center;
    padding: 4px 10px;
    margin: 0;
    ${props => props.theme === 'darkRed' && css`
            background-color: darkred;
            color: white;
        `
    }
    &:hover{
        background-color: darkred;
        color: white;
        transition: .45s ease all; 
        cursor: pointer;
    }
`

