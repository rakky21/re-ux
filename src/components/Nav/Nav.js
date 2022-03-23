import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory);
  }, [currentCategory]);

  return (
    <section
      className="nav-tabs bg-light container-fluid"
      id="navbarToggleExternalContent"
      style={{ background: "",
    float: "right"}}
    >
      {categories.map((category) => (
        <div
          className={`mx-1 ${currentCategory === category && "navActive"}`}
          key={category}
        >
          <span
            onClick={() => {
              setCurrentCategory(category);
            }}
          >
            {capitalizeFirstLetter(category)}
          </span>
        </div>
      ))}
    </section>
  );
}

export default Nav;

// render() {
//   return <span className="menu navigation-menu">Menu</span>
// }
