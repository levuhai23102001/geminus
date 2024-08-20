import { useTranslations } from "next-intl";
export default function Home() {
    const i18n = useTranslations();

    return (
        <div>
            <div>{i18n("Home.title")}</div>
        </div>
    );
}
