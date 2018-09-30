import {
    call,
    put,
    takeEvery,
    takeLatest
} from 'redux-saga/effects'
import {
    GET_INIT_LIST
} from './actionTypes'
import axios from "axios"
import {getInitListAction} from './actionCreator'

function* getInitList() {
    try {
        const res = yield axios.get('/todo')
        const action = getInitListAction(res.data)
        yield put(action)
    }catch (e) {
        console.log('网络请求失败')
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga