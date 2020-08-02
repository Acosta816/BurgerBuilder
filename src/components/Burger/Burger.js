import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

//Burger.js will contain multiple <BurgerIngredient/> components to form the Burger.js
const burger = (props) => {

    //maple is an arbitrary name for this function that spits out an array of ingredient copies depending on it's value number {cheese: 3} would spit out 3 <BurgerIngredient type="cheese"/> components
    function maple(ing) {
        let myArray = [];
        console.log(props.ingredients[ing]);
        for(let i=0; i< props.ingredients[ing]; i++){
            myArray.push(<BurgerIngredient key={ing + i} type={ing} />)
        }
        return myArray
    }

    const ingredientsArray = Object.keys(props.ingredients)
        .map(ing => {
            //creating a fake array using Array(x3) which accepts a number and returns an array of xnumber of empty elements. ---> fake array looks like this [nothing, nothing, nothing]
            //The number we pass in is the number value property of the ingredient (cheese: 3) in this case it's 3.
            //With the spread operator we take JUST THE EMPTY ELEMENTS of the fake array (just the guts) and insert it into the [...parent brackets]. ----> At this point it looks like this for {cheese:3}   [nothing, nothing, nothing]
            //Then we map over the pointless elements (map will make a new array) in the array and for each empty element we have, we will return a
            //<BurgerIngredient />   
            // return [...Array(props.ingredients[ing])].map((_, index) => {
            //     return <BurgerIngredient key={ing + index} type={ing} />
            // })

            //This return is another way of doing this using the maple() function i declared above
            return maple(ing);
        } )

        console.log(ingredientsArray)

    return (
        <div className={classes.Burger}>

            <BurgerIngredient type="bread-top" />
            {ingredientsArray}
            <BurgerIngredient type="bread-bottom" />

        </div>
    );
}


export default burger;