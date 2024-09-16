import Head from "next/head";
import Script from "next/script";
import { Fragment } from "react";

function Header(props) {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={`SmarterBot - ${props.description || ""}`}
        />
        <meta name="author" content="Smarter ChatBOT" />
        <title>SmarterBot – {props.title}</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`SmarterChatBOT - ${props.title}`} />
        <meta
          property="og:description"
          content="SMARTERBOT.cl Adopción de Inteligencia Artificial en sistemas SCM (Supply Chain Management) 🚀

¡Solo para tiendas con licencias Shopify o Shopify Advanced!"
        />
        <meta
          property="og:image"
          content="https://smarterbot.cl/images/smarterbot-cover.jpg"
        />
        <meta property="og:image:width" content="828" />
        <meta property="og:image:height" content="450" />
        <meta property="og:url" content="https://smarterbot.cl" />
        <meta property="og:site_name" content="SmarterBot" />
        <meta property="fb:app_id" content="" />
        <link
          rel="icon"
          type="image/png"
          href="/images/smarterbot-favicon-16.png"
          sizes="16x16"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/images/smarterbot-favicon-32.png"
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/images/smarterbot-favicon-96.png"
          sizes="96x96"
        ></link>
        <link rel="apple-touch-icon" href="images/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="images/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="images/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="images/touch-icon-ipad-retina.png"
        />
      </Head>{" "}
      {/* replace this with GTAG IDS 
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MRN2ZCR8ZP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MRN2ZCR8ZP');
        `}
      </Script>{" "}
      <Script
        src="https://www.googletagmanager.com/gtm.js?id=GTM-WS4L7S5"
        strategy="afterInteractive"
      />*/}
    </Fragment>
  );
}

export default Header;
