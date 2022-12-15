import { useState, useEffect } from 'react';
import { makeStyles } from '@utils/styles';

// styles
const useStyles = makeStyles(() => ({
  particles: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
  },
  particle: {
    position: 'absolute',
  },
}));

const COLORS = ['#2ecc71', '#3498db', '#e67e22', '#e67e22', '#e74c3c'];
const TOP_OFFSET = window.innerHeight;
const LEFT_OFFSET = 250;

const generateWholeNumber = (min, max) => min + Math.floor(Math.random() * (max - min));
const generateRandomColor = () => COLORS[generateWholeNumber(0, COLORS.length)];

const CircularParticle = ({ duration }) => {
  const classes = useStyles({});
  const size = generateWholeNumber(5, 10);
  const initialStyle = {
    backgroundColor: generateRandomColor(),
    width: size,
    height: size,
    borderRadius: size,
    transform: `rotateZ(${generateWholeNumber(0, 45)}deg)`,
    left: generateWholeNumber(0, window.innerWidth),
    top: generateWholeNumber(-TOP_OFFSET, 0),
    transitionDuration: `${duration}ms`,
  };

  const [style, setStyle] = useState(initialStyle);

  useEffect(() => {
    setTimeout(() => {
      setStyle({
        ...style,
        top: window.innerHeight + generateWholeNumber(0, TOP_OFFSET) + 'px',
        left: style.left + generateWholeNumber(-LEFT_OFFSET, LEFT_OFFSET) + 'px',
      });
    }, 0);
  }, []);

  return <div className={classes.particle} style={style} />;
};

const SquiggleParticle = ({ duration }) => {
  const classes = useStyles({});
  const size = generateWholeNumber(15, 45);
  const initialStyle = {
    width: size,
    height: size,
    transform: `rotateZ(${generateWholeNumber(-15, 15)}deg)`,
    left: generateWholeNumber(0, window.innerWidth),
    top: generateWholeNumber(-TOP_OFFSET, 0),
    transitionDuration: `${duration}ms`,
  };

  const [style, setStyle] = useState(initialStyle);

  useEffect(() => {
    setTimeout(() => {
      setStyle({
        ...style,
        top: window.innerHeight + generateWholeNumber(0, TOP_OFFSET) + 'px',
        left: style.left + generateWholeNumber(-LEFT_OFFSET, LEFT_OFFSET) + 'px',
        transform: `rotateZ(${generateWholeNumber(-15, 15)}deg)`,
      });
    }, 0);
  }, []);

  return (
    <svg className={classes.particle} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill={generateRandomColor()}
        d="M428.127,0l-12.716,10.062l12.718-10.06c8.785,11.101,19.716,24.917,19.716,51.051 s-10.932,39.951-19.716,51.053c-7.382,9.331-12.716,16.072-12.716,30.927c0,14.854,5.334,21.594,12.716,30.925   c8.784,11.101,19.716,24.917,19.716,51.05c0,26.135-10.931,39.949-19.715,51.051c-7.383,9.331-12.717,16.072-12.717,30.927   c0,14.855,5.332,21.593,12.711,30.919l-25.435,20.124c-8.781-11.097-19.708-24.909-19.708-51.042 c0-26.135,10.931-39.949,19.715-51.051c7.383-9.331,12.717-16.072,12.717-30.927c0-14.855-5.335-21.595-12.717-30.926 c-8.784-11.101-19.715-24.916-19.715-51.049s10.931-39.95,19.715-51.051c7.383-9.331,12.717-16.072,12.717-30.928 c0-14.855-5.335-21.596-12.718-30.927L428.127,0z"
      />
    </svg>
  );
};

export const Particles = ({ duration }) => {
  const classes = useStyles({});
  const { innerWidth } = window;
  const count = Math.floor(innerWidth / 10);
  const types = [SquiggleParticle, CircularParticle, CircularParticle];

  return (
    <div className={classes.particles}>
      {[...Array(count)].map((item, index) => {
        const Particle = types[generateWholeNumber(0, 3)];
        return <Particle key={index} duration={duration} />;
      })}
    </div>
  );
};

Particles.defaultProps = {
  duration: 5000,
};
