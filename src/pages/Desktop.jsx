import DesktopMain from "../features/DesktopMain";
import Taskbar from "../features/Taskbar";

function Desktop() {
    
    return (
        <div
            id="desktop"
            className="w-full h-full flex flex-col"
        >
            <DesktopMain />
            <Taskbar />
        </div>
    );
}

export default Desktop;