import React from 'react';

/**
 * Button Component
 * @param {string} label - The label for the button
 * @param {function} onClick - Click handler
 * @returns {React.ReactElement}
 */
const Button = ({ label, onClick }: { label: string; onClick: () => void }): React.ReactElement => (
  <button onClick={onClick} className="bg-blue-500 text-white p-2 rounded">
    {label}
  </button>
);

export default Button;
