import React from 'react';

interface Section3Props {
  className?: string;
}

const Section3: React.FC<Section3Props> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Section 3</h2>
      <p>高度: 500px</p>
      <p>这是第三个分区，统一为500px高度。</p>
    </div>
  );
};

export default Section3;

