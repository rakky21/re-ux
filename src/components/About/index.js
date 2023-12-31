import Cara from "../../assets/cover/cara.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import React, { useState } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { GrMysql, GrGraphQl } from "react-icons/gr";
import {
  SiPlaycanvas,
  SiJavascript,
  SiJquery,
  SiExpress,
  SiThreedotjs,
  SiMongodb,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaPhp } from "react-icons/fa";
import Articulo from "../Articulo/index";

//FIX THE FACE!!!
function About() {
  const [articulos, setArticulos] = useState([
    {
      id: 15,
      name: "Bootstrap",
      avatar: [],
      experiencia: "Experienced",
      group: "frente",
    },
    {
      id: 14,
      name: "HTML",
      avatar: [AiFillHtml5],
      experiencia: "Experienced",
      group: "frente",
    },
    {
      id: 2,
      name: "CSS",
      avatar: [DiCss3],
      experiencia: "Experienced",
      group: "frente",
    },
    {
      id: 3,
      name: "Canvas",
      avatar: [SiPlaycanvas],
      experiencia: "Beginner",
      group: "frente",
    },
    {
      id: 4,
      name: "JS",
      avatar: [SiJavascript],
      experiencia: "Experienced",
      group: "frente",
    },
    {
      id: 5,
      name: "React",
      avatar: [FaReact],
      experiencia: "Experienced",
      group: "frente",
    },
    {
      id: 6,
      name: "JQuery",
      avatar: [SiJquery],
      experiencia: "Intermidiate",
      group: "frente",
    },
    {
      id: 7,
      name: "3JS",
      avatar: SiThreedotjs,
      experiencia: "Beginner",
      group: "frente",
    },
    {
      id: 8,
      name: "Node.js",
      avatar: [FaNodeJs],
      experiencia: "Experienced",
      group: "detras",
    },
    {
      id: 9,
      name: "C++",
      avatar: [CgCPlusPlus],
      experiencia: "Intermediate",
      group: "detras",
    },
    {
      id: 10,
      name: "PHP",
      avatar: [FaPhp],
      experiencia: "Intermediate",
      group: "detras",
    },
    {
      id: 11,
      name: "Express",
      avatar: [SiExpress],
      experiencia: "Experienced",
      group: "detras",
    },
    {
      id: 12,
      name: "MySQL",
      avatar: [GrMysql],
      experiencia: "Experienced",
      group: "detras",
    },
    {
      id: 13,
      name: "GraphQl",
      avatar: [GrGraphQl],
      experiencia: "Intermediate",
      group: "detras",
    },
    {
      id: 1,
      name: "MongoDB",
      avatar: [SiMongodb],
      experiencia: "Intermediate",
      group: "detras",
    },
  ]);

  return (
    <div style={{ display:"flex" , margin: "auto 7rem"}}>
      <section className="about_section">
        <div className="card-body card_body">
          <img
            src={Cara}
            className="card-img my-2"
            alt="Cover"
            style={{ height: "300px", width: "auto" }}
          />
          <h1 className="card-title border-bottom about_title"> Freddy </h1>
          <p className="about_description my-2">
            I'm a Full-Stack Developer. <br />
            I have work experience in React, Javascript, CSS, HTML, back &
            front-end development. <br />
            These are some personal and group projects done during and after the
            bootcamp
          </p>
          <a
            href="https://github.com/rakky21"
            target="_blank"
            rel="noreferrer"
            className="mb-3 me-2 emoticons"
          >
            <FaGithub size="2em" title="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/freddy-cribas-038713177/"
            target="_blank"
            rel="noreferrer"
            className="mb-3 me-2 emoticons"
          >
            <FaLinkedinIn size="2em" title="LinkedIn" />
            <br />
          </a>
        </div>
      </section>

      <section id="experience" className="experience">
        <Articulo
          expArticulo={articulos.filter(
            (articulo) => articulo.group === "frente"
          )}
          key={setArticulos.id}
          nomArticulo="FRONT-END DEVELOPMENT EXPERIENCE"
        />
        <Articulo
          expArticulo={articulos.filter(
            (articulo) => articulo.group === "detras"
          )}
          key={setArticulos.id}
          nomArticulo="BACK-END DEVELOPMENT EXPERIENCE"
        />
      </section>
    </div>
  );
}

export default About;
