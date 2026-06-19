import Photocard from "@/Component/Photocard";

const allphotospage = async () => {
    const res = await fetch(`https://examplefive.vercel.app/data.json`);
    const photoes = await res.json();
    return (
        <div>
            <h1 className="text-center text-2xl text-blue-400">All Poducts</h1>
            <div className="grid grid-cols-2 gap-3">
                {
                    photoes.map(photo=> <Photocard key={photo.id} photo={photo}></Photocard>)
                }
            </div>
        </div>
    );
};

export default allphotospage;