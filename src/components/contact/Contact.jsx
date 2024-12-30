import React from "react"
import { useRef } from "react"
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"

import emailjs from "@emailjs/browser"

const contactData = [
	{
		id: 1,
		icon: <MdOutlineEmail />,
		title: "Email",
		info: "mohamedzaky324@gmail.com",
		link: "mailto:mohamedzaky324@gmail.com",
	},
	{
		id: 2,
		icon: <RiMessengerLine />,
		title: "Messenger",
		info: "mohamedzaki599",
		link: "https://m.me/mohamedzaki599",
	},
	{
		id: 3,
		icon: <BsWhatsapp />,
		title: "Whatsapp",
		info: "+201066820752",
		link: "https://api.whatsapp.com/send?phone=201066820752",
	},
]

function Contact() {
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs.sendForm(
			"service_8rima6k",
			"template_1kidn3t",
			form.current,
			"vq2ruRJuMUqT3YBnE"
		)

		e.target.reset()
	}

	return (
		<section className="contact" id="contact">
			<div className="top_section">
				<h5>Get In Touch</h5>
				<h2>Contact Me</h2>
			</div>

			<div className="container contact_container">
				<div className="contact_options">
					{contactData.map(({ id, icon, title, info, link }) => {
						return (
							<article key={id} className="contact_option">
								{icon}
								<h4>{title}</h4>
								<h5>{info}</h5>
								<a href={link} target="_blank" rel="noreferrer">
									Send a message
								</a>
							</article>
						)
					})}
				</div>

				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input type="email" name="email" placeholder="Your Email" required />
					<textarea
						name="message"
						rows={10}
						placeholder="Enter Your Message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	)
}

export default Contact
