import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Counter from "./Counter";

//include images into your bundle
import secundero from "../../img/secundero.png";


//create your first component
const Home = (props) => {
	return (
		<>
			<Header />
			<Navbar />
			<Counter digits={props.digits}/>
			<Footer />
		</>
	);
};

export default Home;
