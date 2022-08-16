
import React from "react";
import BookDetails from "./data";
import Card from "./card";
import Header from "./header";


const Sortauthor=()=>
{
    const newdata=[...BookDetails].sort((a,b)=>a.author.localeCompare(b.author))
    console.log(newdata)
    return(
        <div>
            <Header></Header>
            <h1 class="text-center">Books sorted by author</h1>
            <Card value={newdata}></Card>
        
        </div>
    )
}
export default Sortauthor