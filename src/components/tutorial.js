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

  componentDidUpdate() {
    console.log('Scroll to top');
    window.scrollTo(0, 0);
  }

  renderHelpButton() {
    const email = 'support@1e.com';
    const subject = 'Tachyon Welcome - Onboarding help request';
    const body = `User has requested help from step ${this.getPage() + 1} of ${
      TutorialPages.length
    }.`;
    return (
      <a
        className="button"
        tabIndex="0"
        href={`mailto:${email}?subject=${subject}&body=${body}`}
      >
        Need Help?
      </a>
    );
  }

  restart() {
    document.location = `/#/tutorial`;
  }

  handleTouchStart(event) {
    this.touchXStart = event.touches[0].clientX;
    this.touchScreenX = event.touches[0].screenX;
  }

  handleTouchMove(event) {
    this.touchXEnd = event.touches[0].clientX;
  }

  handleTouchEnd() {
    let swipe = this.touchXEnd - this.touchXStart;
    swipe = swipe / this.touchScreenX;
    if (Math.abs(swipe) < 0.3) return;
    if (swipe < 0) return this.nextPage();
    return this.prevPage();
  }

  render() {
    let { page, user, company, totalSteps } = this.props;
    page = page || 0;

    return (
      <Fragment>
        <main
          className="tutorial"
          {...this.props}
          onTouchStart={(touchStartEvent) =>
            this.handleTouchStart(touchStartEvent)
          }
          onTouchMove={(touchMoveEvent) => this.handleTouchMove(touchMoveEvent)}
          onTouchEnd={() => this.handleTouchEnd()}
        >
          <div className="content-wrapper">
            {TutorialPages[page]({ user, company, step: page, totalSteps })}
          </div>
        </main>
        <footer className="footer">
          <div className="content-wrapper">
            <div className="flex-container">
              <div className="flex-box">{this.renderHelpButton()}</div>
              <div className="content-right">
                {/* <a
                  className={`text-button ${!page ? 'disabled' : ''}`}
                  disabled={!page ? 'disabled' : ''}
                  href="#"
                  onClick={this.restart.bind(this)}
                >
                  Start over
                </a> */}
                <a
                  className="button"
                  disabled={page <= 0}
                  tabIndex="0"
                  onClick={this.prevPage.bind(this)}
                >
                  &lt; Back
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
        </footer>
      </Fragment>
    );
  }
}

export default Tutorial;
