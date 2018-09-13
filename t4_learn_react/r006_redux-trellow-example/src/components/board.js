import React from 'react';
import {connect} from 'react-redux';

import List from './list';
import AddForm from './add-form';

import {addList} from '../actions';

import './board.css';

// original
// export default class Board extends React.Component {
// connected version of component is now the default export and unconnected
// becomes a named export
export class Board extends React.Component {
    // previous version without redux
    /*
        constructor(props) {
            super(props);

            this.state = {
                lists: []
            };
        }

        addList(title) {
            this.setState({
                lists: [...this.state.lists, {title}]
            });
        }
     */
    addList(title) {
        this.props.dispatch(addList(title));
    }

    render() {
        // previous
        // const lists = this.state.lists.map((list, index) =>
        // we are now accessing through props
        // connect takes a func as an arg which is mapStateToProps
        // which describe how different parts of state should be inserted
        // into props of component. Each key in the returned object is a
        // single prop that will be added to the wrapped component.
        // The value is the value that will be given to that prop.
        const lists = this.props.lists.map((list, index) => (
            <li className="list-wrapper" key={index}>
                <List index={index} {...list} />
            </li>
        ));

        return (
            <div className="board">
                <h2>Example board</h2>
                <ul className="lists">
                    {lists}
                    <li className="add-list-wrapper">
                        <AddForm
                            type="list"
                            onAdd={title => this.addList(title)}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

Board.defaultProps = {
    title: 'Board'
};

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(Board);
