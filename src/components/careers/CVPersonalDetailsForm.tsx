
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  skills: string;
  coverLetter: string;
}

interface CVPersonalDetailsFormProps {
  formData: FormData;
  formErrors: { [key: string]: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const CVPersonalDetailsForm = ({
  formData,
  formErrors,
  onChange,
}: CVPersonalDetailsFormProps) => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={onChange}
          required
          className={`mt-2 ${formErrors.name ? "border-red-500" : ""}`}
        />
        {formErrors.name && (
          <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={onChange}
          required
          className={`mt-2 ${formErrors.email ? "border-red-500" : ""}`}
        />
        {formErrors.email && (
          <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
        )}
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          required
          className={`mt-2 ${formErrors.phone ? "border-red-500" : ""}`}
        />
        {formErrors.phone && (
          <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
        )}
      </div>
      <div>
        <Label htmlFor="experience">Years of Experience *</Label>
        <Input
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={onChange}
          required
          className={`mt-2 ${formErrors.experience ? "border-red-500" : ""}`}
        />
        {formErrors.experience && (
          <p className="text-red-500 text-sm mt-1">{formErrors.experience}</p>
        )}
      </div>
    </div>

    <div>
      <Label htmlFor="skills">Key Skills </Label>
      <Textarea
        id="skills"
        name="skills"
        value={formData.skills}
        onChange={onChange}
        placeholder="List your key technical skills and competencies"
        required
        className={`mt-2 ${formErrors.skills ? "border-red-500" : ""}`}
      />
      {formErrors.skills && (
        <p className="text-red-500 text-sm mt-1">{formErrors.skills}</p>
      )}
    </div>

    <div>
      <Label htmlFor="coverLetter">Cover Letter</Label>
      <Textarea
        id="coverLetter"
        name="coverLetter"
        value={formData.coverLetter}
        onChange={onChange}
        placeholder="Tell us why you want to join Zasta Group"
        className="mt-2"
        rows={4}
      />
    </div>
  </>
);

export default CVPersonalDetailsForm;
