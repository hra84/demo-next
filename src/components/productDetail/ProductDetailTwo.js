import { Row, Col, Breadcrumb } from "antd";
import React from "react";

import Container from "../other/Container";
import ProductDetailContentOne from "./productDetailContent/ProductDetailContentOne";
import ProductDetailTabTwo from "./productDetailTab/ProductDetailTabTwo";
import ProductDetailImageTwo from "./productDetailImage/ProductDetailImageTwo";

function ProductDetailLayoutTwo({ data }) {
  return (
    <div className="product-detail-two">
      <Container>
        <Breadcrumb className="product-detail-breadcrumb" separator=">">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Product</Breadcrumb.Item>
          <Breadcrumb.Item>{data.name}</Breadcrumb.Item>
        </Breadcrumb>
        <Row gutter={70}>
          <Col span={24} md={10} lg={14}>
            <ProductDetailImageTwo imageData={data.images} />
          </Col>
          <Col span={24} md={14} lg={10}>
            <ProductDetailContentOne data={data} quantityControllerNoRound />
            <ProductDetailTabTwo />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default React.memo(ProductDetailLayoutTwo);
