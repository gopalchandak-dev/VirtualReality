import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { motion } from "motion/react";

const Hero = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.8 }}
			className="flex flex-col items-center mt-6 lg:mt-20"
			id="#hero"
		>
			<h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
				Virtual Reality build tools{" "}
				<span className="bg-gradient-to-r from-orange-500 to-red-900 text-transparent bg-clip-text">
					{" "}
					for developers
				</span>
			</h1>
			<p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
				Design immersive experiences, craft interactive environments,
				and bring ideas to life with cutting-edge VR tools. Whether
				you're building games, simulations, or innovative applications,
				our tools empower you to push boundaries and redefine what's
				possible in virtual reality. Start creating the future today!
			</p>
			<div className="flex justify-center my-10">
				<a
					href="#"
					className="bg-gradient-to-r from-orange-500 to-red-900 py-3 px-4 mx-3 rounded-lg focus:ring-2 focus:ring-red-400"
				>
					Start for free
				</a>
				<a href="#" className="py-3 px-4 mx-3 rounded-lg border-2 ">
					Documentation
				</a>
			</div>
			<div className="flex mt-10 justify-center">
				<video
					muted
					autoPlay
					loop
					className="rounded-lg w-1/2 border-2 border-orange-700  shadow-orange-400 mx-2 my-4"
				>
					<source src={video2} type="video/mp4" />
					Your brower does not support the video tag.
				</video>
				<video
					muted
					autoPlay
					loop
					className="rounded-lg w-1/2  border-2 border-orange-700   shadow-orange-400 mx-2 my-4"
				>
					<source src={video1} type="video/mp4" />
					Your brower does not support the video tag.
				</video>
			</div>
		</motion.div>
	);
};

export default Hero;
