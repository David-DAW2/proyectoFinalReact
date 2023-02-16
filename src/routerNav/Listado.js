import TablaDeArtistas from "../Tabla/TablaArtistas";
import MiNavBar from "./MiNavBar";

export default function Listado() {
    return (
        <>
            <MiNavBar />
            <h1>Listado</h1>
            <TablaDeArtistas></TablaDeArtistas>
        </>
    );
}