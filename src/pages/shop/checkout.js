import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Select,
  Collapse,
} from "antd";
import { useState, useCallback } from "react";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";

import { formatCurrency } from "../../common/utils";
import { calculateTotalPrice } from "../../common/shopUtils";
import LayoutOne from "../../components/layouts/LayoutOne";
import Container from "../../components/other/Container";
import productData from "../../data/product.json";
import Product from "../../components/product/Product";

const paymentData = [
  {
    name: "Direct Bank Transfer",
    content:
      "With so many different ways today to find information online, it can sometimes be hard to know where to go to first.",
  },
  {
    name: "Cheque Payment",
    content:
      "With so many different ways today to find information online, it can sometimes be hard to know where to go to first.",
  },
  {
    name: "PayPal",
    content:
      "With so many different ways today to find information online, it can sometimes be hard to know where to go to first.",
  },
];

export default function checkout() {
  const { Option } = Select;
  const { Panel } = Collapse;
  const router = useRouter();
  const cartState = useSelector((state) => state.cartReducer);
  const globalState = useSelector((state) => state.globalReducer);
  const { currency, locales } = globalState.currency;
  const [paymentMethod, setPaymentMethod] = useState("Direct Bank Transfer");
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const onFinish = (values) => {
    router.push("/shop/checkout-complete");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChoosePayment = useCallback(
    (key) => {
      setPaymentMethod(key);
    },
    [paymentMethod]
  );
  return (
    <LayoutOne title="Checkout">
      <div className="checkout">
        <div className="checkout-top">
          <Container>
            <Row gutter={{ xs: 0, lg: 70 }}>
              <Col span={24} lg={15} xl={17}>
                <h3 className="checkout-title">Billing details</h3>
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  id="checkout-form"
                  layout="vertical"
                  className="checkout-form"
                >
                  <Row gutter={{ xs: 10, sm: 15, md: 30, lg: 70 }}>
                    <Col span={24} md={12}>
                      <Form.Item
                        label="First name"
                        name="firstname"
                        rules={[
                          {
                            required: true,
                            message: "Please input your first name!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                      <Form.Item
                        label="Last name"
                        name="lastname"
                        rules={[
                          {
                            required: true,
                            message: "Please input your last name!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                      <Form.Item
                        label="Provine"
                        name="provine"
                        rules={[
                          {
                            required: true,
                            message: "Please input your provine!",
                          },
                        ]}
                      >
                        <Select>
                          <Option value="male">male</Option>
                          <Option value="female">female</Option>
                          <Option value="other">other</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                      <Form.Item
                        label="City"
                        name="city"
                        rules={[
                          {
                            required: true,
                            message: "Please input your city!",
                          },
                        ]}
                      >
                        <Select>
                          <Option value="male">male</Option>
                          <Option value="female">female</Option>
                          <Option value="other">other</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                      <Form.Item
                        label="Address"
                        name="address"
                        rules={[
                          {
                            required: true,
                            message: "Please input your address!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                      <Form.Item label="Address 2" name="address2">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                      <Form.Item
                        label="Country/States"
                        name="country"
                        rules={[
                          {
                            required: true,
                            message: "Please input your country !",
                          },
                        ]}
                      >
                        <Select>
                          <Option value="male">male</Option>
                          <Option value="female">female</Option>
                          <Option value="other">other</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                      <Form.Item label="Postcode/Zip" name="zip">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                      <Form.Item label="Email" name="email">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                      <Form.Item
                        label="Phone number"
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: "Please input your phone number !",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name="news-subcribe" valuePropName="checked">
                        <Checkbox>
                          I want to receive exclusive discounts and information
                          on the latest Stora trends.
                        </Checkbox>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Col>
              <Col span={24} md={16} lg={9} xl={7}>
                <div className="checkout-total">
                  <h3 className="checkout-title">Your Order</h3>
                  <div className="checkout-total__table">
                    <div className="divider" />
                    <table className="checkout-total__table-calculate">
                      <thead>
                        <tr>
                          <th>Products</th>
                          <th>Subtoal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartState.map((item, index) => (
                          <tr key={index}>
                            <td>
                              {item.name}
                              <span> x {item.cartQuantity}</span>
                            </td>
                            <td>
                              {item.discount
                                ? formatCurrency(
                                    item.price - item.discount,
                                    locales,
                                    currency
                                  )
                                : formatCurrency(item.price, locales, currency)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="divider" />
                    <table className="checkout-total__table-subtotal">
                      <tbody>
                        <tr>
                          <td>Subtotal</td>
                          <td>
                            {formatCurrency(
                              calculateTotalPrice(cartState),
                              locales,
                              currency
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="divider" />
                    <table className="checkout-total__table-shiping">
                      <tbody>
                        <tr>
                          <td>
                            <h5>Shiping</h5>
                            <p>Shiping to India</p>
                          </td>
                          <td>Free</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="checkout-total__table-total">
                      <tbody>
                        <tr>
                          <td>Total</td>
                          <td>
                            {formatCurrency(
                              calculateTotalPrice(cartState),
                              locales,
                              currency
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Collapse
                      className="checkout-payment"
                      accordion
                      defaultActiveKey={paymentMethod}
                      ghost
                      onChange={onChoosePayment}
                    >
                      {paymentData.map((item, index) => (
                        <Panel
                          showArrow={false}
                          header={item.name}
                          key={item.name}
                          onClick={() => setPaymentMethod(item.name)}
                          extra={
                            <i
                              className={
                                paymentMethod === item.name
                                  ? "fas fa-check-square"
                                  : "fal fa-square"
                              }
                            />
                          }
                        >
                          <p>{item.content}</p>
                        </Panel>
                      ))}
                    </Collapse>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="checkout-bottom">
          <Container>
            <h5>Discount When Purchased Together</h5>
            <div className="checkout-related-products">
              <Slider {...settings}>
                {productData.slice(0, 8).map((item, index) => (
                  <div className="slider-item" key={index}>
                    <Product data={item} />
                  </div>
                ))}
              </Slider>
            </div>
          </Container>
        </div>
        <div className="checkout-sticky">
          <Container>
            <div className="checkout-functions">
              <Button className="checkout-functions--shopping">
                <Link href={process.env.PUBLIC_URL + "/"}>
                  <a>Continue Shopping</a>
                </Link>
              </Button>
              <div className="checkout-price-finally">
                <table>
                  <tbody>
                    <tr>
                      <td>{cartState.length} items</td>
                      <td>
                        {formatCurrency(
                          calculateTotalPrice(cartState),
                          locales,
                          currency
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Total:</td>
                      <td>
                        {formatCurrency(
                          calculateTotalPrice(cartState),
                          locales,
                          currency
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Button
                className="checkout-functions--next"
                form="checkout-form"
                key="submit"
                htmlType="submit"
                style={{ marginBottom: 0 }}
              >
                Next Step
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </LayoutOne>
  );
}
