"use client"
import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const Photocard = ({ photo }) => {
    const handlebuttonphoto=()=>{
        alert("Clicked")
    }
  return (
    <Card className="overflow-hidden rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          fill
          className="object-cover"
        />
        <Chip className="absolute right-2 top-2" size="sm">{photo.category}</Chip>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-sm sm:text-base line-clamp-2">
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
      <Link href={`/allphotos/${photo.id}`}>
            <Button onClick={handlebuttonphoto} className="w-full" variant="outline">View</Button>

      </Link>
    </Card>
  );
};

export default Photocard;