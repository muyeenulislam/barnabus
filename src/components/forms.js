"use client";

import React, { useState } from "react";

import Button from "./button";
import { Toast } from "./toast";
import { TextAreaInput, TextInput } from "./input-fields";
import { Select } from "./select";

import { emailValid } from "@/utils/validators";
import { TIER_LIST } from "@/utils/arrays";
import Link from "next/link";

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

const CompleteFreeRegistrationForm = () => {
  const [state, setState] = useState({
    fullName: "",
    occupation: null,
    countryOfPractice: null,
    minc: "",
    invitationCode: "",
    organization: "",
    howDidYouHear: null,
  });
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });

  const handleSubmit = () => {
    const reqMap = {
      fullName: "Full Name",
      occupation: "Occupation",
      countryOfPractice: "Country of Practice",
      minc: "MINC",
      invitationCode: "Invitation Code",
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

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setToast({
        show: true,
        message: "Your data has been submitted.",
        type: "success",
      });
      setState({
        fullName: "",
        occupation: null,
        countryOfPractice: null,
        minc: "",
        invitationCode: "",
        organization: "",
        howDidYouHear: null,
      });
    }, 1000);
  };

  return (
    <>
      <div className="bg-Overlays-White-3 shadow-boxPrimary flex flex-col gap-5 md:gap-8 lg:gap-[3rem] p-5 md:p-6 lg:p-[4rem] rounded-3xl md:rounded-4xl lg:rounded-[4rem]">
        <div className="grid grid-cols-2 gap-4 lg:gap-[1.5rem]">
          <div className="col-span-2">
            <TextInput
              label="Full Name *"
              placeholder="John Doe"
              value={state.fullName}
              onChange={(e) => setState({ ...state, fullName: e.target.value })}
            />
          </div>
          <Select
            label="Occupation *"
            options={TIER_LIST?.map((item) => ({
              label: item.name,
              value: item.value,
            }))}
            value={state.occupation}
            onChange={(e) => setState({ ...state, occupation: e })}
            placeholder="Select"
            searchable={false}
            clearable
            size="L"
          />
          <Select
            label="Country of Practice *"
            options={TIER_LIST?.map((item) => ({
              label: item.name,
              value: item.value,
            }))}
            value={state.countryOfPractice}
            onChange={(e) => setState({ ...state, countryOfPractice: e })}
            placeholder="Select"
            searchable={false}
            clearable
            size="L"
          />
          <div className="col-span-2">
            <TextInput
              label="MINC (Medical Identification Number for Canada) *"
              value={state.minc}
              placeholder="Enter MINC Number"
              onChange={(e) => setState({ ...state, minc: e.target.value })}
            />
          </div>
          <div className="col-span-2 space-y-1">
            <TextInput
              label="Invitation Code *"
              value={state.invitationCode}
              placeholder="Enter Code"
              onChange={(e) =>
                setState({ ...state, invitationCode: e.target.value })
              }
            />
            <p className="text-Content-Secondary text-sm leading-5 lg:text-base lg:leading-6">
              Provided by <strong>Barnabus</strong> or an official partner
            </p>
          </div>
          <div className="col-span-2">
            <TextInput
              label="Organization / Hospital Affiliation (Optional)"
              value={state.organization}
              placeholder="Enter Organization Name"
              onChange={(e) =>
                setState({ ...state, organization: e.target.value })
              }
            />
          </div>
          <div className="col-span-2">
            <Select
              label="How Did You Hear About Barnabus? (Optional)"
              options={TIER_LIST?.map((item) => ({
                label: item.name,
                value: item.value,
              }))}
              value={state.howDidYouHear}
              onChange={(e) => setState({ ...state, howDidYouHear: e })}
              placeholder="Select"
              searchable={false}
              clearable
              size="L"
            />
          </div>
          <div className="col-span-2 flex gap-2 lg:items-center">
            <span
              className={`grid place-items-center rounded border h-[1.25rem] w-[1.25rem] shrink-0
                ${checked ? "border-white/60 bg-white/20" : "border-white/20"}
              )`}
              onClick={() => setChecked(!checked)}
            >
              {checked && (
                <svg
                  className={"h-[1.125rem] w-[1.125rem]"}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            <p className="col-span-2 text-Content-Secondary text-sm leading-5 lg:text-base lg:leading-6">
              I agree to the{" "}
              <Link
                href="terms-of-use"
                className="text-Action-Buttons-Link-Content-Default"
              >
                Terms of Service
              </Link>
              {", "}
              <Link
                href="privacy-policy"
                className="text-Action-Buttons-Link-Content-Default"
              >
                Privacy Policy
              </Link>
              {", "}and{" "}
              <Link
                href="privacy-policy"
                className="text-Action-Buttons-Link-Content-Default"
              >
                Clinical Use Agreement
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <Button
            label="Join the Pilot Cohort"
            trailingIcon="/icons/arrow-right-neon.svg"
            variant="Primary-Accent"
            size="2XL"
            additionalStyle="!hidden lg:!flex w-full"
            onClick={handleSubmit}
            loading={loading}
            disabled={loading || !checked}
          />
          <Button
            label="Join the Pilot Cohort"
            trailingIcon="/icons/arrow-right-neon.svg"
            variant="Primary-Accent"
            size="XL"
            additionalStyle="lg:!hidden w-full"
            onClick={handleSubmit}
            loading={loading}
            disabled={loading || !checked}
          />
          <p className="text-Content-Secondary text-sm leading-5 lg:text-base lg:leading-6">
            This pilot is shaping how Agentic AI supports healthcare workflows.
            You’re not just registering, you’re helping define what’s next.
          </p>
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

export { EarlyAccessForm, CompleteFreeRegistrationForm };
