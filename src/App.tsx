import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";
import ahoy from "ahoy.js";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
ahoy.configure({
  urlPrefix: "",
  visitsUrl: "https://usebasin.com/ahoy/visits",
  eventsUrl: "https://usebasin.com/ahoy/events",
  page: "601eebd19742" /* Use your form id here */,
  platform: "Web",
  useBeacon: true,
  startOnReady: true,
  trackVisits: true,
  cookies: true,
  cookieDomain: null,
  headers: {},
  visitParams: {},
  withCredentials: false,
});
// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
ahoy.trackView();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
ahoy.trackSubmits("#form");

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
