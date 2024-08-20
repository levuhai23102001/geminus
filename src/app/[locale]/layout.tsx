import type { Metadata } from "next";
import { Josefin_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../../utils/ThemeProvider";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Toaster } from "@/components/ui/sonner";
import StoreProvider from "@/StoreProvider";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-Josefin",
});

const locales = ["en", "vn"];

type RootLayoutProps = {
    children: React.ReactNode;
    params: { locale: "en" | "vn" };
};

export const metadata: Metadata = {
    title: "Geminus",
    description:
        "Discover amazing photos, and create your own with AI Generator.",
};

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<RootLayoutProps>) {
    if (!locales.includes(locale as any)) notFound();

    const messages = useMessages();

    return (
        <html lang={locale}>
            <body
                className={`${poppins.variable} ${josefin.variable} bg-white bg-no-repeat dark:bg-black`}
            >
                <StoreProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <NextIntlClientProvider
                            locale={locale}
                            messages={messages}
                        >
                            {children}
                        </NextIntlClientProvider>
                        <Toaster />
                    </ThemeProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
