import React, { useState, useEffect, useRef } from 'react';  // Import useRef
import ReactCardFlip from 'react-card-flip';
import 'tailwindcss/tailwind.css';

// Define a type for the props
interface RotatingCardProps {
  asyncData: string;
}

function RotatingCard({ asyncData }: RotatingCardProps) {
  // ... rest of your code ...
  const [isFlipped, setIsFlipped] = useState(false);
  const intervalRef = useRef<any | null>(null);  // Create a ref to hold the interval ID

  useEffect(() => {
    console.log(asyncData);
    if (asyncData) {
      
      // Clear the interval using the ref
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
      // Determine the face to show based on asyncData
      // Assume asyncData contains a boolean determining which face to show
      console.log(asyncData);
      setIsFlipped(asyncData === "AQ==");
    }
  }, [asyncData]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {  // Store the interval ID in the ref
      setIsFlipped(prev => !prev);
    }, 1000);

    return () => clearInterval(intervalRef.current);  // Clear the interval using the ref
  }, []);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>
      <div className="w-64 h-64 bg-blue-500 flex items-center justify-center rounded-2xl" key="front">
        <img className="rounded-2xl" src="./src/assets/img/rotate_card_true.png" />
      </div>
      <div className="w-64 h-64 bg-red-500 flex items-center justify-center rounded-2xl" key="back">
        <img className="rounded-2xl" src="./src/assets/img/rotate_card_false.png" />

      </div>
    </ReactCardFlip>
  );
}

// Export the RotatingCard component
export default RotatingCard;
