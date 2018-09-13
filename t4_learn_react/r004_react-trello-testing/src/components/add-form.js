import React from 'react';

import './add-form.css';

export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            editing: false
        };
    }

    // onsubmit function
    /*
        After we have used our uncontrolled input ref to obtain the text 
        the user entered, we check to see whether an onAdd prop has 
        been passed to the component. This prop is a function passed to 
        the component by its parent. If this prop has been supplied, 
        we call it, passing the user's text as an argument.
     */
    onSubmit(e) {
        e.preventDefault();
        const text = this.textInput.value.trim();
        if(text && this.props.onAdd) {
            // The parent passes a callback to the child as one of its props. 
            // Then when the child needs to communicate information upwards to 
            // the parent, it calls the callback.
            this.props.onAdd(text);
        }
        // sets value back to empty
        this.textInput.value = '';
    }

    // This is to manipulate what happens if we are editing or not editing
    // uses the this.setState method to modify editing property of the state
    // React will auto update the DOM, by calling component's render method
    setEditing(editing) {
        this.setState({
            editing
        });
    }

    render() {
        // if we currently aren't editing, we set editing to true
        if (!this.state.editing) {
            return (
                <button
                    className="add-button"
                    onClick={() => this.setEditing(true)}
                >
                Add a {this.props.type}...
                </button>
            );
        }

        // otherwise we set editing to false after we're done
        // when form is submitted, it calls the onSubmit function
        // and if we press cancel button, sets editing to false
        return (
            <form className="card add-form" onSubmit={e => this.onSubmit(e)}>
                <input type="text" ref={input => (this.textInput = input)} />
                <button>Add</button>
                <button type="button" onClick={() => this.setEditing(false)}>
                    Cancel
                </button>
            </form>
        );
    }
}