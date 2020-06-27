import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TelephoneXFill = forwardRef(({ color, size, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.471 17.471 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969zm7.879-.834a.5.5 0 0 1 .708 0L13 2.293 15.146.146a.5.5 0 0 1 .708.708L13.707 3l2.147 2.146a.5.5 0 0 1-.708.708L13 3.707l-2.146 2.147a.5.5 0 0 1-.708-.708L12.293 3 10.146.854a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
});

TelephoneXFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TelephoneXFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default TelephoneXFill;