import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

const insight = [
  {
    value: 5000,
    description: "Total listings in the system",
  },
  {
    value: 5000,
    description: "Active listings",
  },
  {
    value: 30,
    description: "Articles in the blog",
  },
];

const Insight = () => {
  const [isVisible, setIsVisible] = useState(false);
  const insightRef = useRef<HTMLDivElement>(null);

  // Detect if the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
      }
    );

    const currentRef = insightRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={insightRef}
      className="bg-lightGrey p-10 flex lg:flex-row flex-col justify-center items-center gap-4"
    >
      <h1 className="text-black text-4xl text-left font-semibold">
        Insights and <br /> Performance <br /> Metrics
      </h1>
      {insight.map((item, i) => {
        return (
          <div
            key={i}
            className="bg-primary p-6 lg:w-1/4 w-full md:w-1/2 rounded-lg shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all"
          >
            <h1 className="text-white lg:text-4xl text-3xl text-center font-semibold">
              {isVisible ? <CountUp end={item.value} duration={3} /> : 0}+
            </h1>
            <br />
            <p className="text-white text-sm text-center line-clamp-1">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Insight;
