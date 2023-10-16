import About from "./about";
import FirstPage from "./firstpage";
import Footer from "./footer";
import Header from "./header";

export default function Home() {
  return (
    <div className="h-full w-screen bg-gradient-to-br from-[#4C3F99] to-[#0D1635] flex flex-col ">
      <header>
        <Header />
      </header>

      <main>
        <FirstPage />
        <About />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
