import React from "react";
import { Mail, Github, Twitter, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { workExperience } from "@/constants/workExperience";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-[2px] bg-black/30 text-gray-200">
      <div className="max-w-2xl mx-auto py-16 px-7">
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-white">Salil Mandal</h1>
            <div className="flex items-center text-gray-400">
              {/* <div className="flex items-center gap-2">San Francisco, CA</div> */}
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              <Link
                href="mailto:salilmandal908@gmail.com"
                className="p-2 rounded-md hover:bg-gray-900 bg-gray-950 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 text-gray-300" />
              </Link>
              <Link
                href="https://github.com/Asta1984"
                className="p-2 rounded-md hover:bg-gray-900 bg-gray-950 transition-colors duration-200"
              >
                <Github className="w-5 h-5 text-gray-300" />
              </Link>
              <Link
                href="https://x.com/mandal_sal88300"
                className="p-2 rounded-md hover:bg-gray-900 bg-gray-950 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5 text-gray-300" />
              </Link>
            </div>
          </div>

          {/* Bio Sections */}
          <div className="space-y-4 text-gray-400">
            <p>
              I&apos;m a tech enthusiast on a mission to innovate and solve real-world problems.
            </p>

            <p>
              I&apos;ve independently developed a algorithm used in
              signal processing pipeline for decording signal for LIDAR unit. 
              With a background in Automobile Engineering, I taught myself coding, design,
              and system architecture. I have a strong background in web
              development, low-level programming languages, and machine learning.
            </p>

            <p>
              Crafting autonomous bots, machine learning projects and Product devlopment interests me.
              You could reach out to me on email.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Work</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {workExperience.map((work, index) => (
                <AccordionItem
                  value={`item-${index}`}
                  key={index}
                  className="border border-gray-800 rounded-lg bg-gray-950"
                >
                  <AccordionTrigger className="hover:no-underline px-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 ${work.bgColor} ${work.textColor} rounded-lg flex items-center justify-center font-medium`}
                      >
                        {work.icon}
                      </div>
                      <div className="flex flex-col items-start">
                        <div className="font-semibold text-white">{work.company}</div>
                        {work.role && (
                          <div className="text-sm text-gray-400">{work.role}</div>
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="pl-14">
                      <p className="text-gray-400">{work.shortdesc}</p>
                      <br />
                      <p className="text-gray-400">{work.desc}</p>
                    </div>
                    <div className="flex justify-between flex-row">
                      <div className="pl-14">
                        <br />
                        {work.sourceCode === "" ? null : (
                          <Link
                            href={work.sourceCode}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="text-white bg-gray-900 hover:bg-gray-800 p-3 rounded-md transition-colors duration-200">
                              <p>Source Code</p>
                            </button>
                          </Link>
                        )}
                      </div>
                      <div className="pl-14">
                        <br />
                        {work.webLink === "" ? null : (
                          <Link
                            href={work.webLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="text-white bg-[#1F305E] hover:bg-[#284180] p-3 rounded-md transition-colors duration-200">
                              <p>Website</p>
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;