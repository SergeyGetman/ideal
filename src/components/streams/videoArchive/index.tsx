import { videoList } from './utils';
import { useStyles } from './styles';
import { HTMLAttributes } from 'react';

export type VideoArchiveProps = HTMLAttributes<HTMLElement>;

export const VideoArchive = ({ className, ...props }: VideoArchiveProps) => {
  const classes = useStyles({});
  return (
    <div className={className} {...props}>
      <ul className={classes.list}>
        <li className={classes.mainVideo}>
          <iframe
            className={classes.mainVideoItem}
            src="https://www.youtube.com/embed/sdcZGO7Agso"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
          <h4 className={classes.videoName}>Best #Poker Bluffs from 2021: Phil Ivey, Tony G & THE DIAPER </h4>
        </li>
        {videoList.map((item, i) => (
          <li id={'videoArchive' + i} key={i}>
            <iframe className={classes.videoItem} src={item.src} title={item.title} allow={item.allow}></iframe>
            <h4 className={classes.videoName}>{item.description}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};
