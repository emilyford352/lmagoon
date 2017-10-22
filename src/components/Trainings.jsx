import React from 'react';

export default class About extends React.Component {
  render() {
    return (
     <div id="data">
        <h1>Trainings</h1>
         <div className="trainings-container">
             <div className = "training-container eliminating-limitations">
                 <div className="training-header-bubble">
                     <h3 className="training-bubble-header">
                        Eliminating Limitations
                     </h3>
                 </div>
                 <p>
                     Most of us are effective at many things, but consistently plummet short in others.
                     This is because we automatically accrue restrictive perceptions and beliefs about what is possible and what isn't.
                     Unless you make a conscious effort to reevaluate your view of the world, you may be living partly in the past without being aware of it.
                     After all, all you are is what you think.

                 </p>
             </div>
             <div className="training-container">
                 <div className="training-header-bubble">
                     <h3 className="training-bubble-header">
                        Anger Management in the Corporate World
                     </h3>
                 </div>
                 <p>
                     Do you have anger issues in the work place? Have you been told that you need to learn to chill out with your employees?
                     Lori Magoon is a recognized leader in teaching anger management skills for over a decade. She specializes in both individual
                     and group settings teaching the understanding of anger and its origin.
                 </p>
             </div>
         </div>
         <div className="benefit-list">
             <h3>
                 Workshop Benefits
             </h3>
             <ul>
             <li>
                Stress management
             </li>
             <li>
                 Empathy Development
             </li>
             <li>
                 Learning to respond instead of react
             </li>
             <li>
                 Improving self-talk
             </li>
             <li>
                 Assertive Communication
             </li>
             <li>
                 Expectation Management
             </li>
             <li>
                 Forgiveness
             </li>
             <li>
                 Retreat and think things over
             </li>
             <li>
                 Improving judgement and impulse control
             </li>
             <li>
                 Team and relationship building
             </li>
             </ul>

         </div>

      </div>);
  }
}
