import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
const Div = styled.div`
    position:fixed;
    top:20px;
    left:20px;
    z-index:30;
    display:none;
    @media (max-width:768px){
        display:block;
        cursor: pointer;
    }
    div{
        list-style:none;
        width:2.5rem;
        height:0.3rem;
        background:${props => props.status ? '#fff' : 'rgb(180, 0, 150)'};
        margin:8px 0 ;
        border-radius:10px;
        transform-origin:1px;
        transition: all 300ms;
        &:nth-child(1) {
            transform: ${props => props.status ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${props => props.status ? 'translateX(100px)' : 'translateX(0)'};
            opacity:${props => props.status ? '0' : '1'};
        }
        &:nth-child(3) {
            transform: ${props => props.status ? 'rotate(-45deg)' : 'rotate(0)'};
        }
       
    };
    
`;

class Hambur extends Component {
    state = {
        open :true,
    }
    menuHandel = ()=> {
        this.setState({
            open :!this.state.open,
        });
    }
    render() { 
        return (
            <>
            <Div status={this.state.open}  onClick={this.menuHandel}>
                <div></div>
                <div></div>
                <div></div>
                
            </Div>
            <Navbar status={this.state.open} />
            </>
            
        );
    }
   
}
 
export default Hambur;