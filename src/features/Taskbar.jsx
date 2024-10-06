
function Taskbar(props) {
    
    const openFiles = props.openFiles;
    
    return (
        <div className="bg-blue flex justify-center items-center">
            <button id="logo" className="hover:bg-white hover:bg-opacity-25 rounded-lg m-1">
                <img 
                    src="/assets/images/logo.png" 
                    alt="logo" 
                    className="h-16"
                />
            </button>
        </div>
    );
}

export default Taskbar;