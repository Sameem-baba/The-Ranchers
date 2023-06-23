import { Metadata } from "next";
import Header from "./Header";
import Banner from "./Banner";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
    </main>
  );
}
