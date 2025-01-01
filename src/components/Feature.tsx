import { motion } from "framer-motion";
import { features } from "../constants";

const Feature = () => {
	return (
		<motion.div
			id="#features"
			className="relative mt-20 border-b border-neutral-800 min-h-[800px]"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.8 }}
		>
			<div className="text-center">
				<motion.span
					className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-3 py-2 uppercase"
					initial={{ scale: 0.8, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
				>
					feature
				</motion.span>
				<motion.h2
					className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide"
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.8 }}
				>
					Easily build{" "}
					<span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
						your code
					</span>
				</motion.h2>
			</div>
			<div className="flex flex-wrap mt-20 lg:mt-20">
				{features.map((item, index) => (
					<motion.div
						key={index}
						className="w-full sm:w-1/2 lg:w-1/3"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.1 }}
						transition={{ delay: index * 0.2, duration: 0.5 }}
					>
						<div className="flex">
							<div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
								{item.icon}
							</div>
							<div>
								<h2 className="mt-2 mb-6 text-xl">
									{item.text}
								</h2>
								<p className="text-md p-2 mb-20 text-neutral-500">
									{item.description}
								</p>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

export default Feature;
