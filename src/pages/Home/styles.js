import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 25rem auto;
    grid-template-rows: 10.5rem 10.28rem auto 6.4rem;

    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content"
    ;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
    grid-area: brand;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    h1{
        font-size: 2.4rem;
        color: ${({theme})=>theme.COLORS.ORANGE};
    }
`;

export const Menu = styled.ul`
    grid-area: menu;
    background-color: green;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    padding-top:6.4rem;
    text-align: center;

    li{
        margin-bottom: 2.4rem;
    }
`;

export const Search = styled.div`
    grid-area: search;
    background-color: violet;

    padding: 6.4rem 6.4rem 0;
`;

export const Content = styled.div`
    grid-area: content;
    background-color: blue;
`;

export const NewNote = styled.button`
    grid-area: newnote;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({theme})=>theme.COLORS.ORANGE};
    border: none;

    svg{
        margin-left: 8px;
    }
`;