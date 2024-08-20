"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { ReactNode } from "react";

type IntlLinkProps = {
    href: string;
    children: ReactNode;
    className?: string;
};

export const IntlLink = (
    { href, children, className }: IntlLinkProps,
    { ...props }
) => {
    const locale = useLocale();
    const localizedHref = `/${locale}${href}`;

    return (
        <Link href={localizedHref} className={className} {...props}>
            {children}
        </Link>
    );
};
