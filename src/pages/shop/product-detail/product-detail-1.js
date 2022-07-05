import LayoutOne from "../../../components/layouts/LayoutOne";
import { capitalizeFirstLetter } from "../../../common/utils";
import productData from "../../../data/product.json";
import ProductDetailOne from "../../../components/productDetail/ProductDetailOne";

export default function pid() {
  return (
    <LayoutOne title={productData[0].name} clearSpaceTop>
      <ProductDetailOne data={productData[0]} />
    </LayoutOne>
  );
}
