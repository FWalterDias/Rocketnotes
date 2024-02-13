import styled from 'styled-components';
import bacgroundImg from "../../assets/background.png"

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
    
`;

export const Form = styled.form`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 13.6rem;

    text-align: center;

    h1{
        font-size: 4.8rem;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    h2{
        font-size: 2.4rem;
        margin-top: 8.4rem;
        margin-bottom: 2.4rem;
    }

    p{
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY};
    }

    a{
        margin-top: 12.4rem;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`;

export const Background = styled.div`
    flex: 2;

    background: url(${bacgroundImg}) no-repeat center center;
    background-size: cover;
    filter: contrast(70%);
`;