import About from "@/components/About";
import Banner from "@/components/Banner";
import Book from "@/components/Book";
import Brand from "@/components/Brand";
import Investor from "@/components/Investor";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Banner />
      {/* <About /> */}
      <Team />
      <Brand />
      <Investor />
      <Book />
    </>
  );
}
