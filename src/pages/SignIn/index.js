import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Email invalid!')
        .required('Email is required!'),
    password: Yup.string().required('Password is required!'),
});

export default function SignIn() {
    function handleSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Email" />
                <Input name="password" type="password" placeholder="Password" />

                <button type="submit">Join</button>
                <Link to="/register">Create account</Link>
            </Form>
        </>
    );
}
