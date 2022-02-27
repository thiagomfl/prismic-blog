import Link from 'next/link';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FiCalendar, FiUser } from 'react-icons/fi';

import styles from './homePost.module.scss';
import commonStyles from '../../styles/common.module.scss';

type HomePostProps = {
  slug: string;
  first_publication_date: string | null;
  data: {
    title: string;
    author: string;
    subtitle: string;
  };
};

export function HomePost({
  data,
  slug,
  first_publication_date,
}: HomePostProps): JSX.Element {
  return (
    <div className={styles.homePostContainer}>
      <Link href={`/post/${slug}`}>
        <a>
          <h2>{data.title}</h2>
          <p>{data.subtitle}</p>
          <section className={commonStyles.info}>
            <div>
              <FiCalendar color="#BBBBBB" />
              <time>
                {format(new Date(), 'dd MMM yyyy', {
                  locale: ptBR,
                })}
              </time>
            </div>
            <div>
              <FiUser color="#BBBBBB" />
              <span>{data.author}</span>
            </div>
          </section>
        </a>
      </Link>
    </div>
  );
}
