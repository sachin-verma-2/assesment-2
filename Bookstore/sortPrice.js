import React from "react";
import BookDetails from "./data";
import Card from "./card";
import Header from "./header";


const SortPrice=()=>
{
    const newdata=[...BookDetails].sort((a,b)=>Number(a.price)-Number(b.price))
    return(
        <div>
            <Header></Header>
            <h1 class="text-center">Books sorted to Price</h1>
            <Card value={newdata}></Card>
        </div>
    )

}
export default SortPrice