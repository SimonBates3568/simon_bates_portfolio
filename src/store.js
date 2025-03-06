// filepath: /Users/simonbates/Desktop/maria_peter_website/src/store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
    // Define your initial state here
};

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // Define your action types and state updates here
        default:
            return state;
    }
};

// Create store
const store = createStore(rootReducer);

export default store;