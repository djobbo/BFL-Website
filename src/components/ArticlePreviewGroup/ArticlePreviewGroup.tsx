import styles from './ArticlePreviewGroup.module.scss';
import { ArticlePreview, Props as PreviewProps } from './ArticlePreview';

interface Props {
	articles: PreviewProps[];
}

export const ArticlePreviewGroup = ({ articles }: Props) => {
	return (
		<div className={styles.previewGroup}>
			{articles.map((article) => (
				<ArticlePreview {...article} key={article.slug} />
			))}
		</div>
	);
};
