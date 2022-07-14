import styled from "styled-components";

export const SHIP_BOX = styled.div`
    width: 700px;
    margin: 20px auto;
    padding: 1px;
    text-align: start;
    background-color: 	#101010;
    h3, p {
        margin-left: 20px;
    }
`

export const INFO_DIV = styled.div`
    width: 600px;
    margin: 0 auto;
    img{
        border-bottom: solid 2px #d98ca6;
    }
    .data{
        display: flex;
        justify-content: space-between;
    }
`

export const OVERLAY_STYLES = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .7);  
`

export const MODAL_STYLES = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFF;
    padding: 20px 200px;
    border: solid 3px black;
    border-radius: 15px;
`

export const MODAL_EXIT_BUTTON = styled.button`
    position: fixed;
    right: 0;
    top: 0;
    border-radius: 15px;
`

export const USER_DIV = styled.div`
    width: 400px;
    span {
        color: #343434;
        font-weight: 700;
        letter-spacing: 2px;
        font-size: 14px;       
    }
`

export const USER_BUTTONS = styled.button`
    background-color: black;
    color: #aaa;
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 14px;
    cursor: pointer;
    
`