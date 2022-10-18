import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import requests from "./lib/http/requests";
import NotFound from "./lib/NotFound";
import GetRegistrerForflytning from "./RegistrerForflytning";

export function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={ <GetRegistrerForflytning forflytningApi={ requests }/> }/>
                <Route path="*" element={ <NotFound/> }/>
            </Routes>
        </BrowserRouter>
    );
}
