import React from 'react';
import styled from 'styled-components';

function SignUpButton({name}) {
    return (
        <ButtonStyled>
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    background-color: #fff;
    padding: .7rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
`;

export default SignUpButton