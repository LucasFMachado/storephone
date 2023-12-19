import { About, Features, Home } from './components'

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
    </>
  )
}
