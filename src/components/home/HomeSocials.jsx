import React from "react"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"

function HomeSocials() {
	return (
		<div className="home_socials">
			<a
				href="https://www.linkedin.com/in/mohamed-zaki-152385120/"
				target="_blank"
				rel="noreferrer"
			>
				<FaLinkedin />
			</a>

			<a
				href="https://github.com/MohamedZaki599"
				target="_blank"
				rel="noreferrer"
			>
				<FaGithub />
			</a>

			<a
				href="https://www.facebook.com/mohamedzaki599"
				target="_blank"
				rel="noreferrer"
			>
				<FaFacebook />
			</a>
		</div>
	)
}

export default HomeSocials
