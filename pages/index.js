import { useState } from "react";
import Playercard from "../Components/Playercard";
import Listdisplay from "../Components/Listdisplay";

export default function Home() {

  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-center my-8 font-bold text-3xl">Admin</h1>
      <div className="bg-slate-500 ">
        <h2 className="text-center mt-8 mb-8">Add Players</h2>
        <div className="flex justify-center h-screen">
        <Listdisplay/>
        <Listdisplay/>
        </div>
      </div>
    </div>
  );
}
