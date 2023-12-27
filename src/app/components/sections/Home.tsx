import { Button } from '..'

export function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center md:flex-row items-center lg:justify-between responsive">
      <div className="w-full lg:w-2/4 space-y-4 mt-10">
        <h1 className="text-5xl font-semibold leading-tight">
          Discover next-level audio experiences
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut
          eaque accusamus asperiores maxime, quibusdam ea. Magnam commodi sit
          voluptates.
        </p>
        <Button label="Order Now" />
      </div>
      <div className=" mt-10">
        <img src="/images/hero.png" alt="Hero image" />
      </div>
    </div>
  )
}
