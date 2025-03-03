"use client";
import Image from "next/image";
import styles from "./footer.module.css";
const Footer = () => {
  console.log("Hello");

  return (
    <>
      <div className={styles.container}>
        <div>©2025 Nurzhanitto. All rights reserved.</div>
        <div className={styles.social}>
          {/* <div className={styles.imgContainer}></div> */}
          <Image
            src="/1.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Nurzhan Dev Facebook"
          />
          <Image
            src="/2.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Nurzhan Dev "
          />
          <Image
            src="/3.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Nurzhan Dev"
          />
          <Image
            src="/4.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Nurzhan Dev"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
