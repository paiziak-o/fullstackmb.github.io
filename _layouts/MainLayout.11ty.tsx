import { IndexPage } from "@components/IndexPage.11ty";
import { ViewProps } from "../eleventy";


export function MainLayout({ content, title, events, version }: ViewProps): JSX.Element {
  return (
    <html lang="en">
       
      <head>
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  
        <title>{title}</title>
        <link rel="stylesheet" type="text/css" href="/src/styles/globals.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700" type="text/css" />
      </head>
      <body>

        <IndexPage events={events} version={version} />
      </body>
    </html>
  );
}

export const render = MainLayout;
