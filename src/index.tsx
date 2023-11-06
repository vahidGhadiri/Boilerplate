import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { IntlProvider } from "react-intl";
import ReactDOM from "react-dom/client";

import { ErrorBoundary } from "@components";
import { queryClient } from "@config";
import { Intl } from "@constants";
import { App } from "@router";

import fa from "./i18n/compiled-lang/fa.json";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <IntlProvider
    locale={Intl.LOCALES.PERSIAN}
    defaultLocale={Intl.LOCALES.PERSIAN}
    messages={fa}
  >
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  </IntlProvider>
);
