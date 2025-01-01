import { testimonials } from "../constants";
import { motion } from "motion/react";
const Testimonial = () => {
	return (
		<motion.div
			id="#testimonials"
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.8 }}
			className="mt-20 tracking-wide"
		>
			<motion.h2
				initial={{ y: 30, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.4, duration: 0.8 }}
				className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20"
			>
				What people are saying
			</motion.h2>
			<div className="flex flex-wrap justify-center">
				{testimonials.map((item, index) => (
					<div
						key={index}
						className="w-full sm:w-1/2 lg:w-1/3 px-3 py-2"
					>
						<div className="bg-neutral-900 rounded-lg  p-6 text-md border border-neutral-800 font-thin">
							<p>{item.text}</p>
							<div className="flex mt-8 items-start">
								<img
									src={item.image}
									alt={item.user}
									className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
								/>
								<div>
									<h3>{item.user}</h3>
									<span className="text-sm font-normal italic text-neutral-500">
										{item.company}
									</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</motion.div>
	);
};

export default Testimonial;
