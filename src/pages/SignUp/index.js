import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    email: Yup.string()
        .email('Email invalid!')
        .required('Email is required!'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required!'),
});

export default function SignUp() {
    function handleSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" type="text" placeholder="Name" />
                <Input name="email" type="email" placeholder="Email" />
                <Input name="password" type="password" placeholder="Password" />

                <button type="submit">Create account</button>
                <Link to="/">I already have an account.</Link>
            </Form>
        </>
    );
}
