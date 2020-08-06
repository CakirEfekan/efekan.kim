import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

function Home() {
  return (
    <Layout dir={`home`} pageTitle={`Efekan ÇAKIR`}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Öğrenci: Mimarlık/Bilgisayar Mühendisliği
          <br />
          <small>Student: Architecture/Computer Engineering</small>
        </p>
      </section>
    </Layout>
  );
}
export default Home;
