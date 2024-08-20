import { UploadPhoto } from "@/app/components/UploadPhoto";

type UploadProps = {};

const Upload = (props: UploadProps) => {
    return (
        <div className="max-w-[70%] h-full m-auto">
            <UploadPhoto />
        </div>
    );
};

export default Upload;
