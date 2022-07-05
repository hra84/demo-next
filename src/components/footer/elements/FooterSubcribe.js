import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Form, Input, Button, Checkbox } from "antd";

const CustomForm = React.memo(({ status, message, onValidated }) => {
  const onFinish = (value) => {
    console.log("Success:", value);
    value &&
      onValidated({
        EMAIL: value.email,
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="footer-subcribe__form"
      >
        <Form.Item
          noStyle={true}
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="Your email" />
        </Form.Item>
        <Form.Item noStyle={true}>
          <Button type="link" htmlType="submit">
            SUBSCRIBE
          </Button>
        </Form.Item>
      </Form>
      {status === "sending" && <div style={{ color: "blue" }}> sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <br />
    </div>
  );
});

export default function FooterSubcribe({ url }) {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
}
