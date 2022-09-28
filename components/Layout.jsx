import Footer from "./Footer";
import Header from "./Header";


export default function Layout({ children }) {
  return (
    <>
      <div className="main-bg flex w-full flex-col justify-center items-center  ">
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </div>

    </>
  )
}