import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

console.log(PostsReducer);
const rootReducer = combineReducers({
    //state: (state = {}) => state
    posts: PostsReducer,
    form: formReducer
});

export default rootReducer;
