import LayoutOne from "../../../components/layouts/LayoutOne";
import productData from "../../../data/product.json";
import ProductDetailThree from "../../../components/productDetail/ProductDetailThree";

export default function product() {
  console.log();
  return (
    <LayoutOne title={productData[0].name} clearSpaceTop>
      <ProductDetailThree data={productData[0]} />
    </LayoutOne>
  );
}
