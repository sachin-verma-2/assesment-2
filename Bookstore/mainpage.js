import React from "react";
import Header from "./header";
import BookDetails from "./data";
import Card from "./card";


// this is the front page of a website

const Lead=()=>
{
    return(
        <div>
            {/* in the header we can created a navbar bar to move from onr route to another */}
            <Header></Header>
            <h1 className="text-center">Book store application</h1>
            {/* this is the component which is containing card elements */}
            <Card value={BookDetails}></Card>

        </div>
    )
}
export default Lead



