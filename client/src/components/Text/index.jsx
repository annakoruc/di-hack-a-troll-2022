import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './text.module.scss';

export const Text = ({ children, className, ...rest }) => {
  const textStyle = clsx(styles.text, className);

  return (
    <div className={textStyle} {...rest}>
      {children}
    </div>
  );
};

Text.defaultProps = {
  children: 'Text',
};

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
};
