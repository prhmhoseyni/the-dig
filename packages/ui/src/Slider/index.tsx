import RCSlider, { type SliderProps } from "rc-slider";
import { cloneElement } from "react";
import "./index.css";

export default function Slider(props: SliderProps<number | number[]>) {
  return (
    <RCSlider
      // @ts-expect-error (rc-slider has some typing issues)
      handleRender={(node, { value, offset }) =>
        cloneElement(node, {
          children: (
            <div
              className="absolute -mt-10 rounded-lg p-2 shadow-alert bg-gray-700 text-subtitle5 text-prose-inverse whitespace-nowrap"
              style={{
                left: `${offset}%`,
                transform: "translateX(40%)",
              }}
            >
              {Math.round(Number(value))}%
            </div>
          ),
        })
      }
      {...props}
    />
  );
}
