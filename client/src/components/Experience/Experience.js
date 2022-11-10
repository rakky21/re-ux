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
      id: 14,
      name: "HTML",
      Icon: [DiCss3],
      experiencia: "Experienced",
      group: "frente",
    },
    {
      id: 2,
      name: "CSS",
      Icon: [DiCss3],
      experiencia: "Experienced",
      group: "frente",
    },
    {
      id: 3,
      name: "Canvas",
      Icon: [SiPlaycanvas],
      experiencia: "Beginner",
      group: "frente",
    },
    {
      id: 4,
      name: "JS",
      Icon: [SiJavascript],
      experiencia: "Experienced",
      group: "frente",
    },
    {
      id: 5,
      name: "React",
      Icon: [FaReact],
      experiencia: "Experienced",
      group: "frente",
    },
    {
      id: 6,
      name: "JQuery",
      Icon: [SiJquery],
      experiencia: "Intermidiate",
      group: "frente",
    },
    {
      id: 7,
      name: "3JS",
      Icon: SiThreedotjs,
      experiencia: "Beginner",
      group: "frente",
    },
    {
      id: 8,
      name: "Node.js",
      Icon: [FaNodeJs],
      experiencia: "Experienced",
      group: "detras",
    },
    {
      id: 9,
      name: "C++",
      Icon: [CgCPlusPlus],
      experiencia: "Intermediate",
      group: "detras",
    },
    {
      id: 10,
      name: "PHP",
      Icon: [FaPhp],
      experiencia: "Intermediate",
      group: "detras",
    },
    {
      id: 11,
      name: "Express",
      Icon: [SiExpress],
      experiencia: "Experienced",
      group: "detras",
    },
    {
      id: 12,
      name: "MySQL",
      Icon: [GrMysql],
      experiencia: "Experienced",
      group: "detras",
    },
    {
      id: 13,
      name: "GraphQl",
      Icon: [GrGraphQl],
      experiencia: "Intermediate",
      group: "detras",
    },
    {
      id: 1,
      name: "MongoDB",
      Icon: [SiMongodb],
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
        nomArticulo="Front-End Development"
      />
      <Articulo
        expArticulo={articulos.filter(
          (articulo) => articulo.group === "detras"
        )}
        key={setArticulos.id}
        nomArticulo="Back-End Development"
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
