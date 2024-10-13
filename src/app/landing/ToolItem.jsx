import React from 'react';

const ToolItem = ({ text }) => {
  return (
    <div className="overflow-hidden gap-2 self-stretch px-11 py-2 rounded-3xl max-md:px-5">
      {text}
    </div>
  );
};

export default ToolItem;