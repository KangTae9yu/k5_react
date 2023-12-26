import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frcst from "./Frcst";
import FrcstDetail from "./FrcstDetail";
import FrcstHeader from "./FrcstHeader";

export default function FrcstMain() {
    return (
        <BrowserRouter>
            <FrcstHeader />
            <Routes>
                <Route path="/" element={<Frcst />} />
                <Route path="/detail" element={<FrcstDetail />} />
            </Routes>
        </BrowserRouter>
    )
}
