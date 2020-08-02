import React from 'react';
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';


//This component is dynamic and displays a different ingredient depending on the case
class BurgerIngredient extends React.Component {

    render() {

        let ingredient = null;

        switch (this.props.type) {
    
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
    
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
    
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
    
            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>
                break;
            
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>
                break;
            
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>
                break;
            
            default:
                ingredient = null;
    
        }//end of switch

        return ingredient;

    
    }//end of render()

   
}

//personally "name" as prop would have worked better than "type". Less confusing
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}


export default BurgerIngredient;