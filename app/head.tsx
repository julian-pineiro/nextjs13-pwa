

export default function Head() {
  return (
      <>
          <title>PWA</title>
          <link rel="manifest" href="/manifest.json" />
          <meta name="application-name" content="PWA" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="PWA" />
          <meta name="description" content="PWA" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/icon-512x512.png"
          />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#FFFFFF" />

          <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/icons/icon-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="256x256"
            href="/icons/icon-256x256.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="384x384"
            href="/icons/icon-384x384.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="/icons/icon-512x512.png"

          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/icons/icon-512x512.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icons/favicon-192x192.png"
          />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#FFFFFF"
          />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
          <meta property="og:title" content="PWA" />
          <meta property="og:description" content="PWA" />
          <meta property="og:site_name" content="PWA" />
      </>
  )
}