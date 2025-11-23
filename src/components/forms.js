"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import Button from "./button";
import { TextAreaInput, TextInput } from "./input-fields";
import { Select } from "./select";

import useScreenSize from "@/utils/usescreensize";
import { emailValid } from "@/utils/validators";
import { REFERRAL_SOURCES, OCCUPATIONS, COUNTRIES } from "@/utils/arrays";

const EarlyAccessForm = () => {
  const screenSize = useScreenSize();

  const [state, setState] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    website: "",
    email: "",
    interest: "",
  });
  const [errors, setErrors] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
  });
  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const requiredFields = [
    "companyName",
    "firstName",
    "lastName",
    "email",
    "interest",
  ];

  const isFormValid = requiredFields.every((key) =>
    String(state[key] || "").trim()
  );

  const handleSubmit = () => {
    const reqMap = {
      companyName: "Company Name",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      interest: "Interest",
    };

    const newErrors = {
      companyName: "",
      firstName: "",
      lastName: "",
      email: "",
      interest: "",
    };

    Object.entries(reqMap).forEach(([key, label]) => {
      if (!String(state[key] || "").trim()) {
        newErrors[key] = `${label} is required.`;
      }
    });

    if (!newErrors.email && !emailValid(state.email)) {
      newErrors.email = "Please enter a valid Email address.";
    }

    if (Object.values(newErrors).some((msg) => msg)) {
      setErrors(newErrors);
      return;
    }

    setErrors({
      companyName: "",
      firstName: "",
      lastName: "",
      email: "",
      interest: "",
    });

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSuccessMessage(true);
      setState({
        companyName: "",
        firstName: "",
        lastName: "",
        website: "",
        email: "",
        interest: "",
      });
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="bg-Overlays-White-3 shadow-boxPrimary flex flex-col gap-5 md:gap-8 lg:gap-[4rem] p-5 md:p-6 lg:p-[4rem] rounded-3xl md:rounded-4xl lg:rounded-[4rem]">
      <div className="grid grid-cols-2 gap-4 lg:gap-[1.5rem]">
        <div className="col-span-2">
          <TextInput
            label="Company Name"
            placeholder="Enter your company name"
            value={state.companyName}
            onChange={(e) => {
              setState({ ...state, companyName: e.target.value });
              setErrors({ ...errors, companyName: "" });
            }}
            error={errors.companyName}
          />
        </div>
        <TextInput
          label="First Name"
          value={state.firstName}
          onChange={(e) => {
            setState({ ...state, firstName: e.target.value });
            setErrors({ ...errors, firstName: "" });
          }}
          placeholder="Jonathan"
          error={errors.firstName}
        />
        <TextInput
          label="Last Name"
          value={state.lastName}
          onChange={(e) => {
            setState({ ...state, lastName: e.target.value });
            setErrors({ ...errors, lastName: "" });
          }}
          placeholder="Smith"
          error={errors.lastName}
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
            onChange={(e) => {
              setState({ ...state, email: e.target.value });
              setErrors({ ...errors, email: "" });
            }}
            error={errors.email}
          />
        </div>
        <div className="col-span-2">
          <TextAreaInput
            label="Tell us about your Interest"
            subLabel="Tell us how you plan to use Barnabus or what your organization focuses on."
            value={state.interest}
            placeholder="Enter your interest..."
            onChange={(e) => {
              setState({ ...state, interest: e.target.value });
              setErrors({ ...errors, interest: "" });
            }}
            error={errors.interest}
          />
        </div>
        <p className="col-span-2 text-Content-Secondary text-sm leading-5 lg:text-base lg:leading-6">
          By clicking ‘Participate’, you are accepting Barnabus&apos;s Terms and
          Privacy Policy.
        </p>
      </div>

      <div className="space-y-4">
        {showSuccessMessage && (
          <p className="text-green-500 text-center">
            Thank you! Your request has been received.
          </p>
        )}
        <Button
          label="Apply for Early Access"
          trailingIcon="/icons/arrow-right-neon.svg"
          variant="Primary-Accent"
          size={screenSize >= 1024 ? "2XL" : "XL"}
          additionalStyle="w-full"
          onClick={handleSubmit}
          loading={loading}
          disabled={!isFormValid || loading}
        />
      </div>
    </div>
  );
};

const CompleteFreeRegistrationForm = () => {
  const searchParams = useSearchParams();
  const screenSize = useScreenSize();

  const [state, setState] = useState({
    fullName: "",
    occupation: null,
    countryOfPractice: null,
    invitationCode: "",
    organization: "",
    howDidYouHear: null,
  });
  const [errors, setErrors] = useState({
    fullName: "",
    occupation: "",
    countryOfPractice: "",
    invitationCode: "",
  });
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [verificationState, setVerificationState] = useState({
    show: false,
    code: "",
    verified: false,
    loading: false,
    error: "",
  });

  const requiredFields = [
    "fullName",
    "occupation",
    "countryOfPractice",
    "invitationCode",
  ];

  const isFormValid = requiredFields.every((key) =>
    String(state[key] || "").trim()
  );

  useEffect(() => {
    const countryFromQuery = searchParams.get("country");

    if (!countryFromQuery) return;

    setState({ ...state, countryOfPractice: countryFromQuery });
  }, [searchParams]);

  useEffect(() => {
    if (
      state.countryOfPractice === "United States of America" ||
      state.countryOfPractice === "Canada"
    ) {
      setVerificationState({ ...verificationState, show: true });
    } else {
      setVerificationState({ ...verificationState, show: false });
    }
  }, [state.countryOfPractice]);

  const handleVerify = () => {
    setVerificationState({ ...verificationState, loading: true });
    setTimeout(() => {
      setVerificationState({
        ...verificationState,
        verified: false,
        error: true,
        loading: false,
      });
    }, 2000);
  };

  const handleSubmit = () => {
    const reqMap = {
      fullName: "Full Name",
      occupation: "Occupation",
      countryOfPractice: "Country of Practice",
      invitationCode: "Invitation Code",
    };

    const newErrors = {
      fullName: "",
      occupation: "",
      countryOfPractice: "",
      invitationCode: "",
    };

    Object.entries(reqMap).forEach(([key, label]) => {
      if (!String(state[key] || "").trim()) {
        newErrors[key] = `${label} is required.`;
      }
    });

    if (Object.values(newErrors).some((msg) => msg)) {
      setErrors(newErrors);
      return;
    }

    setErrors({
      fullName: "",
      occupation: "",
      countryOfPractice: "",
      invitationCode: "",
    });

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSuccessMessage(true);
      setState({
        fullName: "",
        occupation: null,
        countryOfPractice: null,
        invitationCode: "",
        organization: "",
        howDidYouHear: null,
      });
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }, 1000);
  };

  const getStatusIcon = () => {
    if (verificationState?.error && !verificationState?.verified) {
      return "/icons/alert-red.svg";
    }

    if (!verificationState?.error && verificationState?.verified) {
      return "/icons/checkmark-circle-green.svg";
    }

    return null;
  };

  const statusIcon = getStatusIcon();

  return (
    <div className="bg-Overlays-White-3 shadow-boxPrimary flex flex-col gap-5 md:gap-8 lg:gap-[3rem] p-5 md:p-6 lg:p-[4rem] rounded-3xl md:rounded-4xl lg:rounded-[4rem]">
      <div className="grid grid-cols-2 gap-4 lg:gap-[1.5rem]">
        <div className="col-span-2">
          <TextInput
            label="Full Name *"
            placeholder="John Doe"
            value={state.fullName}
            onChange={(e) => {
              setState({ ...state, fullName: e.target.value });
              setErrors({ ...errors, fullName: "" });
            }}
            error={errors.fullName}
          />
        </div>
        <Select
          label="Occupation *"
          options={OCCUPATIONS?.map((item) => ({
            label: item,
            value: item,
          }))}
          value={state.occupation}
          onChange={(e) => {
            setState({ ...state, occupation: e });
            setErrors({ ...errors, occupation: "" });
          }}
          error={errors.occupation}
          placeholder="Select"
          searchable={false}
          clearable
          size="L"
        />
        <Select
          label="Country of Practice *"
          options={COUNTRIES?.map((item) => ({
            label: item,
            value: item,
          }))}
          value={state.countryOfPractice}
          onChange={(e) => {
            setState({ ...state, countryOfPractice: e });
            setErrors({ ...errors, countryOfPractice: "" });
            setVerificationState({
              show: false,
              code: "",
              verified: false,
              loading: false,
              error: "",
            });
          }}
          error={errors.countryOfPractice}
          placeholder="Select"
          clearable
          size="L"
          searchable={true}
        />
        {verificationState?.show && (
          <div className="col-span-2 bg-Surface2 rounded-3xl flex flex-col gap-6 p-4 lg:p-6">
            <div className="space-y-2 lg:space-y-3">
              <h4 className="text-Content-Primary font-semibold text-base leading-6 md:text-lg md:leading-6.5 lg:text-[1.5rem] lg:leading-8">
                Verify your credentials
              </h4>
              <p className="card-subheading">
                <strong>Barnabus</strong>
                {state.countryOfPractice === "Canada"
                  ? " is free for verified physicians in Canada. If you are eligible for access, please enter your Medical Identification Number for Canada (MINC)."
                  : " is free for verified physicians in Canada. If you are eligible for access, please enter your NPI or valid state medical license number for verification."}
              </p>
            </div>
            {verificationState.verified && (
              <div className="mx-auto flex flex-col gap-2 justify-center items-center">
                <Image
                  src="/icons/checkmark-circle-green2.svg"
                  alt="Verification status"
                  width={120}
                  height={120}
                  className="h-10 w-10 lg:h-12 lg:w-12"
                />
                <p>
                  {state.countryOfPractice === "Canada"
                    ? "Your MINC was verified successfully!"
                    : "Your NPI was verified successfully!"}
                </p>
              </div>
            )}
            {!verificationState.verified && verificationState.error && (
              <div className="mx-auto flex flex-col gap-2 justify-center items-center">
                <Image
                  src="/icons/close-red.svg"
                  alt="Verification status"
                  width={120}
                  height={120}
                  className="h-10 w-10 lg:h-12 lg:w-12"
                />
                <div className="text-center font-semibold">
                  <p className="text-Content-Error-Bold">
                    Your license could not be verified
                  </p>

                  {state.countryOfPractice === "Canada" ? (
                    <p className="text-Content-Primary">
                      Please check your MINC, or{" "}
                      <Link
                        href="#"
                        target="_blank"
                        className="text-Action-Buttons-Link-Content-Default"
                      >
                        contact support.
                      </Link>
                    </p>
                  ) : (
                    <p className="text-Content-Primary">
                      Please check your NPI, or{" "}
                      <Link
                        href="#"
                        target="_blank"
                        className="text-Action-Buttons-Link-Content-Default"
                      >
                        contact support.
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            )}
            <div className="space-y-2">
              <p className="content-subheading !font-semibold !text-Content-Primary">
                {state.countryOfPractice === "Canada"
                  ? "MINC (Medical Identification Number for Canada)"
                  : "NPI or License Number"}
              </p>
              <div className="relative">
                <input
                  value={verificationState.code}
                  onChange={(e) =>
                    setVerificationState({
                      ...verificationState,
                      error: null,
                      code: e.target.value,
                    })
                  }
                  placeholder={
                    state.countryOfPractice === "Canada"
                      ? "Enter MINC Number"
                      : "Enter your NPI or License Number"
                  }
                  className="outline-none w-full text-Content-Primary font-normal placeholder-Content-Tertiary border border-Border-Secondary bg-Overlays-Black-9 text-base md:text-lg lg:text-xl leading-6 md:leading-6.5 lg:leading-7 rounded-xl px-3 py-4 lg:px-5 lg:py-4 focus:border-Content-Brand-Accent hover:border-Content-Tertiary transition-all"
                />
                {statusIcon && (
                  <Image
                    src={statusIcon}
                    alt="Verification status"
                    width={32}
                    height={32}
                    className="h-4 w-4 lg:h-6 lg:w-6 absolute right-4 top-2 translate-y-1/2"
                  />
                )}
              </div>
              <p className="card-subheading">
                {state.countryOfPractice === "Canada"
                  ? "The MINC is a number used exclusively for physicians and those studying to become physicians in Canada."
                  : "The NPI is a number used exclusively for physicians and those studying to become physicians in Canada."}
              </p>
            </div>
            <p className="card-subheading">
              {state.countryOfPractice === "Canada" ? (
                <>
                  If eligible, your MINC can be obtained from your{" "}
                  <Link
                    href="https://portal.physiciansapply.ca/Account/InitialLogin"
                    target="_blank"
                    className="text-Action-Buttons-Link-Content-Default"
                  >
                    physiciansapply.ca
                  </Link>{" "}
                  account or your appropriate{" "}
                  <Link
                    href="https://mcc.ca/about/partner-organizations/medical-regulatory-authorities/"
                    target="_blank"
                    className="text-Action-Buttons-Link-Content-Default"
                  >
                    Medical Regulatory Authority.
                  </Link>
                </>
              ) : (
                <>
                  If eligible, your NPPES Registry Lookup can be obtained from
                  your{" "}
                  <Link
                    href="https://npiregistry.cms.hhs.gov"
                    target="_blank"
                    className="text-Action-Buttons-Link-Content-Default"
                  >
                    npiregistry.cms.hhs.gov
                  </Link>{" "}
                  account.
                </>
              )}
            </p>
            <Button
              label="Verify"
              trailingIcon="/icons/arrow-right-black.svg"
              loading={verificationState.loading}
              disabled={
                !verificationState.code ||
                verificationState.loading ||
                verificationState.error ||
                verificationState.verified
              }
              additionalStyle="md:!w-max"
              onClick={handleVerify}
            />
          </div>
        )}
        <div className="col-span-2 space-y-1">
          <TextInput
            label="Invitation Code *"
            value={state.invitationCode}
            placeholder="Enter Code"
            onChange={(e) => {
              setState({ ...state, invitationCode: e.target.value });
              setErrors({ ...errors, invitationCode: "" });
            }}
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
            options={REFERRAL_SOURCES?.map((item) => ({
              label: item,
              value: item,
            }))}
            value={state.howDidYouHear}
            onChange={(e) => setState({ ...state, howDidYouHear: e })}
            placeholder="Select"
            searchable={false}
            clearable
            size="L"
            maxMenuHeight={400}
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
        {showSuccessMessage && (
          <p className="text-green-500 text-center">
            Thank you! Your request has been received.
          </p>
        )}
        <Button
          label="Join the Pilot Cohort"
          trailingIcon="/icons/arrow-right-neon.svg"
          variant="Primary-Accent"
          size={screenSize >= 1024 ? "2XL" : "XL"}
          additionalStyle="w-full"
          onClick={handleSubmit}
          loading={loading}
          disabled={loading || !checked || !isFormValid}
        />
        <p className="text-Content-Secondary text-sm leading-5 lg:text-base lg:leading-6">
          This pilot is shaping how Agentic AI supports healthcare workflows.
          You’re not just registering, you’re helping define what’s next.
        </p>
      </div>
    </div>
  );
};

export { EarlyAccessForm, CompleteFreeRegistrationForm };
