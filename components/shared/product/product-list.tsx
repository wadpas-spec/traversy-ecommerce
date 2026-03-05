import { log } from "console"

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any
  title?: string
  limit?: number
}) => {
  const limitedData = limit ? data.slice(0, limit) : data

  return (
    <div className="my-10">
      <h2 className="mb-4 font-bold">{title}</h2>
      {limitedData.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {limitedData.map((product: any) => (
            <div
              key={product.slug}
              className="rounded-lg border p-4">
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No products found</p>
        </div>
      )}
    </div>
  )
}

export default ProductList
