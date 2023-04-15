import Navbar from "./component/navbar";
import Hiro from "./component/hiro";
import About from "./component/about";
import Project from "./component/project";
import Quote from "./component/Quote";
import Contact from "./component/contact";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <main>
      <Navbar />
      <Hiro />
      <About />
      <Project />
      <Quote />
      <Contact />
    </main>
  );
};

export default Portfolio;
