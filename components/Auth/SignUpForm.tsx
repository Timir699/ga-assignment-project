
import { Button, Form, Input, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React , {useState, useEffect} from 'react';
import api from "../../api/index"
let SelectOption = [
    { value: 'punaho', label: 'Punaho' },
    { value: 'staging', label: 'Staging Root Group' },
];

const SignUpForm = () => {
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const onFinish = (values: any) => {
        const obj = {
            UserName: values.email,
            FirstName: values.fullName.split(' ', 2)[0],
            LastName: values.fullName.split(' ', 2)[1],
            Email: values.email,
            Password: values.password,
            RoleId: '67d38259-1de5-4434-aaf7-d69fe827109f',
            ApplicationId: 'e1e0322c-acb0-4a24-958c-23b2ad912a2c',
            TenantId: 'af3baf1d-7aae-462c-9d1e-051cef459b86',
        };

        console.log(obj);
        const response = api.auth.signUp(obj);

        response
            .then((response) => response.data)
            .then((response) => {
                console.log(response);
                setSuccess(true);
                setTimeout(() => {
                    window.location.href = '/login';
                }, 3000);
            })
            .catch((error) => {
                if (error.response?.status === 500) {
                    setErrMsg('registration failed. email should be unique');
                } else {
                    setErrMsg('registration failed.');
                }
            });
    };

    const onSecondCityChange = (values: any) => {
        console.log(values);
    };

    return (
        <div>
            {success ? (
                <section>
                    <h1 style={{ color: 'green' }}>Registration Success!</h1>
                </section>
            ) : (
                <section>
                    <p
                        className={errMsg ? 'errmsg' : 'offscreen'}
                        style={{ color: 'red' }}
                        aria-live="assertive"
                    >
                        {errMsg}
                    </p>
                    <Form
                        name="normal_login"
                        className="registration-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            labelCol={{ span: 24 }}
                            label="Full Name"
                            name="fullName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Full Name!',
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                style={{ maxWidth: 500, borderRadius: '5px' }}
                                placeholder="Enter Full Name"
                            />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email!',
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                style={{ maxWidth: 500 }}
                                placeholder="Enter Email Address"
                            />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            label="School"
                            name="school"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Select a school',
                                },
                            ]}
                        >
                            <Select
                                size="large"
                                placeholder="Select a School"
                                style={{ maxWidth: 500, borderRadius: '5px' }}
                                value={SelectOption}
                                onChange={onSecondCityChange}
                            >
                                {SelectOption.map((option) => (
                                    <Option key={option.value}>
                                        {option.label}
                                    </Option>
                                ))}
                            </Select>
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
                                style={{ maxWidth: 500, borderRadius: '5px' }}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                style={{ width: 500, marginTop: 20 }}
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                Sign Up
                            </Button>
                            {/* Or <a href="">register now!</a> */}
                        </Form.Item>
                    </Form>
                </section>
            )}
        </div>
    );
};

export default SignUpForm;
