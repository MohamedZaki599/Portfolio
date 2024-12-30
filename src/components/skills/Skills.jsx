import React from "react"
import "./skills.css"
import CSS from "../../assets/css3.svg"
import Next from "../../assets/nextjs.svg"
import Figma from "../../assets/figma.svg"
import Javascript from "../../assets/javascript.svg"
import Typescript from "../../assets/typescript.svg"
import Nodejs from "../../assets/nodejs.svg"
import ReactJS from "../../assets/react.svg"
import Tailwind from "../../assets/tailwindcss.svg"

const skillsData = [
	{
		id: 1,
		image: CSS,
		title: "CSS",
		disc: "User Interface",
	},
	{
		id: 2,
		image: Tailwind,
		title: "Tailwind",
		disc: "Styling",
	},
	{
		id: 3,
		image: Javascript,
		title: "Javascript",
		disc: "Interaction",
	},
	{
		id: 4,
		image: Typescript,
		title: "Typescript",
		disc: "Typechecking",
	},
	{
		id: 5,
		image: ReactJS,
		title: "React.js",
		disc: "Framework",
	},
	{
		id: 6,
		image: Next,
		title: "Next.js",
		disc: "Framework for React",
	},
	{
		id: 7,
		image: Figma,
		title: "Figma",
		disc: "Design",
	},
	{
		id: 8,
		image: Nodejs,
		title: "Node.js",
		disc: "Web Server",
	},
]

function Skills() {
	return (
		<section className="skills" id="skills">
			<div className="top_section">
				<h5>What Skills I Have</h5>
				<h2>My Experience</h2>
			</div>
			<div className="container container_skills">
				{skillsData.map(({ id, image, title, disc }) => {
					return (
						<article key={id} className="card_skill">
							<div className="icon">
								<img src={image} alt="" />
							</div>
							<div className="content">
								<div className="skill_details">
									<h4>{title}</h4>
									<p className="text-light">{disc}</p>
								</div>
							</div>
						</article>
					)
				})}
			</div>
		</section>
	)
}

export default Skills
