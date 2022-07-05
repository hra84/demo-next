import { useRouter } from "next/router";

import LayoutOne from "../../components/layouts/LayoutOne";
import { capitalizeFirstLetter } from "../../common/utils";
import { getProductsBySlug } from "../../common/shopUtils";
import productData from "../../data/product.json";
import ProductDetailOne from "../../components/productDetail/ProductDetailOne";

export default function pid() {
  const router = useRouter();
  const { slug } = router.query;
  const foundProduct = getProductsBySlug(productData, slug);
  return (
    <LayoutOne
      title={foundProduct && capitalizeFirstLetter(foundProduct.name)}
      clearSpaceTop
    >
      {foundProduct && <ProductDetailOne data={foundProduct} />}
    </LayoutOne>
  );
}
