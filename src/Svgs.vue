<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       xmlnsXlink="http://www.w3.org/1999/xlink"
       style="position: absolute; width: 0; height: 0">
    <defs>

      <symbol viewBox="0 0 1024 1024"
              id="copy">
        <path d="M672 832 224 832c-52.928 0-96-43.072-96-96L128 160c0-52.928 43.072-96 96-96l448 0c52.928 0 96 43.072 96 96l0 576C768 788.928 724.928 832 672 832zM224 128C206.368 128 192 142.368 192 160l0 576c0 17.664 14.368 32 32 32l448 0c17.664 0 32-14.336 32-32L704 160c0-17.632-14.336-32-32-32L224 128zM800 960 320 960c-17.664 0-32-14.304-32-32s14.336-32 32-32l480 0c17.664 0 32-14.336 32-32L832 256c0-17.664 14.304-32 32-32s32 14.336 32 32l0 608C896 916.928 852.928 960 800 960zM544 320 288 320c-17.664 0-32-14.336-32-32s14.336-32 32-32l256 0c17.696 0 32 14.336 32 32S561.696 320 544 320zM608 480 288.032 480c-17.664 0-32-14.336-32-32s14.336-32 32-32L608 416c17.696 0 32 14.336 32 32S625.696 480 608 480zM608 640 288 640c-17.664 0-32-14.304-32-32s14.336-32 32-32l320 0c17.696 0 32 14.304 32 32S625.696 640 608 640z"></path>
      </symbol>

      <symbol viewBox="0 0 1024 1024"
              id="play">
        <path d="M713.896 393.15l-240-158.691c-80.996-54.004-150-17.987-150 80.996v360c0 98.73 65.703 134.707 150 80.703l240-158.711c80.724-60 80.724-150 0-203.984v-0.313z"></path>
      </symbol>

      <!-- loading: http://demo.lanrenzhijia.com/demo/49/4989/demo/   http://www.htmleaf.com/Demo/201501071122.html -->
      <symbol viewBox="0 0 100 100"
              id="loading2">
        <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
              transform="rotate(281.881 50 50)">
          <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            dur="1s"
                            from="0 50 50"
                            to="360 50 50"
                            repeatCount="indefinite"></animateTransform>
        </path>
      </symbol>

      <symbol viewBox="0 0 44 44"
              id="loading">
        <g fill="none"
           fill-rule="evenodd"
           stroke-width="2">
          <circle cx="22"
                  cy="22"
                  r="1">
            <animate attributeName="r"
                     begin="0s"
                     dur="1.8s"
                     values="1; 20"
                     calcMode="spline"
                     keyTimes="0; 1"
                     keySplines="0.165, 0.84, 0.44, 1"
                     repeatCount="indefinite" />
            <animate attributeName="stroke-opacity"
                     begin="0s"
                     dur="1.8s"
                     values="1; 0"
                     calcMode="spline"
                     keyTimes="0; 1"
                     keySplines="0.3, 0.61, 0.355, 1"
                     repeatCount="indefinite" />
          </circle>
          <circle cx="22"
                  cy="22"
                  r="1">
            <animate attributeName="r"
                     begin="-0.9s"
                     dur="1.8s"
                     values="1; 20"
                     calcMode="spline"
                     keyTimes="0; 1"
                     keySplines="0.165, 0.84, 0.44, 1"
                     repeatCount="indefinite" />
            <animate attributeName="stroke-opacity"
                     begin="-0.9s"
                     dur="1.8s"
                     values="1; 0"
                     calcMode="spline"
                     keyTimes="0; 1"
                     keySplines="0.3, 0.61, 0.355, 1"
                     repeatCount="indefinite" />
          </circle>
        </g>
      </symbol>

      <symbol viewBox="0 0 120 30"
              id="loading-dots">
        <circle cx="15"
                cy="15"
                r="15">
          <animate attributeName="r"
                   from="15"
                   to="15"
                   begin="0s"
                   dur="0.8s"
                   values="15;9;15"
                   calcMode="linear"
                   repeatCount="indefinite" />
          <animate attributeName="fill-opacity"
                   from="1"
                   to="1"
                   begin="0s"
                   dur="0.8s"
                   values="1;.5;1"
                   calcMode="linear"
                   repeatCount="indefinite" />
        </circle>
        <circle cx="60"
                cy="15"
                r="9"
                fill-opacity="0.3">
          <animate attributeName="r"
                   from="9"
                   to="9"
                   begin="0s"
                   dur="0.8s"
                   values="9;15;9"
                   calcMode="linear"
                   repeatCount="indefinite" />
          <animate attributeName="fill-opacity"
                   from="0.5"
                   to="0.5"
                   begin="0s"
                   dur="0.8s"
                   values=".5;1;.5"
                   calcMode="linear"
                   repeatCount="indefinite" />
        </circle>
        <circle cx="105"
                cy="15"
                r="15">
          <animate attributeName="r"
                   from="15"
                   to="15"
                   begin="0s"
                   dur="0.8s"
                   values="15;9;15"
                   calcMode="linear"
                   repeatCount="indefinite" />
          <animate attributeName="fill-opacity"
                   from="1"
                   to="1"
                   begin="0s"
                   dur="0.8s"
                   values="1;.5;1"
                   calcMode="linear"
                   repeatCount="indefinite" />
        </circle>
      </symbol>
    </defs>
  </svg>
</template>
