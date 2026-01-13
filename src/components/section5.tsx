import React from 'react';

interface Section5Props {
  className?: string;
}

const Section5: React.FC<Section5Props> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Section 5</h2>
      <p>高度: 500px</p>
      <p>这是第五个分区，统一为500px高度。</p>
    </div>
  );
};

export default Section5;

