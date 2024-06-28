import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesUrl },
];


export default function IndexRoute() {
    return <div>Hello Index Route</div>
}

/*
    This is the index route file. Thanks to React Router's nested routing support,
    this index route is a child of app/root.tsx route.
*/
