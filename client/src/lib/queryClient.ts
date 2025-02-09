import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        try {
          const response = await fetch(queryKey[0] as string, {
            credentials: "include",
          });

          if (!response.ok) {
            const errorMessage = `${response.status}: ${response.statusText}`;
            const errorDetails = await response.text();
            throw new Error(errorDetails ? `${errorMessage} - ${errorDetails}` : errorMessage);
          }

          return response.json();
        } catch (error) {
          throw new Error(`Fetch failed: ${error.message}`);
        }
      },
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
