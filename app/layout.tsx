
  

import "./globals.css";
import Head from "./head";
export default function RootLayout({ children } : { children: React.ReactNode}) {
      return (
        <html>
          <Head />
          <body>
            <h1>layout file</h1>
            {children}
          </body>
        </html>
      );
    }
