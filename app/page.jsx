import React from 'react';
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Section } from 'lucide-react';
const Home = () => {
  return (
    <Section className="h-full">
      <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
              {/* text */}
              <div>
                <span>Software Developer</span>
                <h1>Hello I'm</h1>
              </div>
              {/* photo */}
              <div> Photo </div>
          </div>
      </div>
    </Section>
  );
};

export default Home;
