import React from "react";
import doorInstall from "../../assets/doorinstall.JPG";
import hrmvictor from "../../assets/hrm-victor.JPG";
import victordoor from "../../assets/victordoor.JPG";
import mona from "../../assets/mona.JPG";
import crmmona from "../../assets/crm-mona.JPG";
import kpi from "../../assets/kpii.JPG";
import monaelevator from "../../assets/monago-elevator.JPG";
const applications = [
  {
    title: "Victor Door Installation",
    description: "Door installation management system",
    link: "https://installation.victor-door.com/",
    image:doorInstall,
  },
  {
    title: "Victor Grand System",
    description: "All-in-one business management platform",
    link: "https://app.victor-door.com/",
    image: victordoor,
  },
  {
    title: "HR Management",
    description: "Manage employee records and HR operations",
    link: "https://hrms.victor-door.com/",
    image: hrmvictor,
  },
  {
    title: "Victor Landing Site",
    description: "Official Victor company landing page",
    link: "https://victor-door.com/",
    image: victordoor,
  },
  {
    title: "KPI Management",
    description: "Track key performance indicators across departments",
    link: "https://kpi.victor-door.com/",
    image: kpi,
  },
  {
    title: "Mona Go Elevator",
    description: "Elevator systems and product details",
    link: "https://mona-go-elevator.com/",
    image: mona,
  },
  {
    title: "Mona Go CRM",
    description: "Customer management portal",
    link: "http://crm.mona-go-elevator.com/",
    image: crmmona
  },
  {
    title: "Mona Power Website",
    description: "Power systems & electrical services",
    link: "https://monapower.mona-go-elevator.com/",
    image: monaelevator,
  },
  {
    title: "Fivestar Technology",
    description: "Software and technology solutions provider",
    link: "https://fivestar-techplc.com/",
    image: victordoor,
  },
];

const VictorAppsDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-6 text-center text-green-700">Victor Applications Dashboard</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {applications.map((app, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{app.title}</h3>
              <p className="text-gray-600 mt-2">{app.description}</p>
              <a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-green-600 hover:underline"
              >
                Visit →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VictorAppsDashboard;

