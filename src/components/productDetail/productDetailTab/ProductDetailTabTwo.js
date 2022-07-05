import { Collapse } from "antd";

import ProductDetailReviewItem from "../elements/ProductDetailReviewItem";

const { Panel } = Collapse;

export default function ProductDetailTabTwo() {
  return (
    <div className="product-detail-tab-two">
      <Collapse accordion defaultActiveKey="1">
        <Panel header="Description" key="1" showArrow={false}>
          <div className="product-detail-tab-item -description">
            <p className="tab-des--bold">
              Nam tempus turpis at metus scelerisque placerat nulla deumantos
              solicitud felis.
            </p>
            <h5 className="tab-title">Products Infomation</h5>
            <p className="tab-des">
              A Pocket PC is a handheld computer, which features many of the
              same capabilities as a modern PC. These handy little devices allow
              individuals to retrieve and store e-mail messages
            </p>
            <h5 className="tab-title">Material used</h5>
            <p className="tab-des">
              Polyester is deemed lower quality due to its none natural
              quality’s. Made from synthetic materials, not natural like wool.
              Polyester suits become creased easily and are known for not being
              breathable.
            </p>
          </div>
        </Panel>
        <Panel header="Products Infomation" key="2" showArrow={false}>
          <div className="product-detail-tab-item -review">
            <ProductDetailReviewItem />
            <ProductDetailReviewItem />
          </div>
        </Panel>
        <Panel header="Material used" key="3" showArrow={false}>
          <div className="product-detail-tab-item -info">
            <table>
              <tr>
                <td>Outer Shell</td>
                <td>100% polyester</td>
              </tr>
              <tr>
                <td>Lining</td>
                <td>100% polyurethane</td>
              </tr>
              <tr>
                <td>Size</td>
                <td>S, M, L, XL</td>
              </tr>
              <tr>
                <td>Colors</td>
                <td>Grey, Red, Blue, Black</td>
              </tr>
              <tr>
                <td>Care</td>
                <td>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/shop/shop-detail/care-icons.png"
                    }
                    alt="Care icon"
                  />
                </td>
              </tr>
            </table>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}
