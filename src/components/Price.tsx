import { pricingOptions } from "../constants";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const Price = () => {
	return (
		<motion.div
			id="#pricing"
			className="mt-20"
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.8 }}
		>
			<motion.h2
				initial={{ y: 30, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.4, duration: 0.8 }}
				className="text-3xl sm:text-5xl lg:text-6xl text-center my-9 tracking-wide"
			>
				Pricing
			</motion.h2>
			<div className="flex flex-wrap">
				{pricingOptions.map((item, index) => (
					<div key={index} className="w-full lg:w-1/3 p-2">
						<div className="p-6 sm:p-8 lg:p-20 border border-neutral-700 rounded-xl">
							<p className="text-3xl sm:text-4xl lg:text-5xl mb-8">
								{item.title}
								{item.title === "Pro" && (
									<span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent text-lg sm:text-xl lg:text-xl mb-4 ml-1 bg-clip-text">
										(Most Popular)
									</span>
								)}
							</p>
							<p className="mb-8">
								<span className="text-4xl sm:text-5xl lg:text-5xl mt-6 mr-2">
									{item.price}
								</span>
								<span className="text-neutral-500 tracking-tight">
									/Month
								</span>
							</p>
							<ul>
								{item.features.map((fea, index) => (
									<li
										key={index}
										className="mt-4 sm:mt-6 flex items-center text-sm sm:text-base"
									>
										<CheckCircle2 />
										<span className="ml-2">{fea}</span>
									</li>
								))}
							</ul>
							<a
								href="#"
								className="inline-flex justify-center items-center text-center w-full h-10 sm:h-12 p-5 mt-12 sm:mt-20 tracking-tight text-lg sm:text-xl hover:bg-orange-700 border border-orange-900 rounded-lg transition duration-300"
							>
								Subscribe
							</a>
						</div>
					</div>
				))}
			</div>
		</motion.div>
	);
};

export default Price;
