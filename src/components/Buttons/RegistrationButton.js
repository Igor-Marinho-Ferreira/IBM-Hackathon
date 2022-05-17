import React from 'react';
import styled from 'styled-components';

function RegistrationButton({name}) {
    return (
        <RegistrationButtonStyled>
            {name}
        </RegistrationButtonStyled>
    )
}

const RegistrationButtonStyled = styled.button`
    background-color: #fff;
    padding: 1rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        padding-left: .9rem;
    }
`;

export default RegistrationButton;