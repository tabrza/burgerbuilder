import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let allIngredients = Object.keys(props.ingredients)
    .map( igKey => { // map over array of ingredients
      return [...Array( props.ingredients[igKey] )].map( ( _, i) => { //match ingredient in object to get number
        return <BurgerIngredient key={igKey + i} type={igKey}/> //populate with number
      })
    })
    .reduce( (arr, el) => { //flatten the Array
      return arr.concat(el);
    }, []);

  if(allIngredients.length === 0){
    allIngredients = <p>Please add ingredients to your burger</p>
  }
  
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {allIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;
