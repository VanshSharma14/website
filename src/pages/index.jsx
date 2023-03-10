import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import homepage from "@/styles/Homepage.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        />
      </Head>
      <main>
        <div className={homepage.page}>
          <center>
            <Image
              className={homepage.logo}
              src="/static/homepageLogo.png"
              alt="logo"
              height={203 * 1.5}
              width={600}
              priority
            />
            <div className={homepage.scrollContainer}>
              Scroll Down<br></br>
              <Image 
                className={homepage.svg}
                src="/static/arrow1.svg"
                alt="arrows"
                width={30} 
                height={30} 
                
                priority
              />
            </div>
          </center>
        </div>
      </main>
    </>
  );
}
