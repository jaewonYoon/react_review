import {all, call} from 'redux-saga/effects';

import {fetchCollectionsStart} from './shop/shop.saga'; 
import {shopSagas} from './shop/shop.saga';
export default function* rootSaga(){
    yield all([
        call(shopSagas)
    ]);
}