import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

//Burger.js will contain multiple <BurgerIngredient/> components to form the Burger.js
const burger = (props) => {

    const ingredientsArray = Object.keys(props.ingredients)
        .map(ing => {
            return [...Array(props.ingredients[ing])].map((_, index) => {
                return <BurgerIngredient key={ing + index} type={ing} />
            })
        } )

    return (
        <div className={classes.Burger}>

            <BurgerIngredient type="bread-top" />
            {ingredientsArray}
            <BurgerIngredient type="bread-bottom" />

        </div>
    );
}


export default burger;