// components/MapWithDirections.tsx
import React from "react";

const MapWithDirections: React.FC = () => {
//   const destinationLat = 30.387501;
//   const destinationLng = 30.487327;

//   const handleGetDirections = () => {
//     const url = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}&travelmode=driving`;
//     window.open(url, "_blank");
//   };

  return (
  
    <div className="w-full h-full">
      {/* Google Maps Embed */} 
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6883.426391077517!2d30.487327!3d30.387501000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458bf37d0fdedcf%3A0x14cf6dc132ccde6c!2z2KzYp9mF2LnYqSDYp9mE2LHZitin2K_ZhyDZhNmE2LnZhNmI2YUg2YjYp9mE2KrZg9mG2YjZhNmI2KzZitin!5e0!3m2!1sen!2seg!4v1754689462962!5m2!1sen!2seg"
        width="100%"
        height="100%"
        style={{ border: 0,width: "100%", height: "100%" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
   </div>
  );
};

export default MapWithDirections;
