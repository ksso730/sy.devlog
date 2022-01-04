import {all} from 'redux-saga/effects'

// generator 함수: 여러값을 반환할 수 있다. : function*
export default function* rootSaga(){
    yield all([]);
}