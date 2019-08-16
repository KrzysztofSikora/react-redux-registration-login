import React from 'react';
import {Component} from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { StyledEditLink } from '../../_helpers/theme'

const Item = styled.div`
    
    background: #343744;
    border-radius: 10px;
    padding: 14px;
    margin-bottom: 7px;
    color: ${props => props.done ? '#1fd84d': 'auto'}
    text-decoration: ${props => props.done ? 'line-through' : 'auto'}   
`;
const Text = styled.span`
    float:left;
    color: ${props => props.done ? '#1fd84d': '#ffffff'}
`;
const Button = styled.button`
    float:right; 
`;


class ToDoItem extends Component {

    toggleDone = () => {
        this.props.toggleDone(this.props.id)
    };

    destroy = () => this.props.destroy(this.props.id);

    render() {
        const { id, done, text } = this.props;
        return (
            <Item done={done}>
                <Text onClick={this.toggleDone} done={done} >{text}</Text>
                <Button className="btn btn-danger"  onClick={this.destroy} >[x]</Button>
                <StyledEditLink to={`/todo_items/${id}`}>edit</StyledEditLink>
            </Item>
        )
    }
}

export default ToDoItem;