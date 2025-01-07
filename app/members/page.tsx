import Image from "next/image";
import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: `1`,
      image: {
        url: `/img-member1.jpg`,
        width: 240,
        height: 240,
      },
      name: `デビ`,
      position: `CEO`,
      profile: `グローバルウンタラカンタラ`,
    },
    {
      id: `2`,
      image: {
        url: `/img-member2.jpg`,
        width: 240,
        height: 240,
      },
      name: `えみ`,
      position: `COO`,
      profile: `グローバル企業ウンタラカンタラ`,
    },
    {
      id: `3`,
      image: {
        url: `/img-member3.jpg`,
        width: 240,
        height: 240,
      },
      name: `ジョン`,
      position: `CTO`,
      profile: `技術ウンタラカンタラ`,
    },
  ],
};

export default function Page() {
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                className={styles.image}
                src={member.image.url}
                alt={member.name}
                width={member.image.width}
                height={member.image.height}
                quality={80}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
