import { Button, Form, Input } from 'antd';
import React, { useState, useEffect, useContext } from 'react';
import api from '../../api/index';
import { AuthContext } from '../../auth-context/auth-context';
import { useRouter } from 'next/router';

const LoginForm = () => {
    const router = useRouter();
    const authContext = useContext(AuthContext);

    const [errMsg, setErrMsg] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        if (user) {
            authContext?.setUserAuthInfo(user);
        }
    }, [user]);

    const onFinish = (values: any) => {
        const obj = {
            UserName: values?.username,
            Password: values?.password,
            Grant_Type: 'password',
            Scope: 'v2,e1e0322c-acb0-4a24-958c-23b2ad912a2c,af3baf1d-7aae-462c-9d1e-051cef459b86,123456',
            DeviceInfo: '123456',
        };

        const response = api.auth.signIn(obj);

        response
            .then((response) => response.data)
            .then((data) => {
                setUser(JSON.stringify(data));
                router.push('/dashboard/activities');
            })
            .catch((err) => {
                if (!err?.response) {
                    setErrMsg('No Server Response');
                } else if (err.response?.status === 400) {
                    setErrMsg('Email or Password does not valid');
                } else if (err.response?.status === 401) {
                    setErrMsg('Unauthorized');
                } else {
                    setErrMsg('Login Failed');
                }
            });
    };

    return (
        <>
            <p
                className={errMsg ? 'errmsg' : 'offscreen'}
                style={{ color: 'red' }}
                aria-live="assertive"
            >
                {errMsg}
            </p>

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    labelCol={{ span: 24 }}
                    label="Email"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input
                        size="large"
                        style={{ maxWidth: 500, borderRadius: '5px' }}
                        placeholder="Enter Your Email"
                    />
                </Form.Item>
                <Form.Item
                    labelCol={{ span: 24 }}
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input.Password
                        size="large"
                        style={{
                            maxWidth: 500,
                            borderRadius: '5px',
                        }}
                        type="password"
                        placeholder="Enter Your Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        style={{ width: 500, marginTop: 20 }}
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default LoginForm;
