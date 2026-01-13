import React from 'react';

interface Section4Props {
  className?: string;
}

const Section4: React.FC<Section4Props> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Section 4</h2>
      <p>高度: 500px</p>
      <p>这是第四个分区，统一为500px高度。</p>
    </div>
  );
};

export default Section4;

