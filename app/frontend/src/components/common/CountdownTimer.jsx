import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ endDate, className = '' }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(endDate) - new Date();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {timeUnits.map((unit, index) => (
        <React.Fragment key={unit.label}>
          <div className="flex flex-col items-center">
            <div className="glass-card px-3 py-2 rounded-lg min-w-[50px]">
              <span className="text-[#00ff88] font-bold text-xl heading-font block text-center">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-gray-500 text-xs mt-1">{unit.label}</span>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="text-[#00ff88] font-bold text-xl mb-5">:</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CountdownTimer;
