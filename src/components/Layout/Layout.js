import React from 'react';
import classes from './Layout.module.css'

const layout = (props) => {
   return(
    <>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={classes["Layout-Content"]}>
            {props.children}
        </main>
    </>
   )
}


export default layout;