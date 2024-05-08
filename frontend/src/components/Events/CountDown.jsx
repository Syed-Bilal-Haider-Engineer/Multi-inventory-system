import  { useEffect, useState } from "react";

const CountDown = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(data.Finish_Date));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(data.Finish_Date));
    }, 1000);

    return () => clearTimeout(timer);
  }, [data.Finish_Date]);

  function calculateTimeLeft(finishDate) {
    const difference = +new Date(finishDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <span key={interval} className="text-2xl text-blue-500 mr-2">
      {timeLeft[interval]} {interval}{" "}
    </span>
  ));

  return (
    <div>
      {Object.keys(timeLeft).length ? (
        timerComponents
      ) : (
        <span className="text-red-500 text-2xl">Time's Up</span>
      )}
    </div>
  );
};

export default CountDown;
