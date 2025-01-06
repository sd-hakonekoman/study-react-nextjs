import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 Not Found</h1>
      <p className={styles.text}>お探しのページは見つかりませんでした。</p>
    </div>
  );
}
