import * as actions from '../actions';

// populate state with initial seed data for quick testing
const initialState = {
    lists: [{
        title: 'Example list 1',
        cards: [{
            text: 'Example card 1'
        }, {
            text: 'Example card 2'
        }]
    }, {
        title: 'Example list 2',
        cards: [{
            text: 'Example card 1'
        }, {
            text: 'Example card 2'
        }]
    }]
};

// reducers is a function that takes 2 args
// first is the current state, and 2nd is the action
// inside function cronstruct object that will be new state then return
// it will then replace stat in your app
export const trelloReducer = (state=initialState, action) => {
    // series if and else to handle different action types
    if (action.type === actions.ADD_LIST) {
        // ... here, Object.assign generates
        // a new state object by merging an object
        // representing the new state of the lists
        // to the existing state, and in turn, that resulting 
        // object into an empty object, which ensures
        // that we're not mutating the original state object,
        // which is a big no-no
        return Object.assign({}, state, {
            lists: [...state.lists, {
                title: action.title,
                cards: []
            }]
        });
    }
    /*
        Here, you map over the lists property of the state, creating a new 
        array of lists. When you reach the list index which you want to add 
        the card to, you use the same combination of Object.assign and the 
        array spread operator to append the new card to the cards array. 
        Finally, you use Object.assign to replace the lists property of the 
        state with our new array of lists.
     */
    else if (action.type === actions.ADD_CARD) {
        let lists = state.lists.map((list, index) => {
            if (index !== action.listIndex) {
                return list;
            }
            return Object.assign({}, list, {
                cards: [...list.cards, {
                    text: action.text
                }]
            });
        });

        return Object.assign({}, state, {
            lists
        });
    }
    // if doesn't match any, then return unmodified state
    // an action not handled by this reducer can still be handled by another
    return state;
};

