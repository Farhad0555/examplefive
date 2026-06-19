import Photocard from "./Photocard";

const Topgeneration = async () => {
    const res = await fetch(`https://examplefive.vercel.app/data.json`);
    const  topphotoes= await res.json();
    const  photoes = topphotoes.slice(0,6);
    return (
        <div>
            <h1>TOP Product</h1>
            <div className="grid grid-cols-3 gap-1">
                {
                   photoes.map(photo=> <Photocard key={photo.id} photo={photo} ></Photocard>) 
                }
            </div>
        </div>
    );
};

export default Topgeneration;