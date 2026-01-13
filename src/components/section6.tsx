import React from 'react';

interface Section6Props {
  className?: string;
}

const Section6: React.FC<Section6Props> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Section 6</h2>
      <p>高度: 500px</p>
      <p>这是第六个分区，统一为500px高度。</p>
    </div>
  );
};

export default Section6;

