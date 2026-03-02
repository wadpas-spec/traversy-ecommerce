"use client"
import { APP_NAME } from "@/lib/constants"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import notFound from "@/assets/404.png"

const NotFoundPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Image
        src={notFound}
        alt="404 Not Found"
        width={400}
        height={300}
      />
      <h1 className="text-foreground text-6xl">Page Not Found</h1>
      <p className="m-8">The page you are looking for does not exist.</p>
      <Button
        className="mt-2"
        onClick={() => (window.location.href = "/")}>
        Go to {APP_NAME}
      </Button>
    </div>
  )
}

export default NotFoundPage
