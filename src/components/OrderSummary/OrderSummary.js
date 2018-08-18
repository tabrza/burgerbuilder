import React from 'react';

import Aux from '../../hoc/Auxiliary';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map( igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>);
    });

  return(
    <Aux>
      <h3>Your order summary is:</h3>
      <ul>
        {ingredientSummary}
      </ul>
    </Aux>
  );
};

export default orderSummary;