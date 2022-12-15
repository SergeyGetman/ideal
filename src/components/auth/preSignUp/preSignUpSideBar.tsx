import LogoSvg from '@components/auth/images/logo.svg';
import clsx from 'clsx';
import AdultSvg from '@components/auth/images/adult.svg';
import ItechSvg from '@components/auth/images/itech.svg';
import LabsSvg from '@components/auth/images/iTech_Labs_Vector.svg';
import VisaSvg from '@components/auth/images/visa.svg';
import MastercardSvg from '@components/auth/images/mastercard.svg';
import { useStyles } from '../styles';

const url = 'https://licensing.gaming-curacao.com/validator/?lh=ca5f1bbd148d611421b5e1d85e3e0c3d&template=tseal';

const PreSignUpSideBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <ul className={classes.sidebarList}>
        <li className={classes.sidebarItem}>
          <img className={classes.sidebarImg} src={LogoSvg} alt="" />
        </li>

        <li className={classes.sidebarItem}>
          <iframe className={classes.iframeStyle} src={url} />
        </li>
        <li className={classes.sidebarItem}>
          <img className={clsx(classes.sidebarImg, classes.sidebarImgOpacity)} src={AdultSvg} alt="" />
        </li>
        <li className={classes.sidebarItem}>
          <img className={clsx(classes.sidebarImg, classes.sidebarImgOpacity)} src={ItechSvg} alt="" />
        </li>
        <li className={classes.sidebarItem}>
          <img className={clsx(classes.sidebarImg, classes.sidebarImgOpacity)} width={114} src={LabsSvg} alt="" />
        </li>
        <li className={classes.sidebarItem}>
          <img className={clsx(classes.sidebarImg, classes.sidebarImgOpacity)} src={VisaSvg} alt="" />
        </li>
        <li className={classes.sidebarItem}>
          <img className={clsx(classes.sidebarImg, classes.sidebarImgOpacity)} src={MastercardSvg} alt="" />
        </li>
      </ul>
    </div>
  );
};
export default PreSignUpSideBar;
