import React from "react"
import "./footer.css"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

function Footer() {
	return (
		<footer className="footer" id="footer">
			<a href="#" className="footer_logo">
				Mohamed Zaki
			</a>

			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer_socials">
				<a
					href="https://www.facebook.com/mohamedzaki599"
					target="_blank"
					rel="noreferrer"
				>
					<FaFacebookF />
				</a>

				<a href="https://x.com/MohamedZaki599" target="_blank" rel="noreferrer">
					<FaXTwitter />
				</a>

				<a
					href="https://www.instagram.com/mohamedzaki599/"
					target="_blank"
					rel="noreferrer"
				>
					<FaInstagram />
				</a>
			</div>

			<div className="footer_copyright">
				<small>
					&copy; <a href="#">Mohamed Zaki</a> All rights reserved 2025
				</small>
			</div>
		</footer>
	)
}

export default Footer
