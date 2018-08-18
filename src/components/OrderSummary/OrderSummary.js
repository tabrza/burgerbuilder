import React from 'react';

import Aux from '../../hoc/Auxiliary';
import Button from '../UI/Button/Button';

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
      <p>Continue to checkout?</p>
      <Button btnType='Danger' clicked={props.modalClosed}>CANCEL</Button>
      <Button btnType='Success' clicked={props.continuePurchase}>CONTINUE</Button>
    </Aux>
  );
};

export default orderSummary;
