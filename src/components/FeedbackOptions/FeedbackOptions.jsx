import React from 'react';
import s from './FeedbackOptions.module.css'
import { FaRegSmile } from "react-icons/fa";
import { CgSmileNeutral } from "react-icons/cg";
import { PiSmileySadBold } from "react-icons/pi";

export class FeedbackOptions extends React.Component {
  render() {
    const { addFeedback } = this.props;

    return (
      <>
        <div className={s.leaveFeedback}>just pick the smile
          <div className={s.btns}>
            <button
              className="feedback"
              name="goodFeedback"
              onClick={() => addFeedback('good')}
            >
              <FaRegSmile size='60' color='orange'/>
            </button>
            <button
              className="feedback"
              name="neutralFeedback"
              onClick={() => addFeedback('neutral')}
            >
             <CgSmileNeutral size='60' color='green'/>
            </button>
            <button
              className="feedback"
              name="badFeedback"
              onClick={() => addFeedback('bad')}
            >
             <PiSmileySadBold size='60'  color='red'/>
            </button>
          </div>
        </div>
      </>
    );
  }
}
