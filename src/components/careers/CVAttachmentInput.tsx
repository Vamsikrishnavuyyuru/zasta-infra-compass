
import React, { useRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

interface CVAttachmentInputProps {
  cvFile: File | null;
  onFileChange: (file: File | null) => void;
  error?: string;
}

const CVAttachmentInput = ({
  cvFile,
  onFileChange,
  error,
}: CVAttachmentInputProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileChange(file);
    }
  };

  return (
    <div>
      <Label htmlFor="cv-upload">Upload CV/Resume *</Label>
      <div
        onClick={handleDivClick}
        className={`mt-2 border-2 border-dashed rounded-lg p-6 text-center hover:border-zasta-blue-500 transition-colors cursor-pointer ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        data-testid="cv-upload-area"
      >
        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <p className="text-gray-600">
          {cvFile ? `Selected: ${cvFile.name}` : "Click to upload or drag and drop"}
        </p>
        <p className="text-sm text-gray-400">PDF, DOC, DOCX (max 10MB)</p>
        <Input
          ref={fileInputRef}
          id="cv-upload"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          className="hidden"
          required
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CVAttachmentInput;
