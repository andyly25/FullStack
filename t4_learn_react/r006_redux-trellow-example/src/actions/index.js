export const ADD_LIST = 'ADD_LIST';
export const addList = title => ({
    type: ADD_LIST,
    title
});

export const ADD_CARD = 'ADD_CARD';
// to have consistent payloads, write action creator functions instead directly
export const addCard = (text, listIndex) => ({
  // type is a string indicating type of action being carried
  // other props are action's payload
    type: ADD_CARD,
    text,
    listIndex
});
