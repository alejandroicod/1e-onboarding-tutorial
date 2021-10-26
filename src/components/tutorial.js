import React, { Fragment } from 'react';
import TutorialPages from '../pages/tutorial';

class Tutorial extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPageIndex: 0,
    };
  }

  getPage() {
    let { page } = this.props;
    return parseInt(page) || 0;
  }

  onPageChange(newPage) {
    if (newPage >= 0 && newPage < TutorialPages.length)
      this.setState({ currentPageIndex: newPage });
  }

  prevPage() {
    let newPage = this.getPage() - 1;
    if (newPage >= 0) document.location = `/#/tutorial/${newPage}`;
  }

  nextPage() {
    let newPage = this.getPage() + 1;
    if (newPage < TutorialPages.length)
      document.location = `/#/tutorial/${newPage}`;
  }

  renderHelpButton() {
    const email = 'support@1e.com';
    const subject = 'Tachyon Welcome - Onboarding help request';
    const body = `User has requested help from step ${this.getPage()} or ${
      TutorialPages.length
    }.`;
    return (
      <a
        className="button"
        tabIndex="0"
        href={`mailto:${email}?subject=${subject}&body=${body}`}
      >
        Need help?
      </a>
    );
  }

  restart() {
    document.location = `/#/tutorial`;
  }

  render() {
    let { page, user, company } = this.props;
    page = page || 0;

    return (
      <Fragment>
        <div className="tutorial" {...this.props}>
          <div className="content-wrapper">
            {TutorialPages[page]({ user, company, step: page })}
          </div>
        </div>
        <div className="footer">
          <div className="content-wrapper">
            <div className="flex-container">
              <div className="flex-box">{this.renderHelpButton()}</div>
              <div className="flex-box content-right">
                <a
                  className={`text-button ${!page ? 'disabled' : ''}`}
                  disabled={!page ? 'disabled' : ''}
                  href="#"
                  onClick={this.restart.bind(this)}
                >
                  Start over
                </a>
                <a
                  className="button"
                  disabled={page <= 0}
                  tabIndex="0"
                  onClick={this.prevPage.bind(this)}
                >
                  &lt; Previous
                </a>
                <a
                  className="button primary"
                  disabled={page >= TutorialPages.length - 1}
                  tabIndex="0"
                  onClick={this.nextPage.bind(this)}
                >
                  Next &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Tutorial;
