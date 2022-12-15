import { Backdrop, Modal, Fade } from '@ui';
import { useStyles } from './styles';
import { useMemo } from 'react';

const handleModalClick = (event) => event.stopPropagation();

export const Overlay = (props) => {
  const { open, timeout, onClose, children, backdropProps, ...rest } = props;

  const classes = useStyles({});

  const modalBackdropProps = useMemo(
    () => ({
      timeout,
      ...backdropProps,
    }),
    [timeout, backdropProps],
  );

  return (
    <Modal
      open={open}
      BackdropComponent={Backdrop}
      BackdropProps={modalBackdropProps}
      onClick={handleModalClick}
      onBackdropClick={onClose}
      onClose={onClose}
      {...rest}
    >
      <Fade in={open}>
        <div className={classes.content}>{children}</div>
      </Fade>
    </Modal>
  );
};

Overlay.defaultProps = {
  timeout: 500,
  disablePortal: false,
  disableEscapeKeyDown: false,
};
