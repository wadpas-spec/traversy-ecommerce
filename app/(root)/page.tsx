import sampleData from "@/db/sample-data"
import ProductList from "@/components/shared/product/product-list"
import { getlatestProducts } from "@/lib/actions/product.actions"

export const metadata = {
  title: "Home",
}

const Homepage = async () => {
  const latestProducts = await getlatestProducts()

  return (
    <ProductList
      data={latestProducts}
      title="Featured Products"
    />
  )
}

export default Homepage
