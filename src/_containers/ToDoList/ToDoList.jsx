import React, { Component } from 'react';
import { ToDoItem } from '../../_components/ToDoItem'
import { NewToDoForm } from '../../_components/NewToDoForm'
import * as _ from 'ramda'
import { Header, DestroyButton } from '../../_helpers/theme'
import { getAllToDos, removeToDo, createToDo, updateToDo, removeAll } from '../../_actions';
import { connect } from 'react-redux';


class ToDoList extends Component {

    componentDidMount = async () => {
        this.props.dispatch(getAllToDos())
    };

    static defaultProps = {
        todo: [],
        title: 'Tickets list',
    };
    state = {
        draft: ''
    };

    findById = (id, arr) => {
        const index = _.findIndex(_.propEq('id', id))(arr);
        return { index: index, todo: arr[index] }
    };


    addToDo = async () => {
        const { draft } = this.state;
        await this.props.dispatch(createToDo( {content: draft} ));
        this.setState({draft: ''});
    };

    destroyToDo = async (id) => {
        this.props.dispatch(removeToDo(id))
    };

    toggleDone = async(id) => {
        let { todo } = this.findById(id, this.props.todo.items);
        this.props.dispatch(updateToDo(id,{done: !todo.done }))
    };

    updateDraft = event => {
         this.setState({draft: event.target.value})
    };

    removeAll = async () => {
        this.props.dispatch(removeAll())
    };

    render() {

        const { todo } = this.props
        const { draft } = this.state;
        return (
            <div>
                {/*{<Header>{todo}</Header>}*/}
                <DestroyButton onClick={this.removeAll}> Remove all </DestroyButton>

                {todo.items && todo.items.map(todo =>
                    <ToDoItem
                        id={todo.id}
                        key={todo.id}
                        text={todo.content}
                        done={todo.done}
                        destroy={this.destroyToDo}
                        toggleDone={this.toggleDone}
                    />)}
                <NewToDoForm
                    onSubmit={this.addToDo}
                    onChange={this.updateDraft}
                    draft={draft}
                />

            </div>
        )
    }
}

function mapStateToProps(state) {
    const  { todo } = state;
    return { todo };
}

const connectedToDoList = connect(mapStateToProps)(ToDoList);
export { connectedToDoList as ToDoList };
