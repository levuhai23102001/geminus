import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardPhotoList } from "../../Card/CardPhoto";

type Props = {};

export const ProfileTabs = (props: Props) => {
    return (
        <Tabs defaultValue="videos" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="liked">Liked</TabsTrigger>
            </TabsList>
            <TabsContent value="videos">
                <CardPhotoList />
            </TabsContent>
            <TabsContent value="photos">
                <CardPhotoList />
            </TabsContent>
            <TabsContent value="liked">
                <CardPhotoList />
            </TabsContent>
        </Tabs>
    );
};
