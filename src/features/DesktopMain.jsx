
function DesktopMain(props) {

    const files = props.files;
    
    return (
        <div className="flex gap-12 p-6 flex-1 bg-1">
            {
                files.map((file, key) => {
                    return (
                        <div key={key} className="grid place-content-center h-28 aspect-square hover:bg-gray hover:bg-opacity-15 rounded-lg cursor-pointer">
                            <img 
                                src={`/assets/images/${file.img}`} 
                                alt="file icon" 
                                className="h-24 -my-1"
                            />
                            <p className="max-w-24 w-11/12 text-center mx-auto text-ellipsis">
                                {file.name}
                            </p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default DesktopMain;