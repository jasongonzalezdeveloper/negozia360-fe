import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  locale: string;
  messages: Record<string, string>;
}

export default function I18nProvider({ children, locale, messages }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
