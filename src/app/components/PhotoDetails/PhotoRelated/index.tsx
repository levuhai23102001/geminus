import React from "react";
import { CardPhoto, CardPhotoList } from "../../Card/CardPhoto";
import { CardList } from "../../CardList";
import useSWRImmutable from "swr/immutable";
import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {};

const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);

export const PhotoRelated = (props: Props) => {
    const router = useRouter();
    const { data } = useSWRImmutable<[]>(
        `https://api.unsplash.com/collections/206/photos?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}&count=10`,
        fetcher
    );

    const handleDetails = (id: string) => {
        router.push(`/photos/${id}`);
    };

    return (
        <div className="relative w-full h-full mt-5">
            <h2 className="text-xl text-center my-2 text-black dark:text-white font-semibold">
                More content to explore
            </h2>
            <CardList>
                {data?.map((image: any) => (
                    <CardPhoto
                        key={image.id}
                        item={image}
                        handleGetDetails={handleDetails}
                    />
                ))}
            </CardList>
        </div>
    );
};
