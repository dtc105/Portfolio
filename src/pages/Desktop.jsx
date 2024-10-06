import { useState } from "react";
import DesktopMain from "../features/DesktopMain";
import Taskbar from "../features/Taskbar";

function Desktop() {

    const [files, setFiles] = useState([
        {
            type: "folder",
            name: "Experiences",
            img: "yellow-folder.png",
        },
        {
            type: "folder",
            name: "Projects",
            img: "blue-folder.png"
        },
    ]);

    const [openFiles, setOpenFiles] = useState([]);

    
    return (
        <div
            id="desktop"
            className="w-full h-full flex flex-col"
        >
            <DesktopMain files={files} />
            <Taskbar openFiles={openFiles} />
        </div>
    );
}

export default Desktop;