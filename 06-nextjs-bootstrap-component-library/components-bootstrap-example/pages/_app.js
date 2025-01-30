/*
This file is the entry point for all pages in our application

We're going to import our react bootstrap into this file
*/
import 'bootstrap/dist/css/bootstrap.min.css';

// we have a local styles file.
// is we're going to change this file.
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
