import React from 'react';

interface Section7Props {
  className?: string;
}

const Section7: React.FC<Section7Props> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Section 7</h2>
      <p>高度: 500px</p>
      <p>这是第七个分区，统一为500px高度。</p>
    </div>
  );
};

export default Section7;

