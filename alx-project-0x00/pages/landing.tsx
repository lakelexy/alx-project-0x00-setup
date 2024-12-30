// pages/landing.tsx

import Card from "@/components/Card"; // Importing the Card component
import Pill from "@/components/Pill"; // Importing the Pill component
import Button from "@/components/Button"; // Importing the Button component

const Landing = () => {
  return (
    <div>
      <h1>Welcome to the Landing Page</h1>

      {/* Render Card components */}
      <Card />
      <Card />
      <Card />

      {/* Test the Pill component */}
      <div className="p-2 flex gap-2 mt-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>

      {/* Test the Button component */}
      <div className="mt-4 flex flex-col gap-4">
        {/* Small Buttons */}
        <Button
          title="Small Button (Rounded-sm)"
          styleClass="rounded-sm text-sm"
        />
        <Button
          title="Small Button (Rounded-md)"
          styleClass="rounded-md text-sm"
        />
        <Button
          title="Small Button (Rounded-full)"
          styleClass="rounded-full text-sm"
        />

        {/* Medium Buttons */}
        <Button
          title="Medium Button (Rounded-sm)"
          styleClass="rounded-sm text-base"
        />
        <Button
          title="Medium Button (Rounded-md)"
          styleClass="rounded-md text-base"
        />
        <Button
          title="Medium Button (Rounded-full)"
          styleClass="rounded-full text-base"
        />

        {/* Large Buttons */}
        <Button
          title="Large Button (Rounded-sm)"
          styleClass="rounded-sm text-lg"
        />
        <Button
          title="Large Button (Rounded-md)"
          styleClass="rounded-md text-lg"
        />
        <Button
          title="Large Button (Rounded-full)"
          styleClass="rounded-full text-lg"
        />
      </div>
    </div>
  );
};

export default Landing;
