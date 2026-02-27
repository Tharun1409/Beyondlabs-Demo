


import { useMemo, useState } from "react";
import "./App.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Summary from "./summary";

export type Role = "Developer" | "Designer" | "Manager" | "";

export type FormData = {
  fullName: string;
  email: string;
  role: Role;
  termsAccepted: boolean;
};

type Step = 1 | 2 | 3;

const intitialFormData: FormData = {
  fullName: "",
  email: "",
  role: "",
  termsAccepted: false,
};

const App = () => {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>(intitialFormData);

  const isStep1Valid = useMemo(() => {
    return formData.fullName.trim() !== "" && formData.email.trim() !== "";
  }, [formData.fullName, formData.email]);

  const isStep2Valid = useMemo(() => {
    return formData.role !== "" && formData.termsAccepted;
  }, [formData.role, formData.termsAccepted]);


  const goNext = () => setStep((prev) => (prev === 1 ? 2 : prev));
  const goBack = () => setStep((prev) => (prev === 2 ? 1 : prev));
  const submit = () => setStep(3);

  return (
    <>
    <div className="page">
      <div className="card">
        <h1 className="tittle"> Form</h1>
        <div className="stepper">
          <div className={`pill ${step === 1 ? "active" : ""}`}> Step 1</div>
          <div className={`pill ${step === 2 ? "active" : ""}`}> Step 2</div>
          <div className={`pill ${step === 3 ? "active" : ""}`}> Summary</div>


          {step === 1 && (
            <>
              <Step1 formData={formData} setFormData={setFormData} />
              <div className="actions">
                <button
                  className="btn-primary"
                  onClick={goNext}
                  disabled={!isStep1Valid}
                >
                  Next
                </button>
              </div>
            </>
          )
          }

          {step === 2 && (
            <>
              <Step2 formData={formData} setFormData={setFormData} />
              <div className="actions">
                <button
                  className="btn-secondary"
                  onClick={goBack}
                >
                  Back
                </button>
                <button
                  className="btn-primary"
                  onClick={submit}
                  disabled={!isStep2Valid}
                >
                  Submit
                </button>
              </div>
            </>
          )

          }

          {step === 3 && (
            <>
              <Summary formData={formData} />
            </>
          )}
        </div>
      </div>
    </div>
    </>
  )
};

export default App;