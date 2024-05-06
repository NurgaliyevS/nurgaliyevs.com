import styles from "@/styles/mobile.module.css";
import Image from "next/image";

function Mobile() {
    return (
        <>
            <section className={styles.mobile}>
                <div className={`${styles["profile-container"]} ${styles["mt-20"]}`}>
                    <Image className={styles["profile-photo"]} width="120" height="120" src="/creator.jpeg" alt="Creator" />
                </div>

                <div className={styles["mt-8"]}>
                    <h1 className={`${styles["profile-heading"]} ${styles["break-words"]}`}>Sabyr Nurgaliyev</h1>
                </div>

                <div>
                    <span className={`${styles["text-body-medium"]} ${styles["break-words"]}`}>Front end Developer</span>
                </div>

                <div className={styles["mt-2"]}>
                    <span className={`${styles["text-body-small"]} ${styles["break-words"]}`}>
                        Kazakhstan
                    </span>
                </div>
            </section>

            <hr className={styles.line} />

            <section className={`${styles.mobile} ${styles['pb-12']}`}>
                <h2 className={`${styles["text-body-medium"]} ${styles["text-color-text"]}  ${styles["pt-16"]} ${styles["mb-12"]} ${styles["text-heading-large"]}`}>About</h2>

                <div className={`${styles["summary-container"]} ${styles["mr-16"]}`}>
                    <div className={`${styles["body-small"]} ${styles["text-color-text"]} ${styles["whitespace-pre-line"]} ${styles["description"]}`}>
                        Frontend Developer with 3+ years of experience in web development. Proficient in building
                        scalable, performance-efficient, and user-centric web applications. Passionate about
                        solving human problems and contributing to product development with technical and
                        analytical skills.
                    </div>
                </div>
            </section>

            <hr className={styles.line} />

            <section className={`${styles.mobile} ${styles['pb-12']} ${styles['break-words']}`}>
                <h2 className={`${styles["text-body-medium"]} ${styles["text-color-text"]}  ${styles["pt-16"]} ${styles["mb-12"]} ${styles["text-heading-large"]} ${styles["text-heading-large"]}`}>Featured</h2>
            </section>

            <hr className={styles.line} />
        </>
    );
}

export default Mobile;
