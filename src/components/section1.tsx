import React from 'react';

interface Section1Props {
  className?: string;
}

const Section1: React.FC<Section1Props> = ({ className }) => {
  return (
    <div className={`${className} bg-blue-50 rounded-lg p-6 shadow-md`}>
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Section 1</h2>
      <p className="text-lg font-medium text-gray-800 mb-2">高度: 500px</p>
      <p className="text-gray-600">这是第一个分区，统一为500px高度。</p>
    </div>
  );
};

export default Section1;

