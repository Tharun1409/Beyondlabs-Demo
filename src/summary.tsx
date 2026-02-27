


import type { FormData } from "./App";

type Props = {
  formData: FormData;
};

const Summary = ({ formData }: Props) => {
  return (
    <div className="section">
        <h2 className="subtitle">Summary</h2>

        <div className="summary">
            <div className="row">
                <span className="key">Full Name:</span>
                <span className="value">{formData.fullName}</span>
            </div>
            <div className="row">
                <span className="key">Email:</span>
                <span className="value">{formData.email}</span>
            </div>
            <div className="row">
                <span className="key">Role:</span>
                <span className="value">{formData.role || "-"}</span>
            </div>

            <div  className="row">
                <span className="key"> Terms Accepted</span>
                <span className="value">{formData.termsAccepted ? "Yes" : "No"}</span>
            </div>

        </div>


    </div>
)
}

export default Summary;