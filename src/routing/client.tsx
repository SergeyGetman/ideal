import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ClientLayout } from '@components/layout/client';
import { clientRouts } from '@routing/routs';

// pages
const BonusesPage = lazy(() => import(/* webpackChunkName: "BonusesPage" */ '../pages/client/bonuses'));
const DepositBonusPage = lazy(() => import(/* webpackChunkName: "DepositBonusPage" */ '../pages/client/depositBonus'));
const RakebackPage = lazy(() => import(/* webpackChunkName: "RakebackPage" */ '../pages/client/rakeback'));
const ReferralPage = lazy(() => import(/* webpackChunkName: "ReferralPage" */ '../pages/client/referral'));
const StreamersOfferPage = lazy(
  () => import(/* webpackChunkName: "StreamersOfferPage" */ '../pages/client/streamersOffer'),
);

const ContactsPage = lazy(() => import(/* webpackChunkName: "ContactsPage" */ '../pages/client/contacts'));
const EmailConfirmationPage = lazy(
  () => import(/* webpackChunkName: "EmailConfirmationPage" */ '../pages/client/emailConfirmation'),
);
const DownloadPage = lazy(() => import(/* webpackChunkName: "DownloadPage" */ '../pages/client/download'));
const FaqPage = lazy(() => import(/* webpackChunkName: "FaqPage" */ '../pages/client/faq'));
const HomePage = lazy(() => import(/* webpackChunkName: "HomePage" */ '../pages/client/home'));
const NewsPage = lazy(() => import(/* webpackChunkName: "NewsPage" */ '../pages/client/news'));
const NewsReadPage = lazy(() => import(/* webpackChunkName: "NewsReadPage" */ '../pages/client/newsRead'));
const ArticlesPage = lazy(() => import(/* webpackChunkName: "ArticlesPage" */ '../pages/client/articles'));
const ArticlesReadPage = lazy(() => import(/* webpackChunkName: "ArticlesReadPage" */ '../pages/client/articlesRead'));
const TournamentsPage = lazy(() => import(/* webpackChunkName: "TournamentsPage" */ '../pages/client/tournaments'));
const TournamentsReadPage = lazy(
  () => import(/* webpackChunkName: "TournamentsReadPage" */ '../pages/client/tournamentsRead'),
);
const PolicesPage = lazy(() => import(/* webpackChunkName: "PolicesPage" */ '../pages/client/polices'));
const ErrorPage = lazy(() => import(/* webpackChunkName: "ErrorPage" */ '../pages/error'));
const StreamsPage = lazy(() => import(/* webpackChunkName: "StreamsPage" */ '../pages/client/streams'));
const StreamsWatchPage = lazy(() => import(/* webpackChunkName: "StreamsWatchPage" */ '../pages/client/streamsWatch'));
const RankingPage = lazy(() => import(/* webpackChunkName: "RankingPage" */ '../pages/client/ranking'));
const BotProtectionPage = lazy(
  () => import(/* webpackChunkName: "BotProtectionPage" */ '../pages/client/botProtection'),
);

export const ClientRouting = () => {
  return (
    <ClientLayout>
      <Suspense fallback={null}>
        <Switch>
          <Route exact path={clientRouts.news} component={NewsPage} />
          <Route exact path={`${clientRouts.news}/:id`} component={NewsReadPage} />

          <Route exact path={clientRouts.articles} component={ArticlesPage} />
          <Route exact path={`${clientRouts.articles}/:id`} component={ArticlesReadPage} />

          <Route exact path={clientRouts.tournaments} component={TournamentsPage} />
          <Route exact path={`${clientRouts.tournaments}/:id`} component={TournamentsReadPage} />

          <Route exact path={clientRouts.streams} component={StreamsPage} />
          <Route exact path={`${clientRouts.streams}/:id`} component={StreamsWatchPage} />

          <Route exact path={clientRouts.bonuses} component={BonusesPage} />
          <Route exact path={clientRouts.depositBonus} component={DepositBonusPage} />
          <Route exact path={clientRouts.rakeback} component={RakebackPage} />
          <Route exact path={clientRouts.referral} component={ReferralPage} />
          <Route exact path={clientRouts.streamersOffer} component={StreamersOfferPage} />

          <Route exact path={clientRouts.contacts} component={ContactsPage} />
          <Route exact path={`${clientRouts.emailConfirmation}`} component={EmailConfirmationPage} />
          <Route exact path={clientRouts.download} component={DownloadPage} />
          <Route exact path={clientRouts.faq} component={FaqPage} />
          <Route exact path={clientRouts.polices} component={PolicesPage} />
          <Route exact path={clientRouts.botProtection} component={BotProtectionPage} />
          <Route exact path={clientRouts.ranking} component={RankingPage} />
          <Route exact path={[clientRouts.home, clientRouts.signUp]} component={HomePage} />

          <Route component={ErrorPage} />
        </Switch>
      </Suspense>
    </ClientLayout>
  );
};
