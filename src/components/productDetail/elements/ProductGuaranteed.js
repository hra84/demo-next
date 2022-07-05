import { Divider } from "antd";

export default function ProductGuaranteed() {
  return (
    <div className="product-detail-guaranteed">
      <Divider>Guaranteed Safe Checkout</Divider>
      <img
        src={
          process.env.PUBLIC_URL +
          "/assets/images/shop/shop-detail/guaranteed.png"
        }
        alt="Guaranteed"
      />
    </div>
  );
}
