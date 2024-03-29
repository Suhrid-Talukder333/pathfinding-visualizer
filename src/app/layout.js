import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./contextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pathfinding Visualizer",
  description: "Pathfinding Visualizer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
