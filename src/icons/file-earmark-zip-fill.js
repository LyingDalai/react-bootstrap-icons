import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileEarmarkZipFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M2 3a2 2 0 0 1 2-2h.5v1h1v1h-1v1h1v1h-1v1h1v1H7V6H6V5h1V4H6V3h1V2H6V1h3.293a1 1 0 0 1 .707.293L13.707 5a1 1 0 0 1 .293.707V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3zm7 2V2l4 4h-3a1 1 0 0 1-1-1zM5.5 7.5a1 1 0 0 0-1 1v.938l-.4 1.599a1 1 0 0 0 .416 1.074l.93.62a1 1 0 0 0 1.109 0l.93-.62a1 1 0 0 0 .415-1.074l-.4-1.599V8.5a1 1 0 0 0-1-1h-1zm0 1.938V8.5h1v.938a1 1 0 0 0 .03.243l.4 1.598-.93.62-.93-.62.4-1.598a1 1 0 0 0 .03-.243z"
      />
    </svg>
  );
});

FileEarmarkZipFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileEarmarkZipFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileEarmarkZipFill;