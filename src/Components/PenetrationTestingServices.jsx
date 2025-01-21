import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";

const services = [
  {
    title: "Website Penetration Testing",
    description:
      "Protect your website from cyber-attacks and safeguard your online presence with our industry-leading website penetration testing services.",
    icon: "🌐",
  },
  {
    title: "Source Code Security Auditing",
    description:
      "Uncover and eliminate potential security loopholes in your codebase with our expert source code auditing services.",
    icon: "📜",
  },
  {
    title: "Mobile Application Security Testing",
    description:
      "Ensure the privacy and security of your mobile app users by identifying and mitigating potential vulnerabilities with our mobile application penetration testing services.",
    icon: "📱",
  },
  {
    title: "Internal Infrastructure Penetration Testing",
    description:
      "Strengthen your organization's cybersecurity posture by proactively identifying and addressing potential security risks in your internal assets.",
    icon: "🏢",
  },
  {
    title: "Cloud Security Assessment",
    description:
      "Protect your cloud infrastructure and data from cyber-attacks with our comprehensive cloud security testing services.",
    icon: "☁️",
  },
  {
    title: "API Security Testing",
    description:
      "Safeguard the integrity and reliability of your APIs by identifying and mitigating potential security threats through our API security testing services.",
    icon: "⚙️",
  },
];

const PenetrationTestingServices = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 10% of the element is visible
  });

  return (
    <div className="Penetrationmain dflex bg-[#335D5B]">
      <div
        ref={ref}
        className={`py-24 px-6 ${
          inView ? "animate__animated animate__fadeInUp" : ""
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#F0ECE2]">
          Penetration Testing Services
        </h2>
        <p className="text-xl md:text-xl text-center mb-8 text-[#F0ECE2]">
          Mastering hacks across all technologies and platforms
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card flex flex-col items-center text-center p-6 rounded-lg shadow-xl hover:shadow-[#2B786D] border border-solid ${
                inView ? "animate__animated animate__fadeInUp" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-[#F0ECE2] text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-[#F0ECE2]">
                {service.title}
              </h3>
              <p className="text-[#F0ECE2] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PenetrationTestingServices;
