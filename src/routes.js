import HomePage from './pages/home';
import NotFoundPage from './pages/not-found';
import Lang from './stores/lang';

export default function () {
  return {
    Home: {
      name: Lang.getTerm('homeTitle'),
      url: '/tutorial/:page?',
      default: '/tutorial',
      page: HomePage,
    },
    // Policy: {
    //   name: Lang.getTerm("policyTitle"),
    //   url: "/policy",
    //   page: PolicyPage,
    // },
    // About: {
    //   name: Lang.getTerm("aboutUsTitle"),
    //   url: "/about",
    //   page: AboutPage,
    //   footer: false
    // },
    NotFound: {
      name: Lang.getTerm('notFoundTitle'),
      url: '*',
      page: NotFoundPage,
      hidden: true,
    },
  };
}
