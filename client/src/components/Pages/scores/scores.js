import React from "react";
import ScoreTable from "./highScoreTable";
import scores from "./scoredata.json";




const startState = { autoAlpha: 0, y: -50 };


export const Scores = props =>

	<body>
		<ScoreTable
			data={scores}
		/>

	</body>;