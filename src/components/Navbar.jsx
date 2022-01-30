import React, { Component } from 'react';
import styled from 'styled-components';
import Hambur from './Hambur';
const Div = styled.div`
    background:rgb(180, 0, 150);
    width:100%;
    height: 80px;
    @media (max-width:768px){
        width:250px;
        height:100vh;
        position:fix;
        top:0;
        left:0;
        display:${props => props.open ? 'block':'none'};
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
        padding: 60px 0;
    }
`;
const Li = styled.li`
    color: #fff;
    list-style: none;
    margin: 0 15px;
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
    state = {  
        open:true,
    } 
    render() { 
        return (
            <>
                <Div open={this.state.open}>
                    <Ul>
                        <Li> Home </Li>
                        <Li> Project </Li>
                        <Li>Resume</Li>
                        <Li> Connect Us </Li>
                    </Ul>
                </Div>
                <Hambur />
            </>
            
            
        );
    }
    menuHandel= ()=> {
        this.setState({
            open :!this.state.open,
        });
    }
}
 
export default Navbar;