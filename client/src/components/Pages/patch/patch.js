import React from "react";
import { Transition } from "react-transition-group";
import { TweenLite } from "gsap/all";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




const startState = { autoAlpha: 0, y: -50 };


export const Patch = props => <Transition
	unmountOnExit
	in={props.show}
	timeout={1000}
	onEnter={ node => TweenLite.set(node, startState) }
	addEndListener={ (node, done) => {
		TweenLite.to(node, 0.5, {
			autoAlpha: props.show ? 1 : 0,
			y: props.show ? 0 : 50,
			onComplete: done
		});
	}}

	
>	
<body>
<Grid container spacing={1}>
        <Grid item xs={12}>
			<div className="patchNotes">
                        <ul>
                            <li>Asteroids is a space-themed multidirectional shooter arcade game, released in November 1979 by Atari. </li><br></br>
                            <li>The game was rendered on a vector display, in a two-dimensional view that wraps around both screen axes.</li><br></br>
                            <li>Asteroids was immediately successful upon release. It displaced Space Invaders by popularity in the United States, and became Atari's best-selling arcade game of all time, with over 70,000 units sold. </li><br></br>
							<li>Asteroids was one of the first major hits of the “Golden Age” of arcade video games. It was popular with players, while influencing a generation of developers. </li><br></br>
							<li>Asteroids was so popular that some video arcade operators had to install large boxes to hold the number of coins spent by players.</li><br></br>
							<li>Following the game's success, three “sequels” were introduced over the next eight years: Asteroids Deluxe (1981), Space Duel (1982), and, Blasteroids (1987).</li><br></br>
						</ul>
						</div>
        </Grid>
		<Grid item xs={6}>
		<div className="teamCards">
			<Card>
				<CardContent>
					<div className="cardNames">
					<Typography variant="h5" component="h2">Mike Santarelli</Typography>
					</div>
					
					<Typography>
					<p>Built initial stateful ScoreTable component on the High Scores page. 
							Teamed with Kyle Robinson on Project Details page, to facilitate portfolio access. 
							Developed the VideoGrid YouTube API component that allows for real-time video searching.</p>
					</Typography>
					<CardActions>
					<div className="portfolioButton">
						<Button size="small" href="https://cleve716.github.io/detailed-portfolio/">Portfolio</Button>
					</div>
					</CardActions>
				</CardContent>
			</Card>
			</div>
		</Grid>

		<Grid item xs={6}>
		<div className="teamCards">
			<Card>
				<CardContent>
				<div className="cardNames">
				<Typography variant="h5" component="h2">Stet Olaye</Typography>
				</div>
					
					<Typography>
					<p>Developed user validation, utilizing Passport.js . 
						Teamed with Jeff Fleer to render Reactoids repo, and create MongoDB framework and collections for 
						user validation, high scores, and preliminary store frameworks. 
						Adapted initial ScoreTable component for MongoDB interaction. Collaborated on Heroku deployment.  </p>
					</Typography>
					<CardActions>
					<div className="portfolioButton">
						<Button size="small" href="https://solaye.github.io/Updated-Portfolio/">Portfolio</Button>
					</div>
					</CardActions>
				</CardContent>
			</Card>
			</div>
		</Grid>

		<Grid item xs={6}>
		<div className="teamCards">
			<Card>
				<CardContent>
					<div className="cardNames">
					<Typography variant="h5" component="h2">Kyle Robinson</Typography>
					</div>
					
					<Typography>
					<p>Built out initial React app framework and component trees.Teamed with Mike Santarelli on 
						Project Details page to facilitate portfolio access, comprehending and driving 
						Materialize-UI utilization. Multiple deep dives with Jeff Fleer on Heroku deployment. </p>
					</Typography>
					<CardActions>
						<div className="portfolioButton">
						<Button size="small" href="https://kylejrob.github.io/designPortfolio/">Portfolio</Button>
						</div>
					</CardActions>
				</CardContent>
			</Card>
			</div>
		</Grid>
		
		<Grid item xs={6}>
		<div className="teamCards">
			<Card>
				<CardContent>
				<div className="cardNames">
					<Typography variant="h5" component="h2">Jeff Fleer</Typography>
					</div>
					
					<Typography>
					<p>Leading force, with Stet Olaye, on Reactoids render. Teamed with him in that area, 
						while creating MongoDB framework and collections for user validation, high scores, 
						and preliminary store frameworks. Multiple deep dives with Kyle Robinson on Heroku. 
						Developed user ship and weapon attributes for use in the store framework.</p>
					</Typography>
					<CardActions>
					<div className="portfolioButton">
						<Button size="small" href="https://fleerless.github.io/Responsive-Portfolio/">Portfolio</Button>
					</div>
					</CardActions>
				</CardContent>
			</Card>
			</div>
		</Grid>


		{/* <div className={paper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div> */}


	</Grid>
	</body>
</Transition>;