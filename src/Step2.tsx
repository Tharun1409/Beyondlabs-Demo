


import React from "react";
import type { FormData, Role } from "./App";

type Props = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

const Step2 = ({ formData, setFormData }: Props) => {
  return (
    <div className="section">
      <h2 className="subtitle">Step 2: Additional Details</h2>

      <label className="label">
        Role <span className="req">*</span>
      </label>
      <select
        className="input"
        value={formData.role}
        onChange={(e) =>
          setFormData((prev : any) => ({ ...prev, role: e.target.value as Role }))
        }
      >
        <option value="">Select a role</option>
        <option value="Developer">Developer</option>
        <option value="Designer">Designer</option>
        <option value="Manager">Manager</option>
      </select>

      <label className="checkboxRow">
        <input
          type="checkbox"
          checked={formData.termsAccepted}
          onChange={(e) =>
            setFormData((prev : any) => ({ ...prev, termsAccepted: e.target.checked }))
          }
        />
        <span>
          Accept Terms &amp; Conditions <span className="req">*</span>
        </span>
      </label>

      <p className="hint">Select role + accept terms to enable Submit.</p>
    </div>
  );
};

export default Step2;