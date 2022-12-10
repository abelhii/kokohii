import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

type ScrollDownProps = {
  onClick: () => void;
};

export default function ScrollDown({ onClick }: ScrollDownProps) {
  const { theme } = useTheme();
  const [color, setColor] = useState("white");
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastCall, setLastCall] = useState<any>(null);
  const scrollBtn = useRef<SVGSVGElement>(null);
  useEffect(() => {
    setColor(theme === "dark" ? "white" : "#101010");
    window.addEventListener(
      "scroll",
      () => {
        if (isScrolling) return;

        if (lastCall) clearTimeout(lastCall);
        setLastCall(
          setTimeout(() => {
            scrollBtn.current?.classList.add("animate-rotate-fast");
            console.log('scrolling');
          }, 200)
        );

        setIsScrolling(false);
        scrollBtn.current?.classList.remove("animate-rotate-fast");
      },
      { passive: true }
    );
  }, [color]);

  return (
    <svg
      ref={scrollBtn}
      width="161"
      height="164"
      viewBox="0 0 161 164"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group hover:cursor-pointer"
      onClick={() => {
        onClick();
      }}
    >
      <g className="circle animate-rotate group-active:bg-red-500 group-hover:animate-rotate-fast">
        <path
          d="M145 81.5038C145 82.9838 146.08 83.9038 147.4 83.9038C148.72 83.9038 149.8 82.9838 149.8 81.5038C149.8 80.0238 148.72 79.1038 147.4 79.1038C146.08 79.1038 145 80.0238 145 81.5038Z"
          fill={color}
        />
        <path
          d="M16 81.4962C16 80.0162 14.92 79.0962 13.6 79.0962C12.28 79.0962 11.2 80.0162 11.2 81.4962C11.2 82.9762 12.28 83.8962 13.6 83.8962C14.92 83.8962 16 82.9762 16 81.4962Z"
          fill={color}
        />
        <path
          d="M13.2567 60.8942C12.0487 62.6889 11.2768 64.0467 9.49183 63.3957C8.38324 62.9914 8.02047 61.7096 8.71254 59.8118C9.48683 57.6886 10.7963 57.0166 12.6892 57.4301L13.3059 55.739C10.4428 54.9504 8.2509 56.4076 7.20937 59.2636C6.12673 62.2324 6.93981 64.381 9.06303 65.1553C11.6748 66.1077 13.2471 63.9562 14.45 62.117C16.2416 59.3642 16.9429 58.4917 18.7843 59.1632C19.9868 59.6018 20.7563 60.8191 19.9067 63.149C18.8789 65.9674 17.0397 66.574 15.1298 66.0904L14.5131 67.7815C17.6631 68.7173 20.2518 66.8726 21.4098 63.6972C22.6501 60.2962 21.3551 58.1848 19.401 57.4722C16.3383 56.3553 15.1115 58.1432 13.2567 60.8942Z"
          fill={color}
        />
        <path
          d="M21.8927 40.4527L22.7397 38.8644C20.1796 37.8845 17.1138 38.7882 15.4669 41.8765C13.6224 45.3355 15.1049 49.186 18.8992 51.2093C22.711 53.2421 26.7345 52.3277 28.579 48.8688C30.2353 45.7628 29.2775 42.7135 26.6398 40.9442L25.7928 42.5325C27.3246 43.4853 28.5789 45.4688 27.1672 48.1159C25.5674 51.116 22.305 50.9856 19.7461 49.621C17.2049 48.2659 15.2789 45.6295 16.8787 42.6294C18.2809 39.9999 20.5703 40.0422 21.8927 40.4527Z"
          fill={color}
        />
        <path
          d="M34.2404 40.2519L35.5104 38.9762L31.4141 34.8983L34.3068 31.9927C36.8608 29.4273 39.5723 34.0457 40.4349 34.0296L41.8036 32.6547L41.7186 32.5701C41.0264 32.9252 37.862 28.1381 35.179 29.9543L35.1507 29.9261C35.9819 28.5241 35.8654 27.0253 34.4055 25.5719C32.6055 23.7799 30.1878 24.054 28.1982 26.0525L24.1062 30.1629L34.2404 40.2519ZM26.51 30.0161L29.0358 27.479C30.08 26.4301 31.5198 25.239 33.2773 26.9887C35.0349 28.7384 33.8502 30.1835 32.806 31.2324L30.2802 33.7695L26.51 30.0161Z"
          fill={color}
        />
        <path
          d="M51.331 27.4964C54.926 25.3248 55.6992 21.1893 53.4759 17.5087C51.2526 13.8281 47.2427 12.6052 43.6477 14.7768C40.0527 16.9484 39.2692 21.0667 41.4925 24.7473C43.7158 28.428 47.736 29.668 51.331 27.4964ZM50.5037 26.1268C47.4223 27.9882 44.6257 26.453 43.0332 23.8167C41.4407 21.1803 41.3935 18.0077 44.475 16.1464C47.5564 14.285 50.3427 15.803 51.9352 18.4394C53.5277 21.0758 53.5852 24.2655 50.5037 26.1268Z"
          fill={color}
        />
        <path
          d="M115.481 30.5645C118.655 33.3146 122.827 32.7747 125.643 29.5246C128.458 26.2746 128.385 22.083 125.211 19.333C122.036 16.5829 117.877 17.1077 115.061 20.3578C112.246 23.6078 112.306 27.8145 115.481 30.5645ZM116.528 29.3552C113.807 26.998 114.405 23.8643 116.422 21.5364C118.439 19.2084 121.442 18.1851 124.163 20.5423C126.884 22.8995 126.299 26.0181 124.282 28.346C122.266 30.674 119.249 31.7124 116.528 29.3552Z"
          fill={color}
        />
        <path
          d="M136.164 29.5093L126.598 40.7129L127.762 42.339L139.652 37.8843L139.675 37.9168L131.628 47.7376L132.793 49.3637L146.48 43.9165L145.374 42.3717L134.262 46.9835L134.238 46.951L141.904 37.5259L140.74 35.8998L129.348 40.1214L129.324 40.0889L137.27 31.0541L136.164 29.5093Z"
          fill={color}
        />
        <path
          d="M138.229 56.6023L138.701 58.3393L150.03 55.2604L150.041 55.299L140.584 65.268L141.161 67.391L154.961 63.6407L154.488 61.9037L143.121 64.9931L143.11 64.9545L152.605 54.975L152.029 52.8521L138.229 56.6023Z"
          fill={color}
        />
        <path
          d="M58.975 8.74021L62.0193 22.7124L71.1062 20.7325L70.7655 19.1692L63.4375 20.7659L60.7338 8.35701L58.975 8.74021Z"
          fill={color}
        />
        <path
          d="M75.0202 5.72102L74.8503 20.02L84.1496 20.1305L84.1686 18.5306L76.6691 18.4415L76.8201 5.74241L75.0202 5.72102Z"
          fill={color}
        />
        <path
          d="M94.7849 21.3014L99.6502 23.0792C103.351 24.4315 106.496 22.8763 108.074 18.5557C109.653 14.2351 108.259 11 104.558 9.6478L99.6927 7.86998L94.7849 21.3014ZM100.834 9.99057L104.009 11.1506C107.428 12.3999 107.345 15.308 106.384 17.9379C105.423 20.5679 103.618 22.8257 100.199 21.5764L97.0247 20.4164L100.834 9.99057Z"
          fill={color}
        />
        <path
          d="M147.575 102.541C148.783 100.747 149.555 99.3889 151.34 100.04C152.449 100.444 152.811 101.726 152.119 103.624C151.345 105.747 150.035 106.419 148.143 106.005L147.526 107.697C150.389 108.485 152.581 107.028 153.622 104.172C154.705 101.203 153.892 99.0546 151.769 98.2803C149.157 97.3278 147.585 99.4793 146.382 101.319C144.59 104.071 143.889 104.944 142.047 104.272C140.845 103.834 140.075 102.616 140.925 100.287C141.953 97.4681 143.792 96.8615 145.702 97.3451L146.319 95.6541C143.169 94.7182 140.58 96.563 139.422 99.7384C138.182 103.139 139.477 105.251 141.431 105.963C144.493 107.08 145.72 105.292 147.575 102.541Z"
          fill={color}
        />
        <path
          d="M138.939 122.983L138.092 124.571C140.652 125.551 143.718 124.647 145.365 121.559C147.209 118.1 145.727 114.25 141.933 112.226C138.121 110.193 134.097 111.108 132.253 114.567C130.596 117.673 131.554 120.722 134.192 122.491L135.039 120.903C133.507 119.95 132.253 117.967 133.665 115.32C135.264 112.32 138.527 112.45 141.086 113.815C143.627 115.17 145.553 117.806 143.953 120.806C142.551 123.436 140.261 123.393 138.939 122.983Z"
          fill={color}
        />
        <path
          d="M126.591 123.184L125.321 124.459L129.418 128.537L126.525 131.443C123.971 134.008 121.26 129.39 120.397 129.406L119.028 130.781L119.113 130.865C119.805 130.51 122.97 135.297 125.653 133.481L125.681 133.509C124.85 134.911 124.966 136.41 126.426 137.864C128.226 139.656 130.644 139.382 132.634 137.383L136.726 133.273L126.591 123.184ZM134.322 133.419L131.796 135.957C130.752 137.005 129.312 138.197 127.554 136.447C125.797 134.697 126.982 133.252 128.026 132.203L130.552 129.666L134.322 133.419Z"
          fill={color}
        />
        <path
          d="M109.501 135.939C105.906 138.111 105.133 142.246 107.356 145.927C109.579 149.607 113.589 150.83 117.184 148.659C120.779 146.487 121.563 142.369 119.339 138.688C117.116 135.008 113.096 133.768 109.501 135.939ZM110.328 137.309C113.41 135.447 116.206 136.983 117.799 139.619C119.391 142.255 119.438 145.428 116.357 147.289C113.275 149.151 110.489 147.632 108.897 144.996C107.304 142.36 107.247 139.17 110.328 137.309Z"
          fill={color}
        />
        <path
          d="M45.3512 132.871C42.1767 130.121 38.0044 130.661 35.1889 133.911C32.3734 137.161 32.4468 141.353 35.6213 144.103C38.7957 146.853 42.9549 146.328 45.7705 143.078C48.586 139.828 48.5257 135.621 45.3512 132.871ZM44.3036 134.08C47.0245 136.438 46.4267 139.571 44.41 141.899C42.3933 144.227 39.3899 145.25 36.6689 142.893C33.9479 140.536 34.5327 137.417 36.5494 135.09C38.5661 132.762 41.5826 131.723 44.3036 134.08Z"
          fill={color}
        />
        <path
          d="M24.6681 133.926L34.2337 122.723L33.0693 121.097L21.1801 125.551L21.1568 125.519L29.2035 115.698L28.0391 114.072L14.3516 119.519L15.4578 121.064L26.5703 116.452L26.5935 116.485L18.9277 125.91L20.0921 127.536L31.484 123.314L31.5073 123.347L23.562 132.381L24.6681 133.926Z"
          fill={color}
        />
        <path
          d="M22.6027 106.833L22.1307 105.096L10.8016 108.175L10.7911 108.137L20.2477 98.1675L19.6707 96.0445L5.87122 99.7948L6.34329 101.532L17.711 98.4424L17.7215 98.481L8.22631 108.46L8.80328 110.583L22.6027 106.833Z"
          fill={color}
        />
        <path
          d="M101.857 154.695L98.8124 140.723L89.7256 142.703L90.0663 144.266L97.3943 142.67L100.098 155.079L101.857 154.695Z"
          fill={color}
        />
        <path
          d="M85.8116 157.715L85.9815 143.416L76.6822 143.305L76.6632 144.905L84.1626 144.994L84.0117 157.693L85.8116 157.715Z"
          fill={color}
        />
        <path
          d="M66.0469 142.134L61.1816 140.356C57.4809 139.004 54.3361 140.559 52.7574 144.88C51.1786 149.2 52.573 152.436 56.2737 153.788L61.139 155.566L66.0469 142.134ZM59.9975 153.445L56.8228 152.285C53.4039 151.036 53.487 148.128 54.448 145.498C55.409 142.868 57.2135 140.61 60.6324 141.859L63.8071 143.019L59.9975 153.445Z"
          fill={color}
        />
      </g>
      <g className="group-hover:animate-pulse-outward">
        <path
          d="M56.8384 51.455L56.2935 50.6166L54.6166 51.7065L55.1616 52.545L56.8384 51.455ZM55.1616 52.545L94.1616 112.545L95.8384 111.455L56.8384 51.455L55.1616 52.545Z"
          fill={color}
        />
        <path d="M85.5 110L95 112L97 102.5" stroke={color} strokeWidth="2" />
      </g>
    </svg>
  );
}
