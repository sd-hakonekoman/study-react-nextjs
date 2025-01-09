import styles from "./page.module.css";

import ButtonLink from "./_components/ButtonLink";
import NewsList from "./_components/NewsList";
import Hero from "./_components/Hero";

import { News } from "./_libs/microcms";

export default function Home() {
  const data: { contents: News[] } = {
    contents: [
      {
        id: "1",
        title: "渋谷にオフィスを移転しました",
        category: {
          name: "更新情報",
        },
        publishedAt: "2023-05-19T00:00:00.000Z",
        createdAt: "2023-05-19T00:00:00.000Z",
      },
      {
        id: "2",
        title: "当社のCEOが業界リーダーTOP30に選出されました",
        category: {
          name: "更新情報",
        },
        publishedAt: "2023-05-19T00:00:00.000Z",
        createdAt: "2023-05-19T00:00:00.000Z",
      },
      {
        id: "3",
        title: "テストの記事です",
        category: {
          name: "更新情報",
        },
        publishedAt: "2023-04-19T00:00:00.000Z",
        createdAt: "2023-04-19T00:00:00.000Z",
      },
    ],
  };

  const sliceData = data.contents.slice(0, 2);
  // const sliceData: News = []

  return (
    <>
      <Hero />
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
