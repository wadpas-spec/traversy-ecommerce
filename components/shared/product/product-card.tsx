import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import ProductPrice from "@/components/shared/product/product-price"

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="items-center p-0">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={300}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="mb-2 text-lg font-bold">{product.brand}</h3>
        <Link
          href={`/products/${product.slug}`}
          className="text-sm text-gray-600 hover:underline">
          {product.name}
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <p>{product.rating} Stars</p>
          {product.stock > 0 ? (
            <p className="mt-2 text-lg font-bold">
              <ProductPrice
                value={Number(product.price)}
                classname="text-orange-800"
              />
            </p>
          ) : (
            <p className="text-red-600">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
