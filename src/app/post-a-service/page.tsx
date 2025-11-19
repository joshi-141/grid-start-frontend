"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input, Button, Textarea } from "@/components/ui";
import { Card, CardContent } from "@/components/ui/card";
import Progress from "@/components/ui/progress"; // your custom progress

export default function ServiceWizard() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");

  const next = () => setStep((s) => Math.min(5, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const isFreelancer = role === "freelancer";
  const isClient = role === "client";

  return (
    <div className="min-h-screen flex items-center justify-center py-10 bg-gray-50">
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
                    className={`border rounded-xl p-3 cursor-pointer transition-all ${
                      role === "client"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          role === "client"
                            ? "border-blue-600"
                            : "border-gray-400"
                        }`}
                      >
                        {role === "client" && (
                          <div className="w-3 h-3 rounded-full bg-blue-600" />
                        )}
                      </div>

                      <div>
                        <p className="font-semibold">I'm a Client</p>
                        <p className="text-sm text-gray-500">
                          I want to post a job request and hire freelancers.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Freelancer option */}
                  <div
                    onClick={() => setRole("freelancer")}
                    className={`border rounded-xl p-4 cursor-pointer transition-all ${
                      role === "freelancer"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          role === "freelancer"
                            ? "border-green-600"
                            : "border-gray-400"
                        }`}
                      >
                        {role === "freelancer" && (
                          <div className="w-3 h-3 rounded-full bg-green-600" />
                        )}
                      </div>

                      <div>
                        <p className="font-semibold">I'm a Freelancer</p>
                        <p className="text-sm text-gray-500">
                          I want to offer my skills & services.
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
                      placeholder="Your Budget (₹)"
                    />
                    <Input
                      type="number"
                      placeholder="Max Hourly Rate (₹/hr)"
                    />
                  </>
                ) : (
                  <>
                    <Input
                      type="number"
                      placeholder="Starting Price (₹)"
                    />
                    <Input
                      type="number"
                      placeholder="Hourly Rate (₹/hr)"
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
              <Button onClick={next}>Next</Button>
            ) : (
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Submit
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
