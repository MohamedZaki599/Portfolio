import React from "react"
import "./home.css"
import Me from "../../assets/me.png"
import CV from "../../assets/cv.pdf"
import HomeSocials from "./HomeSocials"

function Home() {
	return (
		<div className="home">
			<div className="container home_container">
				<h4>Hello I&apos;m</h4>
				<h1>Mohamed Zaki</h1>
				<h4 className="text-light">Frontend Developer</h4>

				<div className="btns">
					<a href={CV} className="btn" download>
						Download CV
					</a>
					<a href="#" className="btn btn-primary">
						Let&apos;s Talk
					</a>
				</div>

				<div className="me">
					<img src={Me} alt="" />
				</div>

				<a href="#about" className="scroll_down">
					Scroll Down
				</a>

				<HomeSocials />
			</div>
		</div>
	)
}

export default Home
