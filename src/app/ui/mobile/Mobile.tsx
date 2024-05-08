"use client";

import Image from "next/image";

import styles from "@/styles/mobile.module.css";

import { getResumeLink } from "helpers/getResumeLink";

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
                        Visa Required
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

            <section className={`${styles.mobile} ${styles['pb-12']} ${styles['break-words']} ${styles["mr4"]}`}>
                <h2 className={`${styles["text-body-medium"]} ${styles["text-color-text"]}  ${styles["pt-16"]} ${styles["mb-12"]} ${styles["text-heading-large"]} ${styles["text-heading-large"]}`}>Featured</h2>
                <div className={`${styles["full-width"]} ${styles["full-height"]} ${styles["flex-column"]}`}>
                    <a className={`${styles["optional-action-target-wrappper"]}`} target="_blank" href={getResumeLink()}>
                        <div className={`${styles["m2"]} ${styles["t-12"]} ${styles["t-black--light"]} ${styles["t-normal"]}`}>
                            <span>Link</span>
                        </div>
                    </a>

                    <a className={`${styles["optional-action-target-wrappper"]}`} target="_blank" href={getResumeLink()}>
                        <div className={`${styles["responsive-container"]}`}>
                            <Image className={`${styles["responsive-image"]}`} width="320" height="195" src="/resume.jpeg" alt="Resume" priority />
                        </div>

                        <div className={`${styles["content-preview"]}`}>
                            <div className={`${styles["display-flex"]} ${styles["flex-column"]} ${styles["text-heading-small"]} ${styles['break-words']}`}>
                                <span>Front end developer CV</span>
                            </div>
                            <div className={`${styles["t-black--light"]} ${styles["text-body-xsmall"]} ${styles['break-words']}`}>
                                <span>Google Docs</span>
                            </div>
                        </div>

                    </a>
                </div>
            </section>
        </>
    );
}

export default Mobile;
