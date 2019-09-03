import React, { Component } from 'react';

import { ToDoItem } from '../../_components/ToDoItem'
import { NewToDoForm } from '../../_components/NewToDoForm'
import { todoService } from "../../_services";

import * as _ from 'ramda'
import { Header, DestroyButton } from '../../_helpers/theme'


class ToDoList extends Component {

    componentDidMount = async () =>{
        let tasks = await todoService.getAllToDo();
        tasks = tasks['data'];
        this.setState({tasks});
    };

    static defaultProps = {
        tasks: [],
        title: 'Tickets list'
    };
    state = {
        tasks: this.props.tasks,
        draft: ''
    };

    addToDo = async () => {
        const { tasks, draft } = this.state;
        let task = await todoService.createToDo({content: draft});
        task = task['data'];

        this.setState({tasks: _.append(task, tasks), draft: ''})
    };

    findById = (id, arr) => {
        const index = _.findIndex(_.propEq('id', id))(arr);
        return { index: index, task: arr[index] }
    };

    destroyToDo = async (id) => {
        const { tasks } = this.state;
        await todoService.deleteById(id);
        const { index } = this.findById(id, tasks);
        this.setState({tasks: _.remove(index, 1, tasks)})

    };

    toggleDone = async(id) => {
        const { tasks } = this.state;
        const { index, task } = this.findById(id, tasks);
        const response = await todoService.updateToDo(id, {done: !task.done });
        this.setState({tasks: _.update(index, response.data, tasks)});

    };

    updateDraft = event => {
        this.setState({draft: event.target.value})
    };

    removeAll = async () => {
        const response = await todoService.deleteAll();
        this.setState({tasks: []});
    };

    render() {
        const { title } = this.props;
        const { tasks, draft } = this.state;
        return (
            <div>
                <Header>{title}</Header>
                <DestroyButton onClick={this.removeAll}> Remove all </DestroyButton>
                {tasks.map(task =>
                    <ToDoItem
                        id={task.id}
                        key={task.id}
                        text={task.content}
                        done={task.done}
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

export default ToDoList;