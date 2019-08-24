import React from "react";
import { Transition } from "react-transition-group";
import { TweenLite } from "gsap/all";
import ScoreTable from "./highScoreTable";
import scores from "./scoredata.json";




const startState = { autoAlpha: 0, y: -50 };


export const Scores = props => <Transition
	unmountOnExit
	in={props.show}
	timeout={1000}
	onEnter={node => TweenLite.set(node, startState)}
	addEndListener={(node, done) => {
		TweenLite.to(node, 0.5, {
			autoAlpha: props.show ? 1 : 0,
			y: props.show ? 0 : 50,
			onComplete: done
		});
	}}


>
	

		<ScoreTable
			data={scores}
		/>

</Transition>;