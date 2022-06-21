import React from 'react';
import { Button, Form, Input, Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout;

const onFinish = (value: any) => {
  console.log(value);
};

const User = () => {
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
                    <h2>Boss osm</h2>
                    <h4>location: Dhaka</h4>
                  </div>
                  <div className="mt-24">
                    <Button>Preview</Button>
                    <Button htmlType="submit" className="ml-4" type="primary">
                      Update
                    </Button>
                  </div>
                </div>
              </Header>
              <Content style={{ background: '#fff', padding: '20px' }}>
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                >
                  <div className="flex">
                    <Form.Item
                      labelCol={{ span: 24 }}
                      label="First Name"
                      name="First Name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your First Name!',
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        style={{ maxWidth: 250, borderRadius: '5px' }}
                        placeholder="First Name"
                      />
                    </Form.Item>
                    <Form.Item
                      labelCol={{ span: 24 }}
                      label="Last Name"
                      name="Last Name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Last Name!',
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        style={{ maxWidth: 250, borderRadius: '5px' }}
                        placeholder="First Name"
                      />
                    </Form.Item>
                  </div>

                  <Form.Item
                    labelCol={{ span: 24 }}
                    label="One-liner Caption about You"
                    name="About"
                  >
                    <Input
                      size="large"
                      style={{ maxWidth: 500 }}
                      placeholder="Type Here"
                    />
                  </Form.Item>
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

export default User;
