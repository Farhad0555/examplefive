import Photocard from "./Photocard";

const Topgeneration = async () => {
    const res = await fetch(`https://examplefive.vercel.app/data.json`);
    const  topphotoes= await res.json();
    const  photoes = topphotoes.slice(0,8);
    return (
        <div>
            <h1 className="text-center m-5 p-5">TOP Product</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                   photoes.map(photo=> <Photocard key={photo.id} photo={photo} ></Photocard>) 
                }
            </div>
        </div>
    );
};

export default Topgeneration;