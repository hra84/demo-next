import LayoutOne from "../../../components/layouts/LayoutOne";
import productData from "../../../data/product.json";
import ProductDetailTwo from "../../../components/productDetail/ProductDetailTwo";

export default function product() {
  console.log();
  return (
    <LayoutOne title={productData[0].name} clearSpaceTop>
      <ProductDetailTwo data={productData[0]} />
    </LayoutOne>
  );
}
