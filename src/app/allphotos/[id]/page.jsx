import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const photodetailidpage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`https://examplefive.vercel.app/data.json`);
    const data = await res.json();

    const photo = data.find((item) => item.id === Number(id));

    //  console.log(photo);


    return (
        <div>
            <Card className="overflow-hidden rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300">
                {/* Image */}
                <div className="flex justify-center p-4">
                    <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px]">
                        <Image
                            src={photo.imageUrl}
                            alt={photo.title}
                            fill
                            className="object-cover"
                        />
                        <Chip className="absolute right-2 top-2" size="sm">{photo.category}</Chip>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4">
                    <h3 className="font-semibold text-sm sm:text-base text-center line-clamp-2">
                        {photo.title}
                    </h3>

                    <div className="mt-3 flex items-center justify-between">
                        {/* Likes */}
                        <div className="flex items-center gap-2 text-sm">
                            <FaHeart className="text-red-500" />
                            <span>{photo.likes}</span>
                        </div>

                        <Separator
                            orientation="vertical"
                            className="h-5"
                        />

                        {/* Downloads */}
                        <div className="flex items-center gap-2 text-sm">
                            <IoMdDownload className="text-lg" />
                            <span>{photo.downloads}</span>
                        </div>
                    </div>
                </div>

                <Button className="w-full" variant="outline">Purchase Now</Button>


            </Card>
        </div>
    );
};

export default photodetailidpage;