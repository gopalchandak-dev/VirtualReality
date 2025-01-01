import { CheckCircle2 } from "lucide-react";
import codeimg from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { motion } from "framer-motion";

const Workflow = () => {
	return (
		<motion.div
			id="#workflow"
			className="mt-20 "
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.8 }}
		>
			<motion.h2
				initial={{ y: 30, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.4, duration: 0.8 }}
				className="text-3xl  sm:text-5xl lg:text-6xl mt-6 tracking-wide text-center"
			>
				Accelerate your{" "}
				<span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
					coding workflow.
				</span>
			</motion.h2>
			<div className="flex flex-wrap justify-center">
				<div className="p-2 w-full lg:w-1/2">
					<img src={codeimg} alt="code" />
				</div>
				<div className="pt-12 w-full lg:w-1/2">
					{checklistItems.map((item, index) => (
						<div key={index} className="flex mb-12">
							<div className="flex mx-6 h-10 w-10  p-2 bg-neutral-900 text-green-400 justify-center items-center rounded-full">
								<CheckCircle2 />
							</div>
							<div>
								<h3 className="mt-1 mb-2 text-xl">
									{item.title}
								</h3>
								<p className="text-md text-neutral-500">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default Workflow;
