import { useState } from "react";
import VSCodeHeader from "./VSCodeHeader";
import VSCodeActivityBar from "./VSCodeActivityBar";
import VSCodeExplorer from "./VSCodeExplorer";
import VSCodeTabBar from "./VSCodeTabBar";
import VSCodeContent from "./VSCodeContent";
import VSCodeMiniMap from "./VSCodeMiniMap";
import VSCodeStatusBar from "./VSCodeStatusBar";

export default function VSCode() {
  const [theme, setTheme] = useState("default");

  return (
    <div className="relative px-8">
      {/* background gradients */}
      <div className="absolute top-0 left-10 z-10 bg-gradient-to-br from-pink-500 to-red-800 rounded-lg h-1/2 w-3/4"></div>
      <div className="absolute top-72 left-20 z-20 bg-gradient-to-br from-green-500 to-blue-800 rounded-lg h-96 w-1/2"></div>

      {/* tagline */}
      <div className="relative z-50 pt-20 pb-16 pl-24">
        <h2 className="mb-6 text-5xl font-extrabold text-white">
          Learn a workflow for every scenario
        </h2>
        <p className="mb-12 text-2xl text-pink-50">
          You spend <span className="text-red-900">90%</span> of your coding in
          VS Code. It is <strong className="font-extrabold">important</strong>{" "}
          to be fast and efficient.
        </p>

        {/* buttons */}
        <div className="lg:pl-24 flex space-x-8">
          <button className="py-8 px-12 rounded-lg bg-gray-800 text-white font-bold text-lg">
            The Everyday Workflow
          </button>
          <button className="py-8 px-12 rounded-lg bg-gray-800 text-white font-bold text-lg">
            The Writer's Workflow
          </button>
          <button className="py-8 px-12 rounded-lg bg-gray-800 text-white font-bold text-lg">
            The Minimalist Workflow
          </button>
          <button className="py-8 px-12 rounded-lg bg-gray-800 text-white font-bold text-lg">
            The Git Workflow
          </button>
          <button className="py-8 px-12 rounded-lg bg-gray-800 text-white font-bold text-lg">
            The AI Workflow
          </button>
        </div>
      </div>

      <div className="relative z-50 pl-24 rounded-lg overflow-hidden">
        {/* header */}
        <VSCodeHeader />

        {/* main section */}
        <main className="relative flex" style={{ minHeight: "800px" }}>
          {/* activity bar */}
          <div className="w-16 flex-shrink">
            <VSCodeActivityBar />
          </div>

          {/* explorer */}
          <div className="w-72 flex-shrink">
            <VSCodeExplorer />
          </div>

          {/* main content */}
          <div className="flex-grow relative flex flex-col">
            <VSCodeTabBar />
            <div className="relative flex-grow">
              <VSCodeContent />

              <div className="absolute top-0 right-0 z-10">
                <VSCodeMiniMap />
              </div>
            </div>
          </div>
        </main>

        {/* status bar */}
        <VSCodeStatusBar />
      </div>
    </div>
  );
}
