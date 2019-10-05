import React, { Component } from 'react';
import { ContentsItem } from '../../_components/ContentsItem'
import { NewContentsForm } from '../../_components/NewContentsForm'
import * as _ from 'ramda'
import { Header, DestroyButton } from '../../../_helpers/theme'
import { getAllContents, removeContents, createContents, updateContents, removeAll } from '../../../_actions';
import { connect } from 'react-redux';


class ContentsList extends Component {

    componentDidMount = async () => {
        this.props.dispatch(getAllContents());
        console.log("props", this.props)

    };

    static defaultProps = {
        contents: [],
        title: 'Tickets list',
    };
    state = {
        draft: ''
    };

    findById = (id, arr) => {
        const index = _.findIndex(_.propEq('id', id))(arr);
        return { index: index, item: arr[index] }
    };


    addToDo = async () => {
        const { draft } = this.state;
        await this.props.dispatch(createContents( {content: draft} ));
        this.setState({draft: ''});
    };

    destroyToDo = async (id) => {
        this.props.dispatch(removeContents(id))
    };

    toggleDone = async(id) => {
        let { item } = this.findById(id, this.props.contents.items);
        this.props.dispatch(updateContents(id,{done: Number(!item.done) }))
    };

    updateDraft = event => {
         this.setState({draft: event.target.value})
    };

    removeAll = async () => {
        this.props.dispatch(removeAll())
    };

    render() {

        const { contents } = this.props
        const { draft } = this.state;
        { console.log("test", contents)}

        return (
            <div>
                {/*{<Header>{todo}</Header>}*/}
                <DestroyButton onClick={this.removeAll}> Remove all </DestroyButton>
                { console.log("test", contents)}
                {contents.items && contents.items.map(contents =>
                    <ContentsItem
                        id={contents.id}
                        key={contents.id}
                        name={contents.name}
                        text={contents.content}
                        done={contents.done}
                        destroy={this.destroyToDo}
                        toggleDone={this.toggleDone}
                    />)}
                <NewContentsForm
                    onSubmit={this.addToDo}
                    onChange={this.updateDraft}
                    draft={draft}
                />

            </div>
        )
    }
}

function mapStateToProps(state) {
    const  { contents } = state;
    return { contents };
}

const connectedContentsList = connect(mapStateToProps)(ContentsList);
export { connectedContentsList as ContentsList };
