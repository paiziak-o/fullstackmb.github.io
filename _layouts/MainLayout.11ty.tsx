import { IndexPage } from '@components/IndexPage.11ty';
import { ViewProps } from "../eleventy";
import { SlackPage } from '@components/SlackPage.11ty';
import { Header } from '@components/partials/common/Header';
import { Footer } from '@components/partials/common/Footer';


export function MainLayout({ content, title, events, version, component = 'index' }: ViewProps): JSX.Element {

  const getComponent = () => {
    switch (component) {
      case "index":
        return <IndexPage events={events} version={version} />;
      case "slack":
        return <SlackPage version={version} />;
      default:
        return <IndexPage events={events} version={version} />;
    }
  };


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
        <Header />
        {getComponent()}

        <Footer version={version} />
        <script type="module" src="/assets/client-bundle.js"></script>
      </body>
    </html>
  );
}

export const render = MainLayout;
