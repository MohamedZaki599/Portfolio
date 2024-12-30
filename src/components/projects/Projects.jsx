import React from "react"
import "./projects.css"
import IMG1 from "../../assets/project1.png"
import IMG2 from "../../assets/project2.png"
import IMG3 from "../../assets/project3.png"
import IMG4 from "../../assets/project4.png"
import IMG5 from "../../assets/project5.png"
import IMG6 from "../../assets/project6.png"

const portfolioData = [
	{
		id: 1,
		image: IMG1,
		title: "Doob Digital Agency",
		github: "https://github.com/MohamedZaki599/Doob-Template-Digital-Agency",
		demo: "https://mohamedzaki599.github.io/Doob-Template-Digital-Agency/",
	},
	{
		id: 2,
		image: IMG2,
		title: "Kasper-V2--We-Make-Art",
		github: "https://github.com/MohamedZaki599/Kasper-V2--We-Make-Art",
		demo: "https://mohamedzaki599.github.io/Kasper-V2--We-Make-Art/",
	},
	{
		id: 3,
		image: IMG3,
		title: "To_Do_List Application",
		github: "https://github.com/MohamedZaki599/To_Do_List",
		demo: "https://to-do-list-rust-one-41.vercel.app/",
	},
	{
		id: 4,
		image: IMG4,
		title:
			"Tic_Tac_Toe-Application is a classic game",
		github: "https://github.com/MohamedZaki599/Tic_Tac_Toe",
		demo: "https://tic-tac-toe-nine-snowy.vercel.app/",
	},
	{
		id: 5,
		image: IMG5,
		title:
			"SocialFlowHub is a social media platform inspired by Instagram",
		github: "https://github.com/MohamedZaki599/SocialFlowHub-Advanced-JS",
		demo: "https://social-flow-hub-advanced-js.vercel.app/",
	},
	{
		id: 6,
		image: IMG6,
		title:
			"Design_Bondi is a captivating website built with Bootstrap 5",
		github: "https://github.com/MohamedZaki599/Bootstrap_5_Design_1_Bondi",
		demo: "https://mohamedzaki599.github.io/Bootstrap_5_Design_1_Bondi/",
	},
]

function Projects() {
	return (
		<section className="projects" id="projects">
			<div className="top_section">
				<h5>My Recent Work</h5>
				<h2>Projects</h2>
			</div>

			<div className="container projects_container">
				{portfolioData.map(({ id, image, title, github, demo }) => {
					return (
						<article key={id} className="portfolio_item">
							<div className="portfolio_item_img">
								<img src={image} alt="" />
							</div>
							<h3>{title}</h3>
							<div className="project_btns">
								<a
									href={github}
									target="_blank"
									rel="noreferrer"
									className="btn"
								>
									Github
								</a>
								<a
									href={demo}
									target="_blank"
									rel="noreferrer"
									className="btn btn-primary"
								>
									Live Demo
								</a>
							</div>
						</article>
					)
				})}
			</div>
		</section>
	)
}

export default Projects
