import React from 'react';
import alarm from '../../sound/alarm.mp3';

const AlarmSound = () => {
  const [playSound] = useSound('../../sound/alarm.mp3');

  return (
    <div>
      <button onClick={playSound}>Play Sound</button>
    </div>
  );
};

export default AlarmSound;