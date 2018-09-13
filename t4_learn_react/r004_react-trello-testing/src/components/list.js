import React from 'react';

import Card from './card';
import AddForm from './add-form';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }

        // we bind the addCard method
        this.addCard = this.addCard.bind(this);
    }

    addCard(text) {
        // update the state
        this.setState({
            cards: [...this.state.cards, {text}]
        });
    }

    render() {
        // store all of the cards within this const
        const cards = this.state.cards.map((card, index) =>
            <li key={index}>
                <Card {...card} />
            </li>
        );

        // returns back a list of the cards and a small form at end to add card
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul className="list">
                    {cards}
                    <li>
                        <AddForm 
                            type="card"
                            onAdd={text => this.addCard(text)}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

List.defaultProps = {
    title: ''
};