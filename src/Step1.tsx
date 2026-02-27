import React from "react";

import type { FormData} from  "./App";

type Props = {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

const Step1: React.FC<Props> = ({ formData, setFormData } : Props) => {
       return (
           <div className="section">
            <h2 className="subtitle"> Step 1 : Basic Information</h2>
            <label className="label">Full Name <span className="req"> *</span></label>
            <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData((prev : any) => ({...prev, fullName: e.target.value}))}
            />
              <label className="label">Email Addrres <span className="req"> *</span></label>
            <input
                type="text"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={(e) => setFormData((prev : any) => ({...prev, email: e.target.value}))}
            />

            <p className="hint"> Both fields are required to enable Next.</p>
           </div>

           
        );
};

export default Step1;
