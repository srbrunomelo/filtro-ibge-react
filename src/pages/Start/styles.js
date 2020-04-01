import styled from 'styled-components';

export const Container = styled.div`
    .start-container{
        width: 100%;
        max-width: 600px; 
        margin: 0 auto;  
        padding: 50px 0;

        form { 
        }


        input {
            margin-top: 20px;
            width: 100%;
            padding: 15px;
            border-radius: 5px;
            border: 1px solid #CCC;
            text-align:center;
            font-size: 18px;
        }

        button {
            width: 100%;
            padding: 5px;
            margin-top: 5px;
            background: #7159C1;
            color: #fff;
            border-radius: 5px;
            border: none;
            cursor: pointer;
        }

        .error{
            color: red;
        }
    }

    .data{
        width: 100%;
        max-width: 600px; 
        margin: 0 auto;  
        padding: 50px 0;
        text-align: center;
        font-size: 18px;
    }


    .container-loading{
        background: rgba(0,0,0, 0.2);
        width:100%;
        min-height: 100vh; 
        background-size: cover;
        display: flex;
        flex-direction: column; 
        color: #a0a0a0; 
        align-items: center;
        justify-content: center;
    }

    .loading{
        display: flex;
        flex-direction: column; 
        width: 70%;
        max-width: 450px;
    }


    .lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    }
    .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
    }
    .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #cef;
    margin: -4px 0 0 -4px;
    }
    .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
    }
    .lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
    }
    .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
    }
    .lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
    }
    .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
    }
    .lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
    }
    .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
    }
    .lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
    }
    .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
    }
    .lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
    }
    .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
    }
    .lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
    }
    .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
    }
    .lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
    }
    .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
    }
    .lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
    }
    @keyframes lds-roller {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }

`;