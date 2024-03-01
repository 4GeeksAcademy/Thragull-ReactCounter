import React from "react";

// We import all the components that will be used in the Home section.

import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Counter from "./Counter";
import Restart from "./Restart";
import Controls from "./Controls";
import SetTime from "./SetTime";
import Watch from "./Watch";
import AlertAlarm from "./AlertAlarm";
import AlarmSound from "./AlarmSound";

// The properties that we receive from the index.js are the following:
//
// "active" is an array wich contains the section of the site that is active at the moment. By default when loading, it should be the Secon Counter
// "digital" is a boolean created to select the type of watch we will render: analogic or digital
// "digits" is an array that will provide each of the digits for the digital watch to be rendered

const Home = (props) => {
	if (props.active[0] === "active"){
		return (
			<>
				<Header />
				<Navbar active={props.active}/>
				{props.digital ?  <Counter digits={props.digits}/> : <Watch /> }
				<Restart />
				<Footer />
			</>
		);
	};
	if (props.active[1] === "active"){
		return (
			<>
				<Header />
				<Navbar active={props.active}/>
				{props.digital ?  <Counter digits={props.digits}/> : <Watch /> }
				<Controls />
				<Footer />
			</>
		);
	};
	if (props.active[2] === "active"){
		return (
			<>
				<Header />
				<Navbar active={props.active}/>
				{props.digital ?  <Counter digits={props.digits}/> : <Watch /> }
				<SetTime />
				<Controls />
				<AlarmSound />
				<AlertAlarm />
				<Footer />
			</>
		);
	};
	if (props.active[3] === "active"){
		return (
			<>
				<Header />
				<Navbar active={props.active}/>
				{props.digital ?  <Counter digits={props.digits}/> : <Watch /> }
				<Footer />
			</>
		);
	};
	if (props.active[4] === "active"){
		return (
			<>
				<Header />
				<Navbar active={props.active}/>
				{props.digital ?  <Counter digits={props.digits}/> : <Watch /> }
				<SetTime />
				<AlertAlarm />
				<AlarmSound />
				<Footer />
			</>
		);
	};
};

export default Home;
