import React from 'react';

const Container = ({ cards, CardComponent }) => {
  return (
    <div className="container-1080px">
      <div className="row">
        {cards.map((card) => (
          <CardComponent {...card} />
        ))}
      </div>
    </div>
  );
};

export default Container;
