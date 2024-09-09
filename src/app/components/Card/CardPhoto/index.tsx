"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSWRImmutable from "swr/immutable";
import { HeartIcon, ShareIcon } from "../../Icons";
import { useRouter } from "next/navigation";
import { CardList } from "../../CardList";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocale } from "next-intl";
import { LogoLoader } from "../../Loader/LogoLoader";
import { DotLoader } from "../../Loader/DotLoader";

type CardPhotoProps = {
    item: any;
    handleGetDetails: (id: string) => void;
};

const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);

export const CardPhotoList = () => {
    const router = useRouter();
    const locale = useLocale();
    const [page, setPage] = useState<number>(1);
    const [photos, setPhotos] = useState<[]>([]);
    const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
    const { data, error } = useSWRImmutable<[]>(
        `https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}&page=${page}&per_page=15`,
        fetcher
    );

    useEffect(() => {
        if (data && !error) {
            setPhotos((prev) => [...prev, ...data]);
            setLoadingInitial(false);
        }
    }, [data, error]);

    const loadMoreData = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handleDetails = (id: string) => {
        router.push(`/${locale}/photos/${id}`);
    };

    return (
        <>
            {loadingInitial && <LogoLoader />}
            {!loadingInitial && !error && photos.length > 0 && (
                <InfiniteScroll
                    dataLength={photos.length}
                    next={loadMoreData}
                    hasMore={!!data && data.length > 0}
                    loader={<DotLoader />}
                >
                    <CardList>
                        {photos.map((photo: any, index: number) => (
                            <CardPhoto
                                key={index}
                                item={photo}
                                handleGetDetails={handleDetails}
                            />
                        ))}
                    </CardList>
                </InfiniteScroll>
            )}
        </>
    );
};

export const CardPhoto = ({ item, handleGetDetails }: CardPhotoProps) => {
    return (
        <div
            className="relative overflow-hidden group cursor-zoom-in"
            onClick={() => handleGetDetails(item.id)}
        >
            <Image
                className="rounded-md w-full"
                src={item.urls.regular}
                alt={item.slug}
                width={1000}
                height={1000}
            />
            <div className="absolute h-full w-full bg-black/40 flex top-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="absolute top-2 right-2 bg-[#7b39ff] text-white font-semibold py-2 px-5 w-fit h-fit rounded-3xl">
                    Save
                </button>
                <div className="absolute bottom-2 right-2 flex gap-1 cursor-pointer">
                    <div className="rounded-full bg-white p-2 text-black">
                        {ShareIcon}
                    </div>
                    <div className="rounded-full bg-white p-2 text-black">
                        {HeartIcon}
                    </div>
                </div>
            </div>
        </div>
    );
};
