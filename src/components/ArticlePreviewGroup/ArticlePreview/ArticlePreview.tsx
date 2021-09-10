import { BlogPost } from '@graphql/queries/posts';
import Link from 'next/link';
import styles from './ArticlePreview.module.scss';

export type Props = Omit<BlogPost, 'content'>;

export const ArticlePreview = ({
	slug,
	title,
	thumb,
	publishedAt,
	excerpt,
}: Props) => {
	const permalink = `/actus/${slug}`;

	return (
		<article className={styles.post}>
			<Link href={permalink}>
				<a className={styles.thumb}>
					<img src={thumb.url} alt={slug} />
				</a>
			</Link>
			<div className={styles.content}>
				<div>
					<Link href={permalink}>
						<a className={styles.title}>{title}</a>
					</Link>
					<p className={styles.date}>{publishedAt}</p>
					<div
						className={styles.excerpt}
						dangerouslySetInnerHTML={{ __html: excerpt.html }}
					/>
				</div>
				<Link href={permalink}>
					<a className={styles.readMore}>Lire la suite</a>
				</Link>
			</div>
		</article>
	);
};
