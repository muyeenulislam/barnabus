"use client";

import React, { useState } from "react";

import Button from "./button";
import { Toast } from "./toast";
import { TextAreaInput, TextInput } from "./input-fields";

import { emailValid } from "@/utils/validators";

const EarlyAccessForm = () => {
  const [state, setState] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    website: "",
    email: "",
    interest: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });

  const handleSubmit = () => {
    const reqMap = {
      companyName: "Company Name",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      interest: "Interest",
    };

    const missing = Object.entries(reqMap)
      .filter(([key]) => !String(state[key] || "").trim())
      .map(([, label]) => label);

    if (missing.length > 0) {
      setToast({
        show: true,
        message: `Please fill: ${missing.join(", ")}.`,
        type: "error",
      });
      return;
    }

    if (!emailValid(state.email)) {
      setToast({
        show: true,
        message: "Please enter a valid Email address.",
        type: "error",
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setToast({
        show: true,
        message: "Your data has been submitted.",
        type: "success",
      });
      setState({
        companyName: "",
        firstName: "",
        lastName: "",
        website: "",
        email: "",
        interest: "",
      });
    }, 1000);
  };

  return (
    <>
      <div className="bg-Overlays-White-3 shadow-boxPrimary flex flex-col gap-5 md:gap-8 lg:gap-[4rem] p-5 md:p-6 lg:p-[4rem] rounded-3xl md:rounded-4xl lg:rounded-[4rem]">
        <div className="grid grid-cols-2 gap-4 lg:gap-[1.5rem]">
          <div className="col-span-2">
            <TextInput
              label="Company Name"
              placeholder="Microsoft"
              value={state.companyName}
              onChange={(e) =>
                setState({ ...state, companyName: e.target.value })
              }
            />
          </div>
          <TextInput
            label="First Name"
            value={state.firstName}
            onChange={(e) => setState({ ...state, firstName: e.target.value })}
            placeholder="Jonathan"
          />
          <TextInput
            label="Last Name"
            value={state.lastName}
            onChange={(e) => setState({ ...state, lastName: e.target.value })}
            placeholder="Smith"
          />
          <div className="col-span-2">
            <TextInput
              label="Website (optional)"
              value={state.website}
              required={false}
              placeholder="https://example.com"
              onChange={(e) => setState({ ...state, website: e.target.value })}
            />
          </div>
          <div className="col-span-2">
            <TextInput
              label="Email"
              value={state.email}
              type="email"
              placeholder="you@company.com"
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </div>
          <div className="col-span-2">
            <TextAreaInput
              label="Tell us about your Interest"
              value={state.interest}
              placeholder="Enter your interest..."
              onChange={(e) => setState({ ...state, interest: e.target.value })}
            />
          </div>
          <p className="col-span-2 text-Content-Secondary text-sm leading-5 lg:text-base lg:leading-6">
            By clicking ‘Participate’, you are accepting Barnabus&apos;s Terms
            and Privacy Policy.
          </p>
        </div>
        <div>
          <Button
            label="Apply for Early Access"
            trailingIcon="/icons/arrow-right-neon.svg"
            variant="Primary-Accent"
            size="2XL"
            additionalStyle="!hidden lg:!flex w-full"
            onClick={handleSubmit}
            loading={loading}
          />
          <Button
            label="Apply for Early Access"
            trailingIcon="/icons/arrow-right-neon.svg"
            variant="Primary-Accent"
            size="XL"
            additionalStyle="lg:!hidden w-full"
            onClick={handleSubmit}
            loading={loading}
          />
        </div>
      </div>

      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ show: false, message: "", type: "" })}
      />
    </>
  );
};

export { EarlyAccessForm };
