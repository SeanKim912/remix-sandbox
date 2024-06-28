import { LiveReload, Outlet, Links } from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>Remix Sandbox</title>
        <Links />
        {/*
          Linking the css file in styles from the _index.tsx file. Note that the styling will NOT
          appear in the other routes unless linked similarly, allowing CSS files to be cached long-term
          and be naturally code-split. Prevents unexpected CSS clashes!
        */}
      </head>
      <body>
        Whaazzzuuuppppp
        <Outlet />
        {/*
          This component renders child route elements,
          if there is one (index route). Essential!
        */}
        <LiveReload />
        {/*
          LiveReload component is useful during development to auto-refresh browser
          whenever you make changes.
        */}
      </body>
    </html>
  )
}
