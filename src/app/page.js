import Grid from "@/components/grid/grid";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}} >
      <Navbar/>
      <Grid/>
    </main>
  );
}
