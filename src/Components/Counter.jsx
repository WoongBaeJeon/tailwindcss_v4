import { useState } from "react";
import { twMerge } from "tailwind-merge";

function Counter() {
  const [count, setCount] = useState(1);

  const plusMultiply = () => {
    if (count <= -1) {
      setCount(1);
      return;
    }
    setCount((prev) => Math.abs(prev) * 10);
    // console.log(count);
  };

  const minusMultiply = () => {
    if (count >= 1) {
      setCount(-1);
      return;
    }
    setCount((prev) => prev * 10);
    // console.log(count);
  };

  return (
    <>
      <div className="p-[2em]">
        <div className="p-[10px]">
          <button
            className="border border-solid p-[10px] text-3xl bg-yellow-100 w-[200px]"
            onClick={plusMultiply}
          >
            플러스
          </button>
        </div>
        <div>
          <button
            className="border border-solid p-[10px] text-3xl bg-green-100 w-[200px]"
            onClick={minusMultiply}
          >
            마이너스
          </button>
        </div>
        <div
          className={twMerge(
            "text-stone-800 text-3xl p-[50px]",
            count >= 5 && "text-green-500",
            count >= 50 && "text-blue-500",
            count >= 500 && "text-purple-500",
            count >= 5000 && "text-gray-600",
            count >= 50000 && "text-black",
            count <= -5 && "text-red-500",
            count <= -50 && "text-orange-500",
            count <= -500 && "text-pink-400",
            count <= -5000 && "text-yellow-500",
            count <= -50000 && "text-green-300"
          )}
        >
          count 값 : {count}
        </div>
      </div>
    </>
  );
}

export default Counter;
