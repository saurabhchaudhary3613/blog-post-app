import _ from 'lodash';

import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            //console.log('data:=>', action.payload.data);
            return _.mapKeys(action.payload.data, 'id');

        case FETCH_POST:
            console.log('data:=>', action.payload.data);
            // const post = action.payload.data;
            // const newState = { ...state };
            // newState[post.id] = post;
            // return newState;
            return { ...state, [action.payload.data.id]: action.payload.data };

        case DELETE_POST:
            return _.omit(state, action.payload); //Looks for state object,
        //if the state object has  a key of the post id, drop/omit it
        // it doesn't modify the existing state object, it returns a new sate object
        // with that perticular post id not persent any more

        default:
            return state;
    }
}
