"use client";

import { FileText, X } from "lucide-react";

interface PdfPreviewProps {
  fileName: string;
  onRemove: () => void;
}

const PdfPreview: React.FC<PdfPreviewProps> = ({ fileName, onRemove }) => {
  return (
    <div className="w-[10rem] h-[10rem] relative flex flex-col items-center justify-center border border-gray-300 rounded-md p-4">
      <FileText className="w-12 h-12 text-gray-500" />
      <p className="text-sm text-gray-600 mt-2 truncate w-full text-center">
        {fileName}
      </p>
      <button
        onClick={onRemove}
        className="absolute top-1 right-1 hover:bg-gray-100 rounded-full p-1"
        type="button"
      >
        <X className="w-5 h-5 text-gray-500" />
      </button>
    </div>
  );
};

export default PdfPreview; 