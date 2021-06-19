import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './RootReducer';
import ReduxThunk from 'redux-thunk';

const store = createStore(rootReducer, compose(
    applyMiddleware(ReduxThunk),
    ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()) || compose
));

store.subscribe(() => {
    console.log(store.getState());
});

export default store;