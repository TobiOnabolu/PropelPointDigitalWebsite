export function BackgroundBlur(props) {
  const {
    sign, // - for top, blank if coming from bottom
    topOffset, // 40 for top, [calc(100%-13rem)] for bottom
    mobileTopOffset, // 80 for top, [calc(100%-30rem)] for bottom
    leftOffset, // [calc(50%-11rem)]for top, [calc(50%+3rem)] for bottom
    rotateDegrees, // i.e 30
    mobileLeftOffset // [calc(50%-30rem)] for top, [calc(50%+36rem)] for bottom
  } = props;

  return (
    <div
      className={`absolute inset-x-0 ${sign}top-${topOffset} -z-10 transform-gpu overflow-hidden blur-3xl sm:${sign}top-${mobileTopOffset}`}
      aria-hidden="true"
    >
      <div
        className={`relative left-${leftOffset} aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[${rotateDegrees}deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-${mobileLeftOffset} sm:w-[72.1875rem]`}
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
  );
}