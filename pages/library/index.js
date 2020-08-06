import Layout from "../../components/layout";
import convert from "xml-js";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";

//import fs from "fs";
export default function Library({ books }) {
  return (
    <Layout pageTitle={`Kitaplığım`}>
      <Head>
        <title>Efekan Çakır'ın Web Sitesi | Kitaplık</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <blockquote>
          <p className={utilStyles.small}>
            Burada 22. yaşımın son zamanalarından itibaren okuduğum kitaplar yer
            almaktadır. goodreads hesabımı görüntülemek için{" "}
            <a
              target="_blank"
              href="https://www.goodreads.com/cakirefekan"
              title="@cakirefekan"
            >
              tık
            </a>
          </p>
        </blockquote>
      </section>

      <ul>
        <h3>Okuyor Olduklarım</h3>
        {books.dataReading.GoodreadsResponse.books.book.map((bookReading) => (
          <li key={bookReading.id._text}>
            {bookReading.title._text}{" "}
            <span className={utilStyles.small}>
              <a target="_blank" href={`${bookReading.link._text}`}>
                tık
              </a>
            </span>
          </li>
        ))}
        <h3>Okuduğum Kitaplar</h3>
        {books.dataRead.GoodreadsResponse.books.book.map((bookRead) => (
          <li key={bookRead.id._text}>
            {bookRead.title._text}{" "}
            <span className={utilStyles.small}>
              <a target="_blank" href={`${bookRead.link._text}`}>
                tık
              </a>
            </span>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  async function getBooks(shelf) {
    const goodreads_key = process.env.GOODREADS_API_KEY;
    const goodreads_uid = process.env.GOODREADS_USER_ID;
    const data = await fetch(
      `https://www.goodreads.com/review/list/${goodreads_uid}.xml?key=${goodreads_key}&shelf=${shelf}`
    );
    const xml = await data.text();

    const jsonData = await convert.xml2json(xml, {
      compact: true,
      spaces: 4,
      ignoreComment: true,
      alwaysChildren: true,
    });
    return await JSON.parse(jsonData);
  }
  const shelfRead = "read";
  const shelfReading = "currently-reading";
  const dataRead = await getBooks(shelfRead);
  const dataReading = await getBooks(shelfReading);
  /*
  // Save json data as document.json in root folder
  var stream = await fs.createWriteStream("document.json");
  stream.once("open", function (fd) {
    stream.write(jsonData);
    stream.end();
  });
  */
  const books = { dataRead, dataReading };
  return {
    props: {
      books,
    },
  };
}
