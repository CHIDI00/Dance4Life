import React from "react";
import "./dance.css";
import { DanceDescription } from "../../components";
import {
	hiphopdance1,
	linedance1,
	salsadance1,
	bollroomdance1,
	hiphopdance2,
	dance1,
} from "./import";

const danceData = [
	{
		image: hiphopdance1,
		danceName: "Hip Hop Dance",
	},
	{
		image: linedance1,
		danceName: "Line Dance",
	},
	{
		image: salsadance1,
		danceName: "Salsa Dance",
	},
	{
		image: bollroomdance1,
		danceName: "Ballroom Dance",
	},
	{
		image: hiphopdance2,
		danceName: "Hip Hop Dance",
	},
	{
		image: dance1,
		danceName: "Hip Hop Dance",
	},
];

const Dance = () => {
	return (
		<div className="d4l__dance" id="dance">
			<div className="d4l__dance-header">
				<h1>OUR CLASSES</h1>
				<p>
					In Dance4Life we offer best and quality dance teaching with ease. Here
					in Dance4Life we teach categories of dance step.
				</p>
				<div className="dance__list">
					<div>
						<span></span> Line dance
					</div>
					<div>
						<span></span> HipHop Dance
					</div>
					<div>
						<span></span> Salsa Dance
					</div>
					<div>
						<span></span> Ballroom Dance
					</div>
				</div>
			</div>

			<div className="d4l__dance-container">
				{danceData.map((dances, i) => (
					<div
						className="d4l__dance-image_container"
						style={{ backgroundImage: `url('${dances.image}')` }}
						key={i}
					>
						{dances.danceName}
					</div>
				))}
			</div>

			<DanceDescription />
		</div>
	);
};

export default Dance;
