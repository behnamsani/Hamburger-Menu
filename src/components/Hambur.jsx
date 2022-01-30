import React, { Component } from 'react';
import styled from 'styled-components';
const Div = styled.div`
    position:fixed;
    top:20px;
    left:20px;
    z-index:15;
    display:none;
    @media (max-width:768px){
        display:block;
        cursor: pointer;
    }
`;
const Li = styled.div`
    width:2.5rem;
    height:0.3rem;
    background:#fff;
    margin:8px 0 ;
    border-radius:10px;
    :nth-child(1){
        transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0deg)'};
    }
`;

class Hambur extends Component {
    state = {
        open:true,
     } 
    render() { 
        return (
            <Div onClick={this.menuHandel} open={this.state.open}>
                <Li></Li>
                <Li></Li>
                <Li></Li>
            </Div>
        );
    }
    menuHandel = ()=> {
        this.setState({
            open :!this.state.open,
        });
    }
}
 
export default Hambur;