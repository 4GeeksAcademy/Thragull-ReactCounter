import React from 'react';

const AlarmSound = () => {
   
  return (
    <div>
      <audio loop id='alarmSound'>
        <source src='https://bigsoundbank.com/UPLOAD/mp3/0451.mp3' type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default AlarmSound;
