import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";
import SearchForm from "../SearchForm";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="search">
          <SearchForm />
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
