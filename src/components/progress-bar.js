import React from 'react';

class ProgressBar extends React.Component {
  render() {
    const { totalSteps, currentStep } = this.props;

    return (
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${Math.round(
              !totalSteps
                ? 0
                : (parseInt(currentStep) / parseInt(totalSteps)) * 100
            )}%`,
          }}
        />
      </div>
    );
  }
}

export default ProgressBar;
