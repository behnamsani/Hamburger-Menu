import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    background:rgb(180, 0, 150);
    width:100%;
    height: 80px;
    @media (max-width:768px){
        width:250px;
        height:100vh;
        position:fixed;
        top:0;
        left:0;
        display:block;
        transform: ${props => props.status ? 'translateX(0)' : 'translateX(-250px)'};
        transition: all 300ms;
    }
`;
const Ul = styled.ul`
    display: flex;
    justify-content:center;
    align-items: center;
    height:80px;
    @media (max-width:768px){
        width:100%;
        height:100vh;
        display:block;
        text-align:left;
        padding: 100px 0;
    }
`;
const Li = styled.li`
    color: #fff;
    list-style: none;
    margin: 0 25px;
    padding:10px;
    cursor: pointer;
    border-radius:10px ;
    font-weight: bold;
    transition:all 500ms;

    &:hover{
        background:#fff;
        color:rgb(180, 0, 150);
        
    }
`;

class Navbar extends Component {
    
    render() { 
        const {status} = this.props;
        return (
            <>
                <Div status={status}>
                    <Ul>
                        <Li> Home </Li>
                        <Li> Project </Li>
                        <Li>Resume</Li>
                        <Li> Connect Us </Li>
                    </Ul>
                </Div>
                
            </>
            
            
        );
    }
}
 
export default Navbar;