import { PrismaClient, Prisma } from "../lib/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import "dotenv/config"

import sampleData from "./sample-data"

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
})

async function main() {
  // await prisma.product.create({
  //   data: {
  //     name: "Sample Product",
  //     slug: "sample-product",
  //     category: "Sample Category",
  //     images: ["/images/sample-products/p1-1.jpg"],
  //     price: 19.99,
  //     brand: "Sample Brand",
  //     rating: 4.5,
  //     numReviews: 10,
  //     description: "This is a sample product for seeding the database.",
  //     stock: 5,
  //     isFeatured: true,
  //     banner: "banner-1.jpg",
  //   },
  // })

  await prisma.product.deleteMany({})

  console.log("sampleData")

  await prisma.product.createMany({
    data: sampleData.products,
  })
  console.log("Database seeded successfully.")
}

main()
