import { cn } from "@/lib/utils"

const ProductPrice = ({
  value,
  classname,
}: {
  value: number
  classname?: string
}) => {
  const stringValue = value.toFixed(2)
  const [integerPart, decimalPart] = stringValue.split(".")
  return (
    <p className={cn("text-2xl", classname)}>
      <span className="align-super text-xs">$</span>
      {integerPart}
      <span className="align-super text-xs">.{decimalPart}</span>
    </p>
  )
}

export default ProductPrice
