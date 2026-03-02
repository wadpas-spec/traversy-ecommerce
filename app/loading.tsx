import Image from "next/image"
import loader from "@/assets/loader.gif"

const LoadingPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Image
        src={loader}
        alt="Loading..."
      />
    </div>
  )
}

export default LoadingPage
