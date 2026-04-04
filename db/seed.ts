import "dotenv/config"
import prisma from "@/lib/prisma"
import sampleData from "./sample-data"

async function main() {
  await prisma.product.deleteMany({})

  console.log("sampleData")

  await prisma.product.createMany({
    data: sampleData.products,
  })
}

main()
