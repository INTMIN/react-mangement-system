import styled from 'styled-components';

export const LoginWrapper = styled.div`
    z-index:1;
    position:absolute;
    left:0;
    right:0;
    bottom: 0;
    top: 56px;
    background:rgba(0, 0, 0, 0.45);
`;

export const LoginBox = styled.div`
    width:400px;
    height: 180px;
    margin:100px auto;
    padding-top:20px;
    background:#fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
`;
export const Input = styled.input`
    display: block;
    width: 200px;
    height: 30px;
    line-height: 30px;
    margin:10px auto;
    padding: 0 10px;
    color:#777;
`;
export const Button = styled.button`
    display:block;
    width: 220px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #3194d0;
    border-radius: 15px;
    margin: 10px auto;
    text-align: center;
`;