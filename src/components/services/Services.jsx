import React from "react"
import "./services.css"
import { FaCode } from "react-icons/fa"
import { IoIosRocket } from "react-icons/io"
import { MdDesignServices } from "react-icons/md"

function Services() {
	return (
		<section className="services" id="services">
			<div className="top_section">
				<h5>What I Offer</h5>
				<h2>Services</h2>
			</div>

			<div className="container container_services">
				<article className="card">
					<MdDesignServices className="icon" />
					<h3>Web Design</h3>
					<p className="text-light">
						I offer professional web design services, crafting custom,
						responsive, and user-centered websites that elevate brands and drive
						business growth through a perfect blend of creativity, technology,
						and expertise.
					</p>
				</article>

				<article className="card">
					<IoIosRocket className="icon" />
					<h3>Fast Performance</h3>
					<p className="text-light">
						I deliver fast and optimized websites that ensure a seamless user
						experience, by utilizing the best practices in web development,
						including code splitting, lazy loading, image compression, and much
						more.
					</p>
				</article>

				<article className="card">
					<FaCode className="icon" />
					<h3>Clean Code</h3>
					<p className="text-light">
						I prioritize clean and well-structured code that is easy to
						maintain, making it a key factor in website development. I adhere to
						best practices, ensuring code is readable, maintainable, and
						efficient.
					</p>
				</article>
			</div>
		</section>
	)
}

export default Services
