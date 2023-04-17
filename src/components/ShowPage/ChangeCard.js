import React from 'react';

function Card(props) {
  const percent = 25;

  // set color of percent based on its value
  const percentColor = percent > 0 ? 'green' : 'red';

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-title">Change</div>
        <div className="card-body">
          <div className="percent" style={{ color: percentColor }}>{percent}%</div>
        </div>
      </div>
    </div>
  );
}

export default Card;