import React from 'react';
import classes from './App.module.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends React.Component {

  

	render() {
	console.log(classes)


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
