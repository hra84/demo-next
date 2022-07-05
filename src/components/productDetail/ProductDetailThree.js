import { Row, Col, Breadcrumb } from "antd";
import React from "react";

import Container from "../other/Container";
import ProductDetailContentOne from "./productDetailContent/ProductDetailContentOne";
import ProductDetailTabOne from "./productDetailTab/ProductDetailTabOne";
import ProductDetailImageThree from "./productDetailImage/ProductDetailImageThree";

function ProductDetailLayoutThree({ data }) {
  return (
    <div className="product-detail-three">
      <Container>
        <Breadcrumb className="product-detail-breadcrumb" separator=">">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Product</Breadcrumb.Item>
          <Breadcrumb.Item>{data.name}</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <ProductDetailImageThree imageData={data.images} />
      <Container>
        <Row justify="center">
          <Col span={24} md={12} lg={10}>
            <ProductDetailContentOne
              showCountdown
              data={data}
              quantityControllerNoRound
            />
          </Col>
        </Row>
        <ProductDetailTabOne />
      </Container>
    </div>
  );
}

export default React.memo(ProductDetailLayoutThree);
