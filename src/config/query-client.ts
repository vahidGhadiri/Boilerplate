import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      retryOnMount: true,
    },
  },
});

export const DEFAULT_STALE_TIME = 300_000;
