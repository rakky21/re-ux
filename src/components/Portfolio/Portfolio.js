import React from "react";

function Portfolio() {
    return (
        <section className="">
            {/* keep on the left and  */}
            <h1 className="card col-4 align-items-start" style={ {background:"grey", width:"18rem"}}> My Portfolio </h1>
            {/* picture will aline with the edge */}
            <img src="" className="img-thumbnail my-2" alt="Una Foto Aqui"></img>
            {/* remove background stretch it out downwards */}
            <div className="card-body col-4" style={ {background:"blue", width:"18rem"}}>
                <p className="card-text my-2 col-4">This is all that I've accomplished about me.</p>
            </div>
        </section>
        // {/* <div class="card" style="width: 18rem;">
        //   <img src="..." class="card-img-top" alt="..."></img>
        //   <div class="card-body">
        //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //   </div>
        // </div> */}
    )
}

export default Portfolio;