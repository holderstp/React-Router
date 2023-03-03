import React from "react";
import imgs from "../static/Model-S.jpg";

const ModelS= ()=>{
    return (
        <main  className="container-lg w-screen h-screen  bg-cover " style={{ backgroundImage: `url(${imgs})`}}>
             <div className=" flex flex-col h-16 items-center justify-center space-y-4 ">
            <p className="text-5xl mt-[900px] text-white">Model S</p>
            <p className="underline underline-offset-2 text-xl text-white">Plaid</p>

            <div className="flex items-start justify-center space-x-6 w-full pt-[600px] ">
                <button className="border-2 border-white h-10 w-1/4 rounded-3xl uppercase text-white hover:bg-white hover:text-black"> Custom Order</button>
                <button className="border-2 border-white h-10 w-1/4 rounded-3xl uppercase text-white hover:bg-white hover:text-black"> Existing Inventory</button>
            </div>


        </div>
        </main>
    )
}

export default ModelS