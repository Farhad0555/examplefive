import { Card } from "@heroui/react";
import Image from "next/image";

const Photocard = ({photo}) => {

    return (
        <div>
            <Card>
                <div>
                    <Image 
                    src={photo.imageUrl}
                    alt="photoone"
                    height={200}
                    width={200}
                    />
                </div>

            </Card>
        </div>
    );
};

export default Photocard;