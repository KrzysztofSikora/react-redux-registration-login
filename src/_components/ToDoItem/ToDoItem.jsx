import React from 'react';
import {Component} from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'


const Item = styled.div`
    background: #343744;
    border-radius: 10px;
    padding: 14px;
    height: 20px;
    margin-bottom: 7px;
    color: ${props => props.done ? '#1fd84d': 'auto'}
    text-decoration: ${props => props.done ? 'line-through' : 'auto'}   
`;
const Text = styled.div`
    float:left;
    
`;
const Button = styled.button`
    float:right; 
`;

const StyledLink = styled(Link)`
  color: palevioletred;
  text-decoration: none;
  margin-left: 5px;
  &:hover {
    color: #fff;
  }
`
class ToDoItem extends Component {

    toggleDone = () => {
        this.props.toggleDone(this.props.id)
    };

    destroy = () => this.props.destroy(this.props.id);

    render() {
        const { id, done, text } = this.props;
        return (
            <Item done={done}>
                <Text onClick={this.toggleDone}>{text}</Text>
                <Button onClick={this.destroy}>[x]</Button>
                <StyledLink to={`/todo_items/${id}`}>edit</StyledLink>
            </Item>
        )
    }
}

export default ToDoItem;