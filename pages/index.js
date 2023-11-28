import Head from "next/head";
import { get, toString } from "lodash";
import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";

import styles from "../styles/Home.module.css";

const Home = () => {
  console.log("main_cookie ::::", getCookie("main_cookie"));

  const [mainCookie, setMainCookie] = useState("");

  useEffect(() => {
    setMainCookie(getCookie("main_cookie"));
  }, [getCookie("main_cookie")]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ paddingTop: 30, paddingBottom: 30 }}>
        <h1 className={styles.title}>{"Test Iframe get cookies."}</h1>

        <p
          className={styles.description}
          style={{ color: "blue", marginTop: 5, marginBottom: 5 }}
        >{`:: ${process.env["NEXT_PUBLIC_IFRAME_URL"]} ::`}</p>

        <p
          style={{ marginTop: 5, marginBottom: 10 }}
        >{`my cookie is [main_cookie] : ${mainCookie}`}</p>

        <div style={{ width: "100%", minHeight: 500 }}>
          <iframe
            src={process.env["NEXT_PUBLIC_IFRAME_URL"]}
            title={"description"}
            height={"500px"}
            width={"100%"}
          ></iframe>
        </div>

        {/* <h1 style={{ fontSize: 24 }}>{`Your cookie is = ${getCookie(
          "test"
        )}`}</h1> */}
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
