import { getRequestConfig } from "next-intl/server";

const locale = "en";

export default getRequestConfig(async () => {
  return {
    locale,
    messages: (await import(`./_messages/${locale}.json`)).default,
  };
});
