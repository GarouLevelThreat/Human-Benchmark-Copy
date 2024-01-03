export default function SequenceMemoryTestIcon({width, height, fill="white"}) {
  return (
    <svg
      className="sequence-memory-game-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 128 128"
    >
      <rect width="58" height="58" rx="10"></rect>
      <rect width="58" height="58" x="70" rx="10"></rect>
      <rect width="58" height="58" y="70" rx="10"></rect>
      <path
        fillRule="evenodd"
        d="M118 80H80v38h38V80zM80 70c-5.523 0-10 4.477-10 10v38c0 5.523 4.477 10 10 10h38c5.523 0 10-4.477 10-10V80c0-5.523-4.477-10-10-10H80z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}