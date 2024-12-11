"use client";

import { ImagePlus } from "lucide-react";
import React, { useRef, useState } from "react";

interface FileuploadProps {
  onFileSelect: (file: FileList) => void;
  multiple: boolean;
  accept?: string;
  className?: string;
}

const FileuploadField: React.FC<FileuploadProps> = ({
  onFileSelect,
  multiple = false,
  accept,
  className,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = e.dataTransfer.files;
    if (!files) {
      return;
    }
    if (!multiple && files.length > 1) {
      setError("Only one file is allwed");
      return;
    }

    const acceptedTypes = accept ? accept.split(",") : [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      const isValidFileType = acceptedTypes.some((type) => {
        const regex = new RegExp(type.replace("*", ".*"));
        return regex.test(file.type);
      });
      if (accept && !isValidFileType) {
        setError(`Invalid file type: ${file.name}`);
        return;
      }
    }
    setError(null);
    onFileSelect(files);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onFileSelect(e.target.files);
    }
  };

  const triggerFileSelect = () => {
    inputRef.current?.click();
  };
  return <div>
     <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        className={`${className} border-2 border-dashed p-6 rounded-lg text-center cursor-pointer transition-colors ${
          dragActive ? "border-primary" : "border-gray-400 bg-gray-50"
        }`}
        onClick={triggerFileSelect}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple={multiple}
          accept={accept}
          onChange={handleChange}
        />
        <div className="text-base-content/50">
          {multiple
            ? (<div className="flex flex-col gap-2 items-center justify-center">
                <ImagePlus color="black"/>
                <div className="text-black"><span className="text-inputlabel underline">Click to upload</span> or drag and frop</div>
            </div>)
            : "Drag & Drop a file here or click to upload"}
        </div>

        {/* {accept && (
        <p className="text-xs text-gray-400 mt-2">
          Accepted file types: {accept}
        </p>
      )} */}
      </div>
      {error && <p className="text-xs text-error mt-2">{error}</p>}
  </div>;
};
export default FileuploadField;
