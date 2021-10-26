import React, { Fragment } from 'react';
import Tutorial from '../components/tutorial';
import PageTitle from '../components/page-title';
import ProgressBar from '../components/progress-bar';
import TutorialPages from './tutorial';

class HomePage extends React.Component {
  getQuery() {
    return new URLSearchParams(this.props.location.search);
  }

  render() {
    let query = this.getQuery();
    let { page } = this.props.match.params;
    page = !page ? 0 : parseInt(page);
    let totalPages = TutorialPages.length - 1;
    totalPages = !totalPages ? 0 : parseInt(totalPages);

    return (
      <Fragment>
        <PageTitle>Onboarding Tutorial</PageTitle>
        <ProgressBar totalSteps={totalPages} currentStep={page} />
        <Tutorial
          page={page}
          user={query.get('user')}
          company={query.get('company')}
        />
      </Fragment>
    );
  }
}

export default HomePage;
