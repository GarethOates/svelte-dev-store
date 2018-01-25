import {compose, createStore} from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = (state, action) => {
    if (!state) {
        state = {};
    }

    return Object.assign({}, state, action.payload);
};

const store = createStore(rootReducer, composeEnhancers());
const updateStore = (newState) => {
    return {
        type: 'newState',
        payload: newState
    };
};

export default {
    store,
    updateStore
};