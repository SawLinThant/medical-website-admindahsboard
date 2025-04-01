"use client";

import { cn } from "@/lib/utils";
import { FileUp, X } from "lucide-react";
import { useRef } from "react";

interface PdfUploadFieldProps {
  className?: string;
  onFileSelect: (files: FileList) => void;
  multiple?: boolean;
}

const PdfUploadField: React.FC<PdfUploadFieldProps> = ({
  className,
  onFileSelect,
  multiple = false,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // Check if all files are PDFs
      const allPdfs = Array.from(files).every(
        (file) => file.type === "application/pdf"
      );

      if (!allPdfs) {
        alert("Please upload PDF files only");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        return;
      }

      onFileSelect(files);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "min-h-[10rem] w-full border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center gap-2 p-4 hover:cursor-pointer hover:border-gray-400",
        className
      )}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf"
        multiple={multiple}
        className="hidden"
      />
      <FileUp className="w-10 h-10 text-gray-400" />
      <div className="text-center">
        <p className="text-sm text-gray-600">Click to upload PDF</p>
        <p className="text-xs text-gray-400">PDF files only</p>
      </div>
    </div>
  );
};

export default PdfUploadField; 