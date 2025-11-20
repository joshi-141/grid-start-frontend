"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input, Button, Textarea } from "@/components/ui";
import { Card, CardContent } from "@/components/ui/card";
import Progress from "@/components/ui/progress";

export default function ServiceWizard() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");

  const next = () => setStep((s) => Math.min(5, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const isFreelancer = role === "freelancer";
  const isClient = role === "client";

  return (
    <>
      <div className="about-us-banner h-80 flex items-center justify-center">
        <div className="container">
          <div className="about-three-rapper text-center">
            <h1 className="w-full"> Post a Service</h1>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-20">
        <Card className="w-full min-h-[400px] max-w-3xl shadow-xl rounded-2xl p-4">
          <CardContent>

            {/* Progress Only After Step 1 */}
            {step > 1 && <Progress value={(step - 1) * 25} className="mb-4" />}

            <motion.div
              key={step}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* --------------------- STEP 1 --------------------- */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mt-2">
                    What would you like to do?
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Choose whether you're a client posting a job request or a freelancer offering services.
                  </p>

                  <div className="flex gap-4 mt-4">

                    {/* Client option */}
                    <div
                      onClick={() => setRole("client")}
                      className={`border rounded-xl p-3 cursor-pointer transition-all ${role === "client"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 bg-white"
                        }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`rounded-full border mt-1 ${role === "client"
                            ? "border-green-600"
                            : "border-gray-400"
                            }`}
                        >

                          <div className={`${role === "client" ? "bg-green-600" : ""} p-2 rounded-full`} />


                        </div>

                        <div>
                          <p className="font-semibold">Need a service</p>
                          <p className="text-sm text-gray-500">
                            I want to submit a request and hire an appropriate professional for the task.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Freelancer option */}
                    <div
                      onClick={() => setRole("freelancer")}
                      className={`border rounded-xl p-3 cursor-pointer transition-all ${role === "freelancer"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 bg-white"
                        }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`rounded-full border mt-1  ${role === "freelancer"
                            ? "border-green-600"
                            : "border-gray-400"
                            }`}
                        >

                          <div className={`${role === "freelancer" ? "bg-green-600" : ""} p-2 rounded-full`} />

                        </div>

                        <div>
                          <p className="font-semibold">Offer a new service</p>
                          <p className="text-sm text-gray-500">
                            I want to offer my skills and make my services available to others.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <Button
                  disabled={!role}
                  onClick={next}
                  className="w-full mt-4 py-6 text-base rounded-xl"
                >
                  Continue
                </Button> */}
                </div>
              )}

              {/* --------------------- STEP 2 --------------------- */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mt-2">
                    {isClient ? "Job Details" : "Basic Service Details"}
                  </h3>
                  <Input placeholder={isClient ? "Job Title" : "Service Title"} />
                  <Textarea
                    placeholder={
                      isClient
                        ? "Describe the job you want to get done"
                        : "Short description of your service"
                    }
                  />
                </div>
              )}

              {/* --------------------- STEP 3 --------------------- */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mt-2">Category & Skills</h3>
                  <Input
                    placeholder={
                      isClient
                        ? "Category (Development, Design, etc.)"
                        : "Service Category"
                    }
                  />
                  <Input placeholder="Skills (comma separated)" />
                </div>
              )}

              {/* --------------------- STEP 4 --------------------- */}
              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mt-2">Pricing</h3>

                  {isClient ? (
                    <>
                      <Input
                        type="number"
                        placeholder="Your Budget ($)"
                      />
                      <Input
                        type="number"
                        placeholder="Max Hourly Rate ($/hr)"
                      />
                    </>
                  ) : (
                    <>
                      <Input
                        type="number"
                        placeholder="Starting Price ($)"
                      />
                      <Input
                        type="number"
                        placeholder="Hourly Rate ($/hr)"
                      />
                    </>
                  )}
                </div>
              )}

              {/* --------------------- STEP 5 --------------------- */}
              {step === 5 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mt-2">Upload & Finish</h3>
                  <Input type="file" />
                  <Textarea placeholder="Additional Notes (Optional)" />
                </div>
              )}
            </motion.div>

            {/* --------------------- BUTTONS --------------------- */}
            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <Button onClick={prev}>Back</Button>
              ) : (
                <div></div>
              )}

              {step < 5 ? (
                <Button onClick={next} >Next</Button>
              ) : (
                <Button className="custom-btn" style={{ height: "45px", fontWeight: "500" }} >
                  Submit
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
