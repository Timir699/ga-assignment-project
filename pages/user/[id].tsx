import React, { useEffect, useRef, useState } from 'react';
import { Button, DatePicker, Form, Input, Layout, Menu, Select } from 'antd';
import api from '../../api';
import { Option } from 'antd/lib/mentions';
import { COUNTRIES } from '../../data/countries';
import { TIMEZONES } from '../../data/timeZones';
import moment from 'moment';
import dayjs from 'dayjs';
import { FormInstance, useForm } from 'antd/lib/form/Form';

const { Header, Sider, Content } = Layout;

const dateFormat = 'DD/MM/YYYY';

const UserDetails = () => {
  const formRef = React.createRef<FormInstance>();
  const [userData, setUserData] = useState<any>({});

  const runOneTime = useRef(true);

  const onFinish = (values: any) => {
    let completeDate = new Date(values.birthDay._d);
    const formateDate = dayjs(completeDate).format('DD/MM/YYYY');
    console.log({ values, formateDate });

    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      state: values.state,
      tenantId: 'af3baf1d-7aae-462c-9d1e-051cef459b86',
      timeZone: values.timeZone.value,
      profileData: {
        postalCode: values.postalCode,
      },
      country: values.country.value,
      birthDay: formateDate,
      city: values.city,
      email: values.email,
    };
    console.log(payload);

    const tokenStr = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : '';

    if (tokenStr) {
      const tokenObj =
        typeof tokenStr == 'string' && tokenStr != ''
          ? JSON.parse(tokenStr)
          : { access_token: '' };

      const response = api.profileInformation.profileUpdate(
        tokenObj.access_token,
        payload
      );
      response
        .then((response) => response?.data)
        .then((data) => {
          console.log(data);
        });
    }
  };

  useEffect(() => {
    if (runOneTime.current) {
      runOneTime.current = false;
      const tokenStr = localStorage.getItem('token')
        ? localStorage.getItem('token')
        : '';

      if (tokenStr) {
        const tokenObj =
          typeof tokenStr == 'string' && tokenStr != ''
            ? JSON.parse(tokenStr)
            : { access_token: '' };

        const response = api.profileInformation.profileInfo(
          tokenObj.access_token
        );

        response
          .then((response) => response?.data)
          .then((data) => {
            setUserData(data);
          });
      }
    }
  }, []);

  useEffect(() => {
    console.log(userData);
    formRef.current!.setFieldsValue({
      ...userData,
      birthDay: moment(userData.birthDay),
    });
  }, [userData]);
  return (
    <div className="container">
      <>
        <div className="h-48 w-[100%] bg-slate-100 rounded-md"></div>
        <div>
          <Layout>
            <Sider>
              <div>
                <div className="h-48 w-48 bg-slate-300 rounded-md"></div>
              </div>
              <h2 className="mt-8">Profile Settings</h2>
              <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                  {
                    key: '1',
                    label: 'Personal Info',
                  },
                ]}
              />
            </Sider>
            <Layout>
              <Header
                style={{ height: '200px', borderBottom: '1px solid black' }}
              >
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-3xl">
                      {userData.firstName} {userData.lastName}
                    </h2>
                    <h2 className="text-2xl">{userData.email}</h2>
                  </div>
                  <div className="mt-24">
                    <Button>Preview</Button>
                  </div>
                </div>
              </Header>
              <Content style={{ background: '#fff', padding: '20px' }}>
                <Form
                  ref={formRef}
                  name="normal_login"
                  className="login-form"
                  onFinish={onFinish}
                >
                  <div className="flex">
                    <Form.Item
                      labelCol={{ span: 24 }}
                      label="First Name"
                      name="firstName"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your First Name!',
                        },
                      ]}
                    >
                      {userData?.firstName ? (
                        <Input
                          size="large"
                          style={{ maxWidth: 250, borderRadius: '5px' }}
                          placeholder="First Name"
                        />
                      ) : null}
                    </Form.Item>
                    <Form.Item
                      labelCol={{ span: 24 }}
                      label="Last Name"
                      name="lastName"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Last Name!',
                        },
                      ]}
                    >
                      {userData?.lastName ? (
                        <Input
                          size="large"
                          style={{ maxWidth: 250, borderRadius: '5px' }}
                          placeholder="Last Name"
                        />
                      ) : null}
                    </Form.Item>
                  </div>
                  <div className="flex">
                    <Form.Item
                      labelCol={{ span: 24 }}
                      label="State"
                      name="state"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your State!',
                        },
                      ]}
                    >
                      {userData?.state ? (
                        <Input
                          size="large"
                          style={{ maxWidth: 250, borderRadius: '5px' }}
                          placeholder="State"
                        />
                      ) : null}
                    </Form.Item>
                    <Form.Item
                      labelCol={{ span: 24 }}
                      label="City"
                      name="city"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your City!',
                        },
                      ]}
                    >
                      {userData?.city ? (
                        <Input
                          size="large"
                          style={{ maxWidth: 250, borderRadius: '5px' }}
                          placeholder="City"
                        />
                      ) : null}
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      labelCol={{ span: 24 }}
                      label="Postal Code"
                      name="postalCode"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Postal Code!',
                        },
                      ]}
                    >
                      {userData?.profileData?.postalCode ? (
                        <Input
                          size="large"
                          style={{ maxWidth: 250, borderRadius: '5px' }}
                          placeholder="Postal Code"
                        />
                      ) : null}
                    </Form.Item>
                    <Form.Item
                      labelCol={{ span: 24 }}
                      label="Country Name"
                      name="country"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your country!',
                        },
                      ]}
                    >
                      {userData?.country ? (
                        <Select labelInValue style={{ width: 300 }}>
                          {COUNTRIES.map((country) => (
                            <Option key={country.code} value={country.code}>
                              {country.name}
                            </Option>
                          ))}
                        </Select>
                      ) : null}
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      labelCol={{ span: 24 }}
                      label="Time Zone"
                      name="timeZone"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Time Zone!',
                        },
                      ]}
                    >
                      {userData?.timeZone ? (
                        <Select labelInValue style={{ width: 300 }}>
                          {TIMEZONES.map((timezone) => (
                            <Option
                              key={timezone.timeZoneId.toString()}
                              value={timezone.value.toString()}
                            >
                              {timezone.text}
                            </Option>
                          ))}
                        </Select>
                      ) : null}
                    </Form.Item>
                    <Form.Item
                      labelCol={{ span: 24 }}
                      label="Birthday"
                      name="birthDay"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Birthday!',
                        },
                      ]}
                    >
                      <DatePicker format={dateFormat} />
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
                      {userData?.email ? (
                        <Input
                          size="large"
                          style={{ maxWidth: 250, borderRadius: '5px' }}
                          placeholder="Email"
                          type="email"
                        />
                      ) : null}
                    </Form.Item>
                  </div>
                  <Button htmlType="submit" className="ml-4" type="primary">
                    Update
                  </Button>
                </Form>
              </Content>
            </Layout>
          </Layout>
        </div>
      </>
    </div>
  );
};

export default UserDetails;
