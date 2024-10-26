import { AppComponentType } from "ordijs/core";

import "./index.css";
import { useEffect } from "react";
import { Helmet } from "ordijs/head";

const Home: AppComponentType = () => {
  useEffect(() => {
    let dest = new Date("feb 2, 2025 23:59:59").getTime();
    let interval = setInterval(function () {
      let now = new Date().getTime();
      let diff = dest - now;
      // Check if the countdown has reached zero or negative
      if (diff <= 0) {
        // Set the destination date to the same day next month
        let nextMonthDate = new Date();
        nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

        // If the current month is December, set the destination date to the same day next year
        if (nextMonthDate.getMonth() === 0) {
          nextMonthDate.setFullYear(nextMonthDate.getFullYear() + 1);
        }

        dest = nextMonthDate.getTime();
        return; // Exit the function
      }

      let days: string | number = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours: string | number = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes: string | number = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds: string | number = Math.floor((diff % (1000 * 60)) / 1000);

      if (days < 10) {
        days = `0${days}`;
      }

      if (hours < 10) {
        hours = `0${hours}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      // Get elements by class name
      let countdownElements =
        document.getElementsByClassName("countdown-element");

      // Loop through the elements and update their content
      for (let i = 0; i < countdownElements.length; i++) {
        let className = countdownElements[i].classList[1]; // Get the second class name
        switch (className) {
          case "days":
            countdownElements[i].innerHTML = String(days);
            break;
          case "hours":
            countdownElements[i].innerHTML = String(hours);
            break;
          case "minutes":
            countdownElements[i].innerHTML = String(minutes);
            break;
          case "seconds":
            countdownElements[i].innerHTML = String(seconds);
            break;
          default:
            break;
        }
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Coming Soon...</title>
      </Helmet>
      <div className="w-full h-full">
        <div className="w-full h-full md:px-16 px-10 md:pt-16 pt-10 pb-10 bg-gray-900 flex-col justify-center items-center lg:gap-28 md:gap-16 gap-10 inline-flex">
          <div className="flex-col justify-end items-center lg:gap-16 gap-10 flex">
            <div className="flex-col justify-center items-center gap-10 flex">
              <div className="flex-col justify-start items-center gap-2.5 flex">
                <h2 className="text-center text-emerald-400 md:text-6xl text-5xl font-bold font-manrope leading-normal">
                  Coming Soon
                </h2>
                <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
                  Just 20 days remaining until the big reveal of our new
                  product!
                </p>
              </div>
              <div className="flex items-start justify-center w-full gap-2 count-down-main">
                <div className="timer flex flex-col gap-0.5">
                  <div className="">
                    <h3 className="countdown-element days text-center text-white text-2xl font-bold font-manrope leading-9"></h3>
                  </div>
                  <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">
                    DAYS
                  </p>
                </div>
                <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">
                  :
                </h3>
                <div className="timer flex flex-col gap-0.5">
                  <div className="">
                    <h3 className="countdown-element hours text-center text-white text-2xl font-bold font-manrope leading-9"></h3>
                  </div>
                  <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">
                    HRS
                  </p>
                </div>
                <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">
                  :
                </h3>
                <div className="timer flex flex-col gap-0.5">
                  <div className="">
                    <h3 className="countdown-element minutes text-center text-white text-2xl font-bold font-manrope leading-9"></h3>
                  </div>
                  <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">
                    MINS
                  </p>
                </div>
                <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">
                  :
                </h3>
                <div className="timer flex flex-col gap-0.5">
                  <div className="">
                    <h3 className="countdown-element seconds text-center text-white text-2xl font-bold font-manrope leading-9"></h3>
                  </div>
                  <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">
                    SECS
                  </p>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-center gap-5 flex">
                <h6 className="text-center text-emerald-400 text-base font-semibold leading-relaxed">
                  Launched Date: February 02, 2025
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
