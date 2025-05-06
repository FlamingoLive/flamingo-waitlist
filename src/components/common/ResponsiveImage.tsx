import React from "react";

interface ResponsiveImageProps {
  src: string;
  srcSet?: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  width?: string;
  height?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  srcSet,
  alt,
  className = "",
  aspectRatio = "256/345",
  width,
  height
}) => {
  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        width: width || '100%',
        height: height || 'auto',
        aspectRatio 
      }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-contain"
        srcSet={srcSet}
      />
    </div>
  );
};

export default ResponsiveImage;
