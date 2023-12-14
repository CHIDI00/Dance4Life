import React from "react";
import "./danceDescription.css";

const descriptionData = [
	{
		danceName: "Line Dance",
		description:
			"Line dance is a choreographed dance form where participants perform a sequence of synchronized steps in a line or rows without the need for a partner. It's a social dance style that emphasizes group unity and rhythmic coordination, often set to country, pop, or other upbeat music.",
	},
	{
		danceName: "Hip-Hop Dance",
		description:
			"Hip-hop dance is an energetic and dynamic street dance style that emerged from urban communities. It incorporates a wide range of movements, including breaking, locking, and popping, and is characterized by its improvisational nature. Hip-hop dance is often associated with the hip-hop music culture and is known for its expressive, free-flowing movements.",
	},
	{
		danceName: "Salsa Dance",
		description:
			"Salsa is a lively and sensual partner dance that originated in Latin America, particularly Cuba and Puerto Rico. It involves intricate footwork and rhythmic hip movements, often accompanied by vibrant music with a fast tempo. Salsa can be danced in various styles, including Cuban, Puerto Rican, and New York styles, and is popular worldwide for its infectious energy and social nature.",
	},
	{
		danceName: "Ballroom Dance",
		description:
			"Ballroom dance is a partner dance that encompasses a variety of elegant and formal dance styles. It is typically performed in pairs, with each partner assuming specific roles and positions. Ballroom dance includes a range of dances such as the waltz, tango, foxtrot, and quickstep, each with its own unique characteristics and tempo. Known for its emphasis on posture, frame, and precise footwork, ballroom dance is often associated with social events, competitions, and a timeless sense of glamour. Participants engage in graceful and coordinated movements, creating a captivating and refined display of dance artistry.",
	},
];

const DanceDescription = () => {
	return (
		<div className="d4l__decription section__padding">
			<p>You might want to know about the dances we teach</p>
			<div className="descriptions-container">
				{descriptionData.map((description) => (
					<div className="description-content">
						<h3>{description.danceName}</h3>
						<p>{description.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default DanceDescription;
