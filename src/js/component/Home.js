import React from "react";
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

//include images into your bundle



//create your first component
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
				<AlarmSound closeModal={props.closeModal}/>
				<AlertAlarm alarmActive={props.alarmActive}/>
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
				<AlertAlarm closeModal={props.closeModal}/>
				<AlarmSound alarmActive={props.alarmActive}/>
				<Footer />
			</>
		);
	};
};

export default Home;
