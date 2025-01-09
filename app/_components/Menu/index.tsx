"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import menuIcon from "@/public/menu.svg";
import closeIcon from "@/public/close.svg";
import { useState } from "react";
import cx from "classnames";

const items = [
  {
    id: "1",
    name: "ニュース",
    href: "/news",
  },
  {
    id: "2",
    name: "メンバー",
    href: "/members",
  },
  {
    id: "3",
    name: "お問い合わせ",
    href: "/contact",
  },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          {items.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={cx(styles.button, styles.close)}
          onClick={close}
        >
          <Image
            src={closeIcon}
            alt="閉じる"
            width={closeIcon.width}
            height={closeIcon.height}
          />
        </button>
      </nav>
      <button type="button" className={styles.button} onClick={open}>
        <Image
          src={menuIcon}
          alt="メニュー"
          width={menuIcon.width}
          height={menuIcon.height}
        />
      </button>
    </div>
  );
}
