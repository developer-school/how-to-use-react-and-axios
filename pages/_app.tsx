import type { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import toast from "react-hot-toast";
import "../styles/globals.css";

const errors: {
  [key: string]: string;
} = {
  "1": "A person with that ID does not exist.",
};

function MyApp({ Component, pageProps }: AppProps) {
  const { query, replace } = useRouter();
  const error = query.error as string | undefined;

  useEffect(() => {
    if (error) {
      toast.error(errors[error]);

      replace("/");
    }
  }, [error]);

  return <Component {...pageProps} />;
}

export default MyApp;
