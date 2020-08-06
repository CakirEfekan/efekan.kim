import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Efekan ÇAKIR";
export const siteTitle = "Efekan Çakır'ın Web Sitesi";

function Layout({ children, dir, pageTitle }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Efekan Çakır'ın Web Sitesi" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {dir == "home" ? (
          <>
            <div className={`${styles.imageFrame} ${utilStyles.borderCircle}`}>
              <img
                src="/images/profile-image.png"
                className={`${styles.headerHomeImage}`}
                alt={name}
              />
            </div>

            <h1 className={utilStyles.heading2Xl}>{pageTitle}</h1>
          </>
        ) : (
          <>
            <h1 className={utilStyles.heading2Xl}>{pageTitle}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      <footer>
        <p>
          <small>
            <center>
              -
              <a
                target="_blank"
                title="@cakirefekan"
                href="https://twitter.com/cakirefekan"
              >
                twitter
              </a>{" "}
              -{" "}
              <Link href={"/library"}>
                <a title="kitaplığım">kitaplığım</a>
              </Link>{" "}
              &nbsp; -{" "}
              <a
                target="_blank"
                title="@cakirefekar_"
                href="https://instagram.com/cakirefekar_"
              >
                instagram
              </a>{" "}
              -{" "}
              <a
                target="_blank"
                title="@cakirefekan"
                href="https://linkedin.com/in/cakirefekan"
              >
                linkedin
              </a>{" "}
              -{" "}
              <a
                target="_blank"
                title="@cakirefekan"
                href="https://github.com/cakirefekan"
              >
                github
              </a>{" "}
              -{" "}
              <a
                target="_blank"
                title="@cakirefekan"
                href="https://issuu.com/cakirefekan"
              >
                issuu
              </a>{" "}
              -{" "}
              <a
                target="_blank"
                title="@cakirefekan"
                href="https://www.cakirefekan.com"
              >
                blog
              </a>{" "}
            </center>
          </small>
        </p>
        {!dir && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Anasayfa</a>
            </Link>
          </div>
        )}
      </footer>{" "}
      <style global jsx>{`
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100vw;
          height: 100vh;
          background: #fffefc;
        }
      `}</style>
    </div>
  );
}
export default Layout;
