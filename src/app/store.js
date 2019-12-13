import { createStore } from 'redux';
import rootReducer from "./reducers/index";

// const composeEnhancers =
//     process.env.NODE_ENV !== 'production' &&
//     typeof window === 'object' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
//
// const configureStore = preloadedState => (
//     createStore(
//         rootReducer,
//         preloadedState,
//         composeEnhancers(),
//     )
// );
//
// const store = configureStore({});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;