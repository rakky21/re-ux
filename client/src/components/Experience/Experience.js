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
import Articulo from "../Articulo/Articulo";
//CONSOLIDATE
function Experience() {
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
    <section id="experience" className="experience">
        <Articulo
          expArticulo={articulos.filter(
            (articulo) => articulo.group === "frente"
          )}
          key={setArticulos.id}
          nomArticulo="Front-End Development Experience"
        />
        <Articulo
          expArticulo={articulos.filter(
            (articulo) => articulo.group === "detras"
          )}
          key={setArticulos.id}
          nomArticulo="Back-End Development Experience"
        />
    </section>
  );
}

export default Experience;

// ==============================={
/* <section id="experience" className="experience"> */

//   <h2> My experience</h2>

//   <div className="articles">
//     <div className="frontEndExp">
//       <h3> Front-end Development </h3> {/* <div className="articles"> */}
//       <article className="detallesdeExperiencia">
//         <h5> HTML</h5>
//         <AiFillHtml5 />
//         <small className="text-light"> Experienced </small>
//       </article>
//     </div>
//   </div>

//   {/* === BACKENDD === */}
//   <div className="backEndExp">
//     <h3> Back-end Development </h3>
//     {/* <div className="articles"> */}

//     <article className="detallesdeExperiencia">
//       <h5> Node.js </h5>
//       <FaNodeJs />
//       <small className="text-light"> Experienced </small>
//     </article>
//   </div>
//   {/* </div> */}
//   {/* </div> */}
// </section>
//  );
//};

//export default Experience;

//  TYPESCRIPT JAVA JAVASCRIPT CANVAS REACT SQL
