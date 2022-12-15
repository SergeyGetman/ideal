import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// styles
import { useStyles } from './styles';

export const NotifyProvider = (props) => {
  useStyles();
  const { children, ...otherProps } = props;

  return (
    <>
      {children}
      <ToastContainer {...otherProps} transition={Slide} />
    </>
  );
};

NotifyProvider.defaultProps = {
  icon: false,
  theme: 'dark',
  limit: 5,
  autoClose: 3000,
  position: 'top-center',
  hideProgressBar: true,
  pauseOnHover: false,
  pauseOnFocusLoss: true,
  draggable: false,
  closeOnClick: true,
  closeButton: false,
};
