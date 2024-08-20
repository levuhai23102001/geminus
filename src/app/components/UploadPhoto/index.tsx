"use client";

import { UploadIconCircle } from "@/app/components/Icons";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Switch } from "@/components/ui/switch";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import * as Yup from "yup";
import { ISubject, SUBJECTS_DATA } from "../../../constants";

type UploadPhotoProps = {};

interface IFormData {
    imageUrl: string;
    title: string;
    desc: string;
    link: string;
    subjects?: [];
    comment?: {
        allowed: boolean;
        comments: [];
    };
    relatedPhoto?: boolean;
}

export const UploadPhoto = (props: UploadPhotoProps) => {
    const [isOptionOpen, setIsOptionOpen] = useState(false);
    const [image, setImage] = useState("");
    const [subjectValue, setSubjectValue] = useState<string>("");
    const [subjects, setSubjects] = useState<ISubject[]>([]);
    const [suggestions, setSuggestions] = useState<ISubject[]>([]);
    const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
    const i18n = useTranslations();

    const validationSchema = Yup.object().shape({
        imageUrl: Yup.string().trim().required("Image URL is required"),
        title: Yup.string().trim().required("Title is required"),
        desc: Yup.string().trim().required("Description is required"),
        link: Yup.string().trim().required("Link is required"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
        watch,
    } = useForm<IFormData>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            title: "",
            desc: "",
            link: "",
            subjects: [],
            imageUrl: "",
            comment: {
                allowed: true,
                comments: [],
            },
            relatedPhoto: true,
        },
    });

    const formValues = watch();

    const onSubmit: SubmitHandler<IFormData> = (data) => {
        const params = {
            id: Math.floor(Math.random() * 100000),
            ...data,
            subjects: subjects,
        };
        console.log(params);
        reset({
            title: "",
            desc: "",
            link: "",
            subjects: [],
            imageUrl: "",
            comment: {
                allowed: true,
                comments: [],
            },
            relatedPhoto: true,
        });
        setImage("");
        setSubjectValue("");
        setSubjects([]);
    };

    const handleChange = (key: any, event: any) => {
        const { value } = event.target;
        setValue(key, value);
    };

    const handleInputSubjectChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target;
        setSubjectValue(value);

        const filteredSuggestions = SUBJECTS_DATA.filter(
            (subject: ISubject) =>
                subject.name
                    .toLowerCase()
                    .includes(value.trim().toLowerCase()) &&
                !subjects.includes(subject)
        );
        setSuggestions(filteredSuggestions);
        console.log("check", filteredSuggestions);
        setIsFilterVisible(subjectValue.trim() !== "");
    };

    const addSubject = (subject: ISubject) => {
        const newSubjects = [...subjects, subject];
        setSubjects(newSubjects);
        // setSuggestions([]);
        setIsFilterVisible(false);
    };

    const removeSubject = (subjectToRemove: number) => {
        const newSubjects = subjects.filter(
            (subject) => subject.id !== subjectToRemove
        );
        setSubjects(newSubjects);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && subjectValue.trim().toLowerCase() !== "") {
            const matchingSubject = SUBJECTS_DATA.find(
                (subject: ISubject) =>
                    subject.name.toLowerCase() ===
                    subjectValue.trim().toLowerCase()
            );
            if (
                matchingSubject &&
                !subjects.some((s) => s.name === matchingSubject.name)
            ) {
                addSubject(matchingSubject);
            } else if (!matchingSubject) {
                const newSubject = {
                    id: Math.random(),
                    name: subjectValue.trim().toLowerCase(),
                    imageBg: "",
                };
                addSubject(newSubject);
            }
            setSubjectValue("");
            setIsFilterVisible(false);
        }
    };

    const handleImageUpload = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            setValue("imageUrl", imageUrl);
        }
    };

    return (
        <div className="relative w-full h-full">
            <div className="fixed z-[999] left-[17.25rem] w-[calc(100%-17.25rem)] h-[80px] px-6 flex items-center justify-between backdrop-blur bg-transparent supports-backdrop-blur:bg-white/60 dark:bg-transparent">
                <h1 className="text-xl text-black dark:text-white font-medium">
                    {i18n("Upload.Create.CreatePins")}
                </h1>
                <button
                    type="button"
                    className="bg-[#8556fe] text-white font-semibold py-2 px-5 w-fit h-fit rounded-3xl"
                    onClick={handleSubmit(onSubmit)}
                >
                    {i18n("Upload.Create.UploadButton")}
                </button>
            </div>
            <form className="flex gap-8 pt-24">
                <div className="relative w-[50%] max-w-[375px] h-full">
                    {image ? (
                        <Image
                            src={image}
                            alt="image"
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover rounded-3xl mb-4"
                        />
                    ) : (
                        <div className="w-full h-[475px] flex items-center justify-center flex-col p-4 bg-[#7070706b] border-2 border-dashed border-gray-400 rounded-3xl cursor-pointer">
                            <div className="text-3xl">{UploadIconCircle}</div>
                            <div className="mt-2 text-base leading-normal">
                                {i18n("Upload.Create.ChooseFile")}
                            </div>
                        </div>
                    )}
                    <input
                        id="image-upload"
                        type="file"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                    {errors.imageUrl && (
                        <span className="text-[#8556fe] text-sm">
                            {errors.imageUrl.message}
                        </span>
                    )}
                </div>
                <div className="w-[50%] flex flex-col">
                    <div className="mb-6">
                        <h2 className="mb-2 text-sm text-black dark:text-white">
                            {i18n("Upload.Create.Title")}
                        </h2>
                        <div
                            className={`w-full m-0 px-4 py-3 rounded-2xl border-solid border-2 ${
                                errors.title
                                    ? "border-[#8556fe]"
                                    : "border-[#cacaca]"
                            }`}
                        >
                            <input
                                {...register("title")}
                                type="text"
                                placeholder="Add a title"
                                className="w-full text-base font-normal border-none bg-transparent outline-none p-0 text-black dark:text-white placeholder-[#cacaca]"
                                onChange={(event) =>
                                    handleChange("title", event)
                                }
                            />
                        </div>
                        {errors.title && (
                            <span className="text-[#8556fe] text-sm">
                                {errors.title.message}
                            </span>
                        )}
                    </div>
                    <div className="mb-6">
                        <h2 className="mb-2 text-sm text-black dark:text-white">
                            {i18n("Upload.Create.Description")}
                        </h2>
                        <div
                            className={`w-full m-0 px-4 py-3 rounded-2xl border-solid border-2 ${
                                errors.desc
                                    ? "border-[#8556fe]"
                                    : "border-[#cacaca]"
                            }`}
                        >
                            <textarea
                                {...register("desc")}
                                placeholder="Add a description"
                                className="w-full text-base font-normal border-none resize-none bg-transparent outline-none p-0 text-black dark:text-white placeholder-[#cacaca]"
                                onChange={(event) =>
                                    handleChange("desc", event)
                                }
                            />
                        </div>
                        {errors.desc && (
                            <span className="text-[#8556fe] text-sm">
                                {errors.desc.message}
                            </span>
                        )}
                    </div>
                    <div className="mb-6">
                        <h2 className="mb-2 text-sm text-black dark:text-white">
                            {i18n("Upload.Create.Link")}
                        </h2>
                        <div
                            className={`w-full m-0 px-4 py-3 rounded-2xl border-solid border-2 ${
                                errors.link
                                    ? "border-[#8556fe]"
                                    : "border-[#cacaca]"
                            }`}
                        >
                            <input
                                {...register("link")}
                                type="text"
                                placeholder="Add a link"
                                className="w-full text-base font-normal border-none bg-transparent outline-none p-0 text-black dark:text-white placeholder-[#cacaca]"
                                onChange={(event) =>
                                    handleChange("link", event)
                                }
                            />
                        </div>
                        {errors.link && (
                            <span className="text-[#8556fe] text-sm">
                                {errors.link.message}
                            </span>
                        )}
                    </div>
                    <div className="mb-6">
                        <h2 className="mb-2 text-sm text-black dark:text-white">
                            {i18n("Upload.Create.TaggedTopics", {
                                count: subjects.length,
                            })}
                        </h2>
                        <div className="w-full m-0 px-4 py-3 rounded-2xl border-solid border-2 border-[#cacaca]">
                            <input
                                {...register("subjects")}
                                type="text"
                                placeholder="Add subjects"
                                onKeyDown={handleKeyDown}
                                value={subjectValue}
                                className="w-full text-base font-normal border-none bg-transparent outline-none p-0 text-black dark:text-white placeholder-[#cacaca]"
                                onChange={handleInputSubjectChange}
                            />
                        </div>
                    </div>
                    <div>
                        {isFilterVisible && suggestions.length > 0 && (
                            <ul className="border border-gray-300 -mt-2 mb-4 rounded-md bg-white dark:bg-black">
                                {suggestions.map((suggestion) => (
                                    <li
                                        key={suggestion.id}
                                        className="p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-500 text-black dark:text-white"
                                        onClick={() => addSubject(suggestion)}
                                    >
                                        {suggestion.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {subjects.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6">
                                {subjects.map((subject) => (
                                    <span
                                        key={subject.id}
                                        className="bg-gray-200 rounded-3xl px-3 py-1 text-sm font-semibold text-gray-700"
                                    >
                                        {subject.name}
                                        <button
                                            type="button"
                                            className="ml-2 text-red-500"
                                            onClick={() =>
                                                removeSubject(subject.id)
                                            }
                                        >
                                            &times;
                                        </button>
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="mb-6">
                        <Collapsible
                            open={isOptionOpen}
                            onOpenChange={setIsOptionOpen}
                        >
                            <CollapsibleTrigger>
                                <div className="flex items-center gap-1">
                                    <h2 className="text-black dark:text-white text-base">
                                        {i18n("Upload.Create.OtherOptions")}
                                    </h2>
                                    {isOptionOpen ? (
                                        <MdKeyboardArrowUp size={24} />
                                    ) : (
                                        <MdKeyboardArrowDown size={24} />
                                    )}
                                </div>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <div className="flex flex-col gap-4 mt-4">
                                    <div className="flex items-center space-x-3">
                                        <Switch
                                            checked={
                                                formValues.comment?.allowed
                                            }
                                            onCheckedChange={(checked) =>
                                                setValue(
                                                    "comment.allowed",
                                                    checked
                                                )
                                            }
                                        />
                                        <h2 className="text-black dark:text-white text-base">
                                            {i18n("Upload.Create.AllowComment")}
                                        </h2>
                                    </div>
                                    <div className="flex space-x-3">
                                        <Switch
                                            checked={formValues.relatedPhoto}
                                            onCheckedChange={(checked) =>
                                                setValue(
                                                    "relatedPhoto",
                                                    checked
                                                )
                                            }
                                        />
                                        <div>
                                            <h2 className="text-black dark:text-white text-base mb-2">
                                                {i18n(
                                                    "Upload.Create.ShowSimilarProducts.Title"
                                                )}
                                            </h2>
                                            <p className="text-black dark:text-white text-sm">
                                                {i18n(
                                                    "Upload.Create.ShowSimilarProducts.Description"
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                </div>
            </form>
        </div>
    );
};
