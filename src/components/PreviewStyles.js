import styled from 'styled-components'

export const PreviewContainer = styled.div`
    background: linear-gradient(to bottom, #89cff0, #005c99);
    margin-top: 20px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    h4 {
        text-align: center;
        margin-bottom: 10px;
        color: #333;
        font-size: 20px;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        margin-bottom: 5px;
        font-size: 20px;
    }

    img {
        margin-right: 10px;
        width: 60px;
    }

    p{
        font-size: 20px;
    }
`
