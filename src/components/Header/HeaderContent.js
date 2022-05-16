import React from 'react';
import styled from 'styled-components';

function HeaderContent() {
    return (
        <HeaderContentStyled>
            <div className="left-content">
                <div className="left-text-container">
                    <h1>Texto Principal</h1>
                    <p className="white">
                        Segundo texto
                    </p>
                </div>
            </div>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 10rem;
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
    .left-content{
        display: flex;
        align-items: center;
        padding-right: 3rem;
        .white{
            color:white;
        }
        h1{
            font-size: 4rem;
            font-weight: 600;
            @media screen and (max-width: 700px){
                font-size: 3rem;
            }
        }
        .white{
            padding: 1.4rem 0;
            line-height: 1.8rem;
        }
    }
`;

export default HeaderContent;