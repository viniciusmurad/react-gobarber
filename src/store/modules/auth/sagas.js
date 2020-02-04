import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { signInSuccess, signFailure } from './actions';

import history from '~/services/history';
import api from '~/services/api';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        if (!user.provider) {
            toast.error('You are not authorized to sign in!');
            return;
        }

        yield put(signInSuccess(token, user));

        history.push('/dashboard');
    } catch (err) {
        toast.error('Something wrong! Try again.');
        yield put(signFailure());
    }
}

export function* signUp({ payload }) {
    try {
        const { name, email, password } = payload;
        yield call(api.post, 'users', {
            name,
            password,
            email,
            provider: true,
        });
        history.push('/');
    } catch (err) {
        toast.error('Something wrong! Try again.');
        yield put(signFailure());
    }
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
