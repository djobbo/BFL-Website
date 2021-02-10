import styles from './SocialIcon.module.scss';

interface Props {
    title: string;
    path: string;
    link: string;
    href: string;
}

export function SocialIcon({ title, path, link, href }: Props) {
    return (
        <a className={styles.container} href={href} target="_blank">
            <svg className={styles.icon} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>{title}</title>
                <path d={path} />
            </svg>
            <div className={styles.meta}>
                <span className={styles.title}>{title}</span>
                <br />
                <span className={styles.linkText}>{link}</span>
            </div>
        </a>
    );
}
