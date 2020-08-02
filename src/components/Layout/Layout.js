import React from 'react';
import classes from './Layout.module.css'

const layout = (props) => {
   return(
    <>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={classes["Layout-Content"]}>
            {props.children}                                {/*NOTE: BurgerBuilder will be rendered in the props.children slot */}
        </main>
    </>
   )
}


export default layout;