import _ from 'lodash';

import { FETCH_POSTS } from '../actions/index';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            //console.log('data:=>', action.payload.data);
            return _.mapKeys(action.payload.data, 'id');

        // case CREATE_POST:
        //     return action.p

        default:
            return state;
    }
}
