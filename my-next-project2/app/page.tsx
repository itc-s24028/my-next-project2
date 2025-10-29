import Image from "next/image";
import styles from "./page.module.css";

import newsList from "@/app/_components/NewsList"
import ButtonLink from "./_components/ButtonLink";
import { getNewsList, News } from "./_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import { TOP_NEWS_LIMIT } from "./_constants";

type Props = {
    news: News[];
};

export const revalidate = 60;

export default async function Home() {
    const data = await getNewsList({ limit: TOP_NEWS_LIMIT });
    return (
        <>
            <section className={styles.top}>
            <div>
                <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
                <p className={styles.description}>
                私達は市場をリードしているグローバルテックカンパニーです。
                </p>
            </div>
            <img
                className={styles.bgimg}
                src="/img-mv.jpg"
                alt=""
                width={4000}
                height={1200}
            />
            </section>
            <section className={styles.news}>
                <h2 className={styles.newsTitle}>News</h2>
                <NewsList news={data.contents} />
                <div className={styles.newsLink}>
                    <ButtonLink href="/news">もっと見る</ButtonLink>
                </div>
            </section>
        </>
    );
}