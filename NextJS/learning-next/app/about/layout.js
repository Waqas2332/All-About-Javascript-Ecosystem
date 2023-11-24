import { Inter } from "next/font/google";
import styles from "./styles.module.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "About App",
  description: "Generated by create next app",
};

export default function AboutLayout({ children }) {
  return (
    <>
      <nav>About Nav</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
