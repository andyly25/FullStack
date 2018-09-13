import react from 'react';

import List from './list';
import AddForm from './add-form';

import './board.css';

// main component that is called from index
// this is stateful
// used to store component's state (values that describe what 
// the contents and behavior of components should be)
export default class Board extends.Component {
    // constructor is where we initialize instance properties
    constructor(props) {
        super(props);

        // how we can derive initial state from props, init default val
        this.state = {
            lists: []
        };

        // This is how we bind methods
        this.addList = this.addList.bind(this);
    }

    addList(title) {
        // use this.setstate to update component's state
        this.setState({
            // this uses spread operator so we can add title into list without
            // mutating
            lists: [...this.state.lists, {title}]
        });
    }

    render (
        // map through each list item with their own html
        const lists = this.state.lists.map((list, index) => {
            // key prop helps React maintain state of each component across 
            // multiple calls to render function
            // also with spread operator, keys used as prop names
            // and we pass all of the list props to List component
            <li className="list-wrapper" key={index}>
                <List {...list} />
            </li>
        });

        // within AddForm, the component passes callback that calls this.addList
        // as the onAdd prop, this is the callback function fired when AddForm
        // is submitted
        return (
            <div className="board">
                <h2>{this.props.title}</h2>
                <ul className="lists">
                    {lists}
                    <li className="add-list-wrapper">
                        <AddForm
                            type="list"
                            onAdd={text => this.addList(text)}
                        />
                    </li>
                </ul>
            </div>
        );
    );
}

// default props is used if alternative isn't supplied when rendering component
// if title isnt provided we use Board
Board.defaultProps = {
    title: 'Board'
};
