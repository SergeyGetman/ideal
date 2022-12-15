import { useStyles } from '../styles';
import clsx from 'clsx';
import LabsSvg from '../images/iTech_Labs_Vector.svg';
import LogoSvg from '../images/logo.svg';
import AdultSvg from '@components/auth/images/adult.svg';
import ItechSvg from '../images/itech.svg';
import VisaSvg from '../images/visa.svg';
import MastercardSvg from '../images/mastercard.svg';

export const SideBar = ({}) => {
  const classes = useStyles({});
  return (
    <div className={classes.sidebar}>
      <ul className={classes.sidebarList}>
        <li className={classes.sidebarItem}>
          <img className={clsx(classes.sidebarImg)} src={LogoSvg} alt="" />
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
