import React from "react";

function Progress({targetAmount, donations}) {
let sum = 0
for( let donation of donations){
  sum += donation.amount

}
  return (
    <div>
      <section className="progress">
        <h2>
          Raised <span className="secondary">${sum}</span> of
          <span className="secondary"> ${targetAmount}</span>
        </h2>
      </section>
    </div>
  );
}

export default Progress;
