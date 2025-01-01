import Workflow from "./components/Workflow";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div>
			<Navbar />
			<div className="max-w-7xl mx-auto pt-20 px-6 ">
				<Hero />
				<Feature />
				<Workflow />
				<Price />
				<Testimonial />
				<Footer />
			</div>
		</div>
	);
};

export default App;
