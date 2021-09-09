import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title, desciption, keywords }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="desciption" content={desciption} />
      </Head>
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Som3a's Facebook Clone",
  desciption: "This is a Facebook clone created by som3a",
};
