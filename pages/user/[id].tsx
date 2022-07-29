import { Button, DatePicker, Form, Input, Layout, Menu, Select } from "antd";
import { Option } from "antd/lib/mentions";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import api from "../../api";
import { COUNTRIES } from "../../data/countrys";
import { TIMEZONES } from "../../data/timeZone";

const { Header, Sider, Content } = Layout;

const dateFormat = "YYYY/MM/DD";
const today = moment();

const onFinish = (value: any) => {
  console.log(value.date);
  let completeDate = new Date(value.date);
  console.log(completeDate);
};

const UserDetails = () => {
  const [userData, setUserData] = useState<any>({});
  const router = useRouter();
  console.log(router.query.id);

  const runOneTime = useRef(true);

  useEffect(() => {
    if (runOneTime.current) {
      runOneTime.current = false;
      const tokenStr = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";

      if (tokenStr) {
        const tokenObj =
          typeof tokenStr == "string" && tokenStr != ""
            ? JSON.parse(tokenStr)
            : { access_token: "" };

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
  const handleChange = (value: any) => {
    console.log(value);
  };

  const [placement, SetPlacement] = useState();

  const placementChange = (e: any) => {
    console.log(e._d);

    // SetPlacement(e.target.value);
  };

  console.log(userData);
  const today = moment();

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
                defaultSelectedKeys={["1"]}
                items={[
                  {
                    key: "1",
                    label: "Personal Info",
                  },
                ]}
              />
            </Sider>
            <Layout>
              <Header
                style={{ height: "200px", borderBottom: "1px solid black" }}
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
              <Content style={{ background: "#fff", padding: "20px" }}>
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
                      name="firstName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your First Name!",
                        },
                      ]}
                    >
                      {userData?.firstName ? (
                        <Input
                          size="large"
                          style={{ maxWidth: 250, borderRadius: "5px" }}
                          placeholder="First Name"
                          defaultValue={userData?.firstName}
                        />
                      ) : null}
                      {/* <h2>{userData?.firstName}</h2> */}
                    </Form.Item>
                    <Form.Item
                      labelCol={{ span: 24 }}
                      label="Last Name"
                      name="lastName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Last Name!",
                        },
                      ]}
                    >
                      {userData?.firstName ? (
                        <Input
                          size="large"
                          style={{ maxWidth: 250, borderRadius: "5px" }}
                          placeholder="Last Name"
                          defaultValue={userData?.lastName}
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
                          message: "Please input your State!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        style={{ maxWidth: 250, borderRadius: "5px" }}
                        placeholder="State"
                      />
                    </Form.Item>
                    <Form.Item
                      labelCol={{ span: 24 }}
                      label="City"
                      name="city"
                      rules={[
                        {
                          required: true,
                          message: "Please input your City!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        style={{ maxWidth: 250, borderRadius: "5px" }}
                        placeholder="City"
                      />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      labelCol={{ span: 24 }}
                      label="Postal Code"
                      name="Postal Code"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Postal Code!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        style={{ maxWidth: 250, borderRadius: "5px" }}
                        placeholder="Postal Code"
                      />
                    </Form.Item>
                    <Form.Item
                      labelCol={{ span: 24 }}
                      label="Country Name"
                      name="country"
                    >
                      <Select
                        labelInValue
                        // defaultValue={}
                        style={{ width: 300 }}
                      >
                        {COUNTRIES.map((country) => (
                          <Option key={country.code} value={country.code}>
                            {country.name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      labelCol={{ span: 24 }}
                      label="Time Zone"
                      name="Time Zone"
                    >
                      <Select
                        labelInValue
                        // defaultValue={}
                        defaultValue={moment()}
                        style={{ width: 300 }}
                      >
                        {TIMEZONES.map((timezone) => (
                          <Option
                            key={timezone.timeZoneId.toString()}
                            value={timezone.value.toString()}
                          >
                            {timezone.text}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      labelCol={{ span: 24 }}
                      label="Birrthday"
                      name="date"
                    >
                      <DatePicker
                        format={dateFormat}
                        onChange={placementChange}
                        placement={placement}
                        defaultValue={moment()}
                      />
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
