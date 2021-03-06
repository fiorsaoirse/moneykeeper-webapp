import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import purchases from './purchases/index';
import categories from './categories/index';

// Forms must be declared as independent reducer
export default combineReducers({
    purchases,
    categories,
    form: formReducer,
});