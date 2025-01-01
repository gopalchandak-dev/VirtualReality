import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-scroll";

const menuVariants = {
	hidden: { opacity: 0.5, y: -20 },
	visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

	const toggleDrawerOpen = () => setDrawerOpen(!drawerOpen);

	return (
		<nav className="sticky top-0 z-10 py-4 backdrop-blur-lg border-b border-neutral-800/70">
			<div className="container px-10 mx-auto relative text-sm">
				<div className="flex justify-between items-center">
					<div className="flex items-center flex-shrink-0">
						<Link
							to={"#hero"}
							smooth={true}
							duration={500}
							spy={true}
							offset={-90}
						>
							<img
								src={logo}
								alt="logo"
								className="w-10 h-10 mr-2 cursor-pointer"
							/>
						</Link>
						<Link
							to={"#hero"}
							smooth={true}
							duration={500}
							spy={true}
							offset={-90}
						>
							<span className="text-xl tracking-tighter cursor-pointer">
								Virtual Reality
							</span>
						</Link>
					</div>
					<ul className="hidden lg:flex space-x-12 ml-10">
						{navItems.map((item, index) => (
							<motion.li
								key={index}
								whileHover={{ scale: 1.1, color: "#ff6347" }}
								whileTap={{ scale: 0.95 }}
							>
								<Link
									to={item.href}
									smooth={true}
									duration={500}
									spy={true}
									offset={-90}
									className="cursor-pointer"
								>
									{item.label}
								</Link>
							</motion.li>
						))}
					</ul>
					<div className="hidden lg:flex justify-center space-x-12 items-center">
						<a href="#" className="py-2 px-3 border rounded-lg">
							Sign In
						</a>
						<a
							href="#"
							className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3  rounded-lg"
						>
							Create a account
						</a>
					</div>
					<div className="lg:hidden md:flex flex-col justify-end">
						<button
							onClick={toggleDrawerOpen}
							className="transition duration-300 hover:scale-105 hover:font-semibold"
						>
							{drawerOpen ? <X /> : <Menu />}
						</button>
					</div>
				</div>
				{drawerOpen && (
					<motion.div
						variants={menuVariants}
						initial="hidden"
						animate="visible"
						transition={{ duration: 0.4, ease: "easeIn" }}
						className="fixed right-0 top-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden"
					>
						<ul>
							{navItems.map((item, index) => (
								<li
									key={index}
									className="py-4 flex justify-center items-center hover:scale-105 transition duration-200"
								>
									<Link
										to={item.href}
										smooth={true}
										duration={500}
										spy={true}
										offset={-80}
										className="text-xl"
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
						<div className="py-4 flex items-center w-full justify-between px-10   ">
							<a
								href="#"
								className="py-2 px-3 border rounded-lg ml-10 "
							>
								Sign In
							</a>
							<a
								href="#"
								className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3  rounded-lg"
							>
								Create a account
							</a>
						</div>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
