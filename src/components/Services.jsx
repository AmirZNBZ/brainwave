import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators"
          text="Brainwave unlocks the potential of AI-powered applications"
        />
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                width={800}
                height={730}
                src={service1}
                alt="Smartest AI"
                className="w-full h-full object-cover md:object-right"
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h-4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((service, index) => (
                  <li key={index} className="flex items-start py-4 border-t border-n-6">
                    <img src={check} alt="check" width={24} height={24} />
                    <p className="ml-4">{service}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute bottom-4 left-4 right-4 border border-n-1/10 lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  alt="robot"
                  width={630}
                  height={750}
                  src={service2}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h-4 mb-4">Smartest AI</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Brainwave unlocks the potential of AI-powered applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
