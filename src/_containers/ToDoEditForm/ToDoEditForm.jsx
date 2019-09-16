import React, { Component } from 'react';
import { getOneToDos, updateToDo } from "../../_actions";
import { connect } from 'react-redux';

import { LocationToDo } from '../../_components/LocationToDo/LocationToDo'



import { Formik } from 'formik'
import {
    SubmitButton,
    TextInput,
    Label,
    Select,
    ErrorMsg
} from '../../_helpers/theme'
import * as _ from 'ramda';




class ToDoEditForm extends Component {

    state = {
        toDoItem: null,
        fetched: false,
        disabled: false
    };
    componentDidMount = async () => {
         await this.props.dispatch(getOneToDos(this.itemId()));
         this.setState({ fetched: true});
         console.log("this",this.props)
    };

    itemId = () => this.props.match.params.itemId;

    isSubmitting = async (values) => {
        values.done = Number(values.done);

        values.lng = this.props.todo.item.lng
        values.lat = this.props.todo.item.lat
        console.log("update",this.props.todo.item)
        this.props.dispatch(updateToDo(values.id, values))
        this.props.history.push('/feature')
    };

    render() {
        return (
            <div>Edit form {this.itemId()}
                {/*{console.log("here item",this.props.todo.item)}*/}
                {/*{console.log("here items",this.props.todo.items)}*/}

                {this.props.todo.item
                    ? <Formik
                        enableReinitialize
                        initialValues={{...this.props.todo.item}}
                        onSubmit={(values) => this.isSubmitting(values) }
                        validate = {(values) => {
                            let errors = {};
                            if(!values.content) {
                                errors.content = 'Required'
                            } else if (values.content.length < 3) {
                                errors.content = 'Too short. Minimum 3 characters...'
                            } else if (values.content.includes('ass')) {
                                errors.content = 'Mind your language'
                            }
                            if(_.isEmpty(errors)) {
                                this.setState({disabled: false})
                            } else {
                                this.setState({disabled: true})
                            }
                            return errors;
                        }}
                        render={({
                                     values,
                                     errors,
                                     touched,
                                     handleBlur,
                                     handleChange,
                                     handleSubmit,
                                     isSubmitting

                                 }) => (
                            <form onSubmit={handleSubmit}>



                                <LocationToDo/>
                                <Label>
                                    <ErrorMsg>{errors.content}</ErrorMsg>
                                    <TextInput
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.content}
                                        name="content"
                                    />

                                </Label>

                                <Label>
                                    Priority
                                    <Select name="priority" onChange={handleChange} value={values.priority}>
                                        <option value="low">Low</option>
                                        <option value="high">High</option>
                                        <option value="urgent">Urgent</option>
                                    </Select>
                                </Label>
                                <Label>
                                    Done?
                                    <input type='checkbox' name='done' value={values.done}
                                           checked={values.done} onChange={handleChange} />
                                </Label>
                                <SubmitButton type="submit" disabled={this.state.disabled}>Update</SubmitButton>
                            </form>

                        )}
                    />
                    : <p>Loading...</p>
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    const  { todo } = state;
    return { todo };
}

const connectedToDoEditForm = connect(mapStateToProps)(ToDoEditForm);
export { connectedToDoEditForm as ToDoEditForm };