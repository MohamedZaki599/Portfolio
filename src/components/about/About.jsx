import React from "react"
import "./about.css"
import ImageME from "../../assets/me-about.jpg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

function About() {
	return (
		<section className="about" id="about">
			<div className="top_section">
				<h5>Get To Know</h5>
				<h2>About Me</h2>
			</div>

			<div className="container about_container">
				<div className="about_me">
					<div className="about_me_image">
						<img src={ImageME} alt="" />
					</div>
				</div>

				<div className="about_content">
					<div className="about_cards">
						<div className="about_card">
							<FaAward className="about_icon" />
							<h5>Experience</h5>
							<small>1+ Years Working</small>
						</div>

						<div className="about_card">
							<FiUsers className="about_icon" />
							<h5>Clients</h5>
							<small>200+ Worldwide</small>
						</div>

						<div className="about_card">
							<VscFolderLibrary className="about_icon" />
							<h5>Projects</h5>
							<small>80+ Completed</small>
						</div>
					</div>

					<p>
						I am a passionate frontend developer with over a year of experience,
						working with diverse clients and completing numerous projects.
                    </p>
                    
                    <a href="#contact" className="btn btn-primary">
                        Let&apos;s Talk
                    </a>
				</div>
			</div>
		</section>
	)
}

export default About
