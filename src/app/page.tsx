import { About, Contact, Faq, Features, Home, Products } from './components'

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
      <section id="contact">
        <Contact />
      </section>
      <section id="faq">
        <Faq />
      </section>
    </>
  )
}
