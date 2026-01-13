import React from 'react';

interface Section2Props {
  className?: string;
}

const Section2: React.FC<Section2Props> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Section 2</h2>
      <p>高度: 500px</p>
      <p>这是第二个分区，统一为500px高度。</p>
    </div>
  );
};

export default Section2;

