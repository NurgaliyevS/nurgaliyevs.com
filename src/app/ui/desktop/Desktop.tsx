"use client";

import styles from "@/styles/desktop.module.css";
import { getAbout } from "helpers/getAbout";
import { getCurrentRole } from "helpers/getCurrentRole";
import { getEmail } from "helpers/getEmail";
import { getFullName } from "helpers/getFullName";
import { getLinkedinLink } from "helpers/getLinkedinLink";
import { getResumeLink } from "helpers/getResumeLink";

import Image from "next/image";

function Desktop() {
    return (
        <>
            <div className={`${styles["layout-container"]}`}>
                <div className={`${styles["layout-row"]}`}>
                    <main
                        className={`${styles["display-flex"]} ${styles["flex-column"]}`}
                    >
                        <section className={`${styles["artdeco-card"]}`}>
                            <div
                                className={`${styles["ph3"]} ${styles["pb2"]} ${styles["pt2"]}`}
                            >
                                <Image
                                    className={styles["profile-photo"]}
                                    width="152"
                                    height="152"
                                    src="/creator.jpeg"
                                    alt="Creator"
                                />

                                <div className={`${styles["mt2"]}`}>
                                    <h1
                                        className={`${styles["text-heading-xlarge"]} ${styles["break-words"]}`}
                                    >
                                        {getFullName()}
                                    </h1>
                                    <div>
                                        <span
                                            className={`${styles["text-body-medium"]} ${styles["break-words"]}`}
                                        >
                                            {getCurrentRole()}
                                        </span>
                                    </div>
                                </div>

                                <div className={styles["mt-2"]}>
                                    <span
                                        className={`${styles["text-body-small"]} ${styles["break-words"]}`}
                                    >
                                        <a
                                            className={`${styles["optional-action-link"]}`}
                                            target="_blank"
                                            href={`mailto:${getEmail()}`}
                                        >
                                            {getEmail()}
                                        </a>
                                        |
                                        <a
                                            className={`${styles["optional-action-link"]}`}
                                            target="_blank"
                                            href={getLinkedinLink()}
                                        >
                                        linkedin
                                        </a>
                                        |work permit required
                                    </span>
                                </div>
                            </div>
                        </section>

                        <section
                            className={`${styles["artdeco-card"]} ${styles["mt2"]} ${styles["break-words"]} ${styles["pb2"]} ${styles["pt2"]}`}
                        >
                            <div className={`${styles["ph3"]}`}>
                                <h2
                                    className={`${styles["text-body-medium"]} ${styles["text-color-text"]} ${styles["mb-12"]} ${styles["text-heading-large"]}`}
                                >
                                    About
                                </h2>

                                <div className={`${styles["mr-16"]}`}>
                                    <div
                                        className={`${styles["text-body-small"]} ${styles["text-color-text"]} ${styles["whitespace-pre-line"]} ${styles["description"]}`}
                                    >
                                        {getAbout()}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section
                            className={`${styles["artdeco-card"]} ${styles["mt2"]} ${styles["break-words"]} ${styles["pb2"]} ${styles["pt2"]}`}
                        >
                            <div className={`${styles["ph3"]}`}>
                                <h2
                                    className={`${styles["text-body-medium"]} ${styles["text-color-text"]} ${styles["mb-12"]} ${styles["text-heading-large"]}`}
                                >
                                    Featured
                                </h2>

                                <div
                                    className={`${styles["full-width"]} ${styles["full-height"]} ${styles["flex-column"]}`}
                                >
                                    <a
                                        className={`${styles["optional-action-target-wrappper"]}`}
                                        target="_blank"
                                        href={getResumeLink()}
                                    >
                                        <div
                                            className={`${styles["m2"]} ${styles["t-12"]} ${styles["t-normal"]}`}
                                        >
                                            <span>Link</span>
                                        </div>
                                    </a>

                                    <a
                                        className={`${styles["optional-action-target-wrappper"]}`}
                                        target="_blank"
                                        href={getResumeLink()}
                                    >
                                        <div className={`${styles["responsive-container"]}`}>
                                            <Image
                                                className={`${styles["responsive-image"]}`}
                                                width="370"
                                                height="220"
                                                src="/resume.jpeg"
                                                alt="Resume"
                                                priority
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
            <footer className={`${styles["global-footer"]}`}></footer>
        </>
    );
}

export default Desktop;
