import React from "react";
import BookDetails from "./data";
import Card from "./card";
import Header from "./header";

const Sortrating=()=>
{
    const newdata=[...BookDetails].sort((a,b)=>Number(a.rating)-Number(b.rating))
    return(
        <div>
            <Header></Header>
            <h1 class="text-center">Books sorted according to Rating</h1>
            <Card value={newdata}></Card>
         </div>
    )
}
export default Sortrating