import styled from "styled-components";

// exported to components/ShipItem 
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

// exported to components/ShipInfo 
export const INFO_DIV = styled.div`
    width: 800px;
    margin: 0 auto;
    .photo_div {
        img{
        border-bottom: solid 2px #d98ca6;
        width:800px;
        }
    }
    
    .data{
        display: flex;
        justify-content: space-between;
    }
    .ships_info_buttons {
        .films-toggle {
            padding: 20px;
            width: 100%;
            background-color: #d98ca6;
            cursor: pointer;
            font-size: 25px;
            letter-spacing: 9px;
            font-weight: 900;
            &:hover {
                background-color: #825463;
            }
        }
    }
`

// Modal styles 
export const OVERLAY_STYLES = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, .7);  
    .MODAL_STYLES {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #181818;
        border: solid 3px black;
        max-width: 25rem;
        padding: 20px;
        button {
            position: fixed;
            top: 0;
            right: 0;
            background-color: #181818;
            border: none;
            font-size: 20px;
            color: 	#484848;
        }
        .header {
            margin: 0 auto;
            display: flex;
            justify-content: center;
            h3 {
            letter-spacing: 0.06em;
            color: #edd700;
            }
        }    

        img {
            width: 100%;
            height: auto;
        }
        
        .form {
            display: flex;
            flex-direction: column;
            span {
                color: white;
            }
            .submit {
                background-color: #484848;
                border: none;
                border-radius: 3px;
                padding: 10px;
                font-size: 18px;
                font-weight: bold;
                color: white;
                letter-spacing: 1px;
                margin-top: 25px;
                cursor: pointer;
            }
        }
    }
`
// inputs style
export const Inputs_wrapper = styled.div`
    display: flex;
    flex-direction: column;
    input {
        padding: 10px;
        margin: 10px 0;
        &:invalid[focused="true"] {
            border: 1px solid red;
        }
        &:invalid[focused="true"] ~ span {
            display: block;
        }
    }
    span {
        font-size: 12px;
        padding: 3px;
        display: none;
    }  
`

// exported to components/LogIn 
export const USER_DIV = styled.div`
    width: 400px;
    height: fit-content;
    display: flex;
    justify-content: flex-end;
    margin-top: 25px;
    button {
        background-color: black;
        color: #aaa;
        font-weight: 700;
        letter-spacing: 2px;
        font-size: 14px;
        cursor: pointer; 
    } 
    span {
        color: #343434;
        font-weight: 700;
        letter-spacing: 2px;
        font-size: 14px;       
    }
`

// exported to components/NavBarExternalLinks 
export const EXTERNAL_LINKS = styled.div`
     width: 400px;
     display: flex;
     justify-content: flex-start; 
     .STYLED_UL {
         height: fit-content;
         display: flex;
         border-right: solid 1px #343434;
         a {
             margin: 0 10px;
             span{
                 color: #aaa;
                 font-size: 1.5rem;      
             }
         }
     }
     .KIDS_DIV {
         background-color: #aaa;
         width: 50px;
         height: 22px;
         color: black;
         font-weight: 900;
         border-radius: 10px;
         margin: 18px 10px;
         display: flex;
         justify-content: center;
         a {
             color: black;
             text-decoration: none;
         }
     }
    `


// exported to components/NavBar 
export const NAV_CONTAINER = styled.div`
    width: 100vw;
    height: auto;
     .UPPER_BAR_WRAPPER {
        padding: 20px 0;
        display: flex;
        justify-content: center;
        position: relative;
     }
    .LOGO {
           width: 13rem;
           img {
            width: 100%;
            height: auto;  
            min-width: 5rem   
           }
    }
    .hamburger  {
        position: absolute;
        top: 0;
        right: 0;
        margin: 1rem;
        font-size: 1.8rem;
        cursor: pointer;
        transition: 0.5s ease;
        display: block;
        &:hover {
            opacity: 0.5;
        }
    }
    .external_links {
        display: none;
    }
    .login_signup {
        display: none;
    }
    .login_signup.mobile {
        display: block;
    }
    .LINK_BAR {
        height: 51px;
        border-bottom: 1px solid #343434;
        border-top: 1px solid #343434;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
    }
    @media(min-width: 900px) {
        .external_links {
            display: block;
        }
        .login_signup {
            display: block;
        }
        .hamburger  {
            display: none;
        }
        .UPPER_BAR_WRAPPER {
            justify-content: space-between;
        }
    }
    @media(max-width: 900px) {
        .login_signup.mobile {
            position: absolute;
            top: 18%;
            right: 10%;
            background-color: black;
            padding: 7rem;
        }
    }
`

export const  OVERLAY_PLEASE_LOGIN = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .7);  
    .MODAL_STYLES {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #181818;
        border: solid 3px black;
        max-width: 540px;
        padding: 100px;
        .header {
            margin: 0 auto;
            display: flex;
            justify-content: center;
            h3 {
            letter-spacing: 0.06em;
            color: #edd700;
            }
        }    
        .div_link {
            .LINK {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, 100%);
            text-decoration: none;
            color: #edd700;
            border: solid black 2px;
            padding: 10px 10px 15px;
            &:hover {
                font-size: 20px;
            }
            }
         } 
    } 
`

export const FILMS_WRAPPER = styled.div`
    border: 5px solid #181818;
    display: flex;  
    flex-wrap: wrap;
    div {
        width:300px;
        margin: 10px 45px;
        border-right: 2px solid #181818;
    }
`

export const welcome_wrapper = styled.main`
    width: 100vw;
`