import { Button } from '..'

interface ProductCardProps {
  image: string
  amount: string
}

export function ProductCard({ image, amount }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 bg-slate-100 w-full lg:w-2/4 p-5 rounded-lg cursor-pointer hover:shadow-[rgba(0,0,0,0.24)_0px_3px_8px] transition duration-300 ease-in-out">
      <img src={image} alt="Product image" />
      <h1>Latest Headphones</h1>
      <h3 className="font-semibold text-3xl">{amount}</h3>
      <Button label="Buy Now" />
    </div>
  )
}
