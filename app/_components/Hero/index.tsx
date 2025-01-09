import Image from "next/image";
import styles from "./index.module.css";
import bgImgSrc from "@/public/img-mv.jpg";

type Props = {
  title?: string;
  sub?: string;
  alt?: string;
};

export default function Hero({
  title = "テクノロジーの力で世界を変える",
  sub = "私達はテックカンパニーです。",
  alt = "背景画像",
}: Props) {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{sub}</p>
      </div>
      <Image
        className={styles.bgimg}
        src={bgImgSrc}
        alt={alt}
        width={bgImgSrc.width}
        height={bgImgSrc.height}
        quality={80}
      />
    </section>
  );
}
