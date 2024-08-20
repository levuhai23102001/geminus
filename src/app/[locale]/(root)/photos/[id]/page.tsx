"use client";

import { PhotoDetails } from "@/app/components/PhotoDetails";
import { PhotoRelated } from "@/app/components/PhotoDetails/PhotoRelated";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

type PhotoDetailsPageProps = {};

const PhotoDetailsPage = (props: PhotoDetailsPageProps) => {
    const { id } = useParams();
    const [photo, setPhoto] = useState<any>({});
    const outSideRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const response = await axios.get(
                    `https://api.unsplash.com/photos/${id}/?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
                );
                setPhoto(response.data);
            } catch (error) {
                console.error("Error fetching photo details:", error);
            }
        };
        fetchPhoto();
    }, [id]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                outSideRef.current &&
                outSideRef.current.contains(event.target as Node)
            ) {
                if (event.target === outSideRef.current) {
                    router.back();
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [router]);

    return (
        <div className="w-full h-full flex flex-col py-5">
            <div
                className="w-full h-full flex justify-center cursor-zoom-out"
                ref={outSideRef}
            >
                {photo && <PhotoDetails photo={photo} />}
            </div>
            <PhotoRelated />
        </div>
    );
};

export default PhotoDetailsPage;
