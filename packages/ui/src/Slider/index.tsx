import RCSlider, { type SliderProps } from "rc-slider";
import "rc-slider/assets/index.css";

export default function Slider(props: SliderProps<number | number[]>) {
  return <RCSlider {...props} />;
}
