import { PromoSection } from './promo';
import { StreamsSection } from './streams';
import { BonusesSection } from './bonuses';
import { NewsSection } from './news';
import { ArticlesSection } from './articles';
import { PageBody } from '@components/page';
import { useStyles } from './styles';

export const HomePageContent = () => {
  const classes = useStyles({});

  return (
    <>
      <PromoSection />
      <section className={classes.section}>
        <PageBody>
          <StreamsSection />
        </PageBody>
      </section>
      <section className={classes.section}>
        <PageBody>
          <BonusesSection />
        </PageBody>
      </section>
      <section className={classes.section}>
        <PageBody>
          <NewsSection />
        </PageBody>
      </section>
      <section className={classes.section}>
        <PageBody>
          <ArticlesSection />
        </PageBody>
      </section>
    </>
  );
};
