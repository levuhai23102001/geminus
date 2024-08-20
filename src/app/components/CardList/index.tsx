import React from "react";

type CardListProps = {
    children: React.ReactNode;
};

export const CardList = ({ children }: CardListProps) => {
    return (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4 p-4">
            {children}
        </div>
    );
};
