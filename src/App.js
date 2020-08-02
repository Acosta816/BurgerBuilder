import React from 'react';
import classes from './App.module.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


//The reason we don't just have <BurgerBuilder/> render inside the Layout.js is because layout will have different components rendering as it's child, different views. look at it like layout accepting different children props 
//We are passing BurgerBuilder.js into Layout like a prop where in Layout.js it will be rendered in the <main> component.
class App extends React.Component {

  
	render() {


		return(
			<div>
				<Layout>
					<BurgerBuilder />
				</Layout>
			</div>
		)

	}//end of render//


}

export default App;
