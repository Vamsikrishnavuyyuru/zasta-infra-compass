
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface CVZapierWebhookInputProps {
  zapierWebhook: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  show: boolean;
}

const CVZapierWebhookInput = ({
  zapierWebhook,
  onChange,
  error,
  show,
}: CVZapierWebhookInputProps) => {
  if (!show) return null;

  return (
    <div className="mb-6">
      <Label htmlFor="zapier-webhook">https://hooks.zapier.com/hooks/catch/23683786/u4bcykq/</Label>
      <Input
        id="zapier-webhook"
        name="zapier-webhook"
        value={zapierWebhook}
        onChange={onChange}
        placeholder="Paste your Zapier webhook URL here"
        className={`mt-2 ${error ? "border-red-500" : ""}`}
        autoComplete="off"
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
      <p className="text-xs text-zinc-500 mt-1">
        You can hide or remove this field once pasted.
      </p>
    </div>
  );
};

export default CVZapierWebhookInput;
