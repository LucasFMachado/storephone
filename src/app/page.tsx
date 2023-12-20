import { About, Features, Home, Products } from './components'

export default function Page() {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="product">
        <Products />
      </section>
    </>
  )
}
