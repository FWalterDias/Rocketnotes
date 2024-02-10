import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    display: flex;
    justify-content: space-between;

    height: 10.5rem;
    width: 100%;
    padding: 0 8rem;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;

    img{
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }

    div{
        display: flex;
        flex-direction: column;
        line-height: 2.4rem;

        span{
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong{
            font-size: 1.8rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`

export const Logout = styled.button`
    border: none;
    background: none;

    svg{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 3.6rem;
    }
`