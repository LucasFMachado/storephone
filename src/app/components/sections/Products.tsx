import { ProductCard } from '..'

export function Products() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-5 lg:px-32">
      <h1 className="text-4xl font-semibold mt-24 lg:mt-14 text-center lg:text-start">
        Our products
      </h1>
      <p className="mt-2 text-center lg:text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ad
        nemo officia earum deserunt labore.
      </p>
      <div className="flex flex-col lg:flex-row gap-4 mt-4">
        <ProductCard image="/images/product1.png" amount="$699" />
        <ProductCard image="/images/product2.png" amount="$599" />
        <ProductCard image="/images/product3.png" amount="$499" />
        <ProductCard image="/images/product4.png" amount="$399" />
      </div>
    </div>
  )
}
