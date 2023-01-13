/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2004.0, "minX": 0.0, "maxY": 82407.0, "series": [{"data": [[0.0, 2004.0], [0.1, 2004.0], [0.2, 2004.0], [0.3, 2004.0], [0.4, 2066.0], [0.5, 2066.0], [0.6, 2066.0], [0.7, 2066.0], [0.8, 2110.0], [0.9, 2110.0], [1.0, 2110.0], [1.1, 2110.0], [1.2, 2110.0], [1.3, 2135.0], [1.4, 2135.0], [1.5, 2135.0], [1.6, 2154.0], [1.7, 2154.0], [1.8, 2154.0], [1.9, 2154.0], [2.0, 2201.0], [2.1, 2201.0], [2.2, 2201.0], [2.3, 2201.0], [2.4, 2215.0], [2.5, 2215.0], [2.6, 2215.0], [2.7, 2215.0], [2.8, 2232.0], [2.9, 2232.0], [3.0, 2232.0], [3.1, 2232.0], [3.2, 2247.0], [3.3, 2247.0], [3.4, 2247.0], [3.5, 2247.0], [3.6, 2247.0], [3.7, 2247.0], [3.8, 2247.0], [3.9, 2247.0], [4.0, 2266.0], [4.1, 2266.0], [4.2, 2266.0], [4.3, 2266.0], [4.4, 2273.0], [4.5, 2273.0], [4.6, 2273.0], [4.7, 2273.0], [4.8, 2273.0], [4.9, 2312.0], [5.0, 2312.0], [5.1, 2312.0], [5.2, 2312.0], [5.3, 2341.0], [5.4, 2341.0], [5.5, 2341.0], [5.6, 2341.0], [5.7, 2341.0], [5.8, 2341.0], [5.9, 2341.0], [6.0, 2341.0], [6.1, 2361.0], [6.2, 2361.0], [6.3, 2361.0], [6.4, 2361.0], [6.5, 2366.0], [6.6, 2366.0], [6.7, 2366.0], [6.8, 2366.0], [6.9, 2387.0], [7.0, 2387.0], [7.1, 2387.0], [7.2, 2387.0], [7.3, 2407.0], [7.4, 2407.0], [7.5, 2407.0], [7.6, 2407.0], [7.7, 2407.0], [7.8, 2407.0], [7.9, 2407.0], [8.0, 2407.0], [8.1, 2407.0], [8.2, 2407.0], [8.3, 2407.0], [8.4, 2407.0], [8.5, 2416.0], [8.6, 2416.0], [8.7, 2416.0], [8.8, 2416.0], [8.9, 2424.0], [9.0, 2424.0], [9.1, 2424.0], [9.2, 2424.0], [9.3, 2442.0], [9.4, 2442.0], [9.5, 2442.0], [9.6, 2442.0], [9.7, 2442.0], [9.8, 2442.0], [9.9, 2442.0], [10.0, 2442.0], [10.1, 2465.0], [10.2, 2465.0], [10.3, 2465.0], [10.4, 2465.0], [10.5, 2472.0], [10.6, 2472.0], [10.7, 2472.0], [10.8, 2472.0], [10.9, 2475.0], [11.0, 2475.0], [11.1, 2475.0], [11.2, 2475.0], [11.3, 2475.0], [11.4, 2475.0], [11.5, 2475.0], [11.6, 2475.0], [11.7, 2476.0], [11.8, 2476.0], [11.9, 2476.0], [12.0, 2476.0], [12.1, 2476.0], [12.2, 2476.0], [12.3, 2476.0], [12.4, 2476.0], [12.5, 2478.0], [12.6, 2478.0], [12.7, 2478.0], [12.8, 2478.0], [12.9, 2478.0], [13.0, 2478.0], [13.1, 2478.0], [13.2, 2478.0], [13.3, 2484.0], [13.4, 2484.0], [13.5, 2484.0], [13.6, 2484.0], [13.7, 2488.0], [13.8, 2488.0], [13.9, 2488.0], [14.0, 2488.0], [14.1, 2494.0], [14.2, 2494.0], [14.3, 2494.0], [14.4, 2494.0], [14.5, 2496.0], [14.6, 2496.0], [14.7, 2496.0], [14.8, 2496.0], [14.9, 2516.0], [15.0, 2516.0], [15.1, 2516.0], [15.2, 2516.0], [15.3, 2529.0], [15.4, 2529.0], [15.5, 2529.0], [15.6, 2529.0], [15.7, 2532.0], [15.8, 2532.0], [15.9, 2532.0], [16.0, 2532.0], [16.1, 2539.0], [16.2, 2539.0], [16.3, 2539.0], [16.4, 2539.0], [16.5, 2547.0], [16.6, 2547.0], [16.7, 2547.0], [16.8, 2547.0], [16.9, 2548.0], [17.0, 2548.0], [17.1, 2548.0], [17.2, 2548.0], [17.3, 2580.0], [17.4, 2580.0], [17.5, 2580.0], [17.6, 2581.0], [17.7, 2581.0], [17.8, 2581.0], [17.9, 2581.0], [18.0, 2585.0], [18.1, 2585.0], [18.2, 2585.0], [18.3, 2585.0], [18.4, 2587.0], [18.5, 2587.0], [18.6, 2587.0], [18.7, 2587.0], [18.8, 2588.0], [18.9, 2588.0], [19.0, 2588.0], [19.1, 2588.0], [19.2, 2598.0], [19.3, 2598.0], [19.4, 2598.0], [19.5, 2598.0], [19.6, 2602.0], [19.7, 2602.0], [19.8, 2602.0], [19.9, 2602.0], [20.0, 2644.0], [20.1, 2644.0], [20.2, 2644.0], [20.3, 2644.0], [20.4, 2660.0], [20.5, 2660.0], [20.6, 2660.0], [20.7, 2660.0], [20.8, 2669.0], [20.9, 2669.0], [21.0, 2669.0], [21.1, 2669.0], [21.2, 2683.0], [21.3, 2683.0], [21.4, 2683.0], [21.5, 2683.0], [21.6, 2701.0], [21.7, 2701.0], [21.8, 2701.0], [21.9, 2701.0], [22.0, 2721.0], [22.1, 2721.0], [22.2, 2721.0], [22.3, 2721.0], [22.4, 2730.0], [22.5, 2730.0], [22.6, 2730.0], [22.7, 2730.0], [22.8, 2733.0], [22.9, 2733.0], [23.0, 2733.0], [23.1, 2733.0], [23.2, 2738.0], [23.3, 2738.0], [23.4, 2738.0], [23.5, 2738.0], [23.6, 2739.0], [23.7, 2739.0], [23.8, 2739.0], [23.9, 2739.0], [24.0, 2742.0], [24.1, 2742.0], [24.2, 2742.0], [24.3, 2742.0], [24.4, 2743.0], [24.5, 2743.0], [24.6, 2743.0], [24.7, 2743.0], [24.8, 2743.0], [24.9, 2743.0], [25.0, 2743.0], [25.1, 2743.0], [25.2, 2766.0], [25.3, 2766.0], [25.4, 2766.0], [25.5, 2766.0], [25.6, 2767.0], [25.7, 2767.0], [25.8, 2767.0], [25.9, 2767.0], [26.0, 2776.0], [26.1, 2776.0], [26.2, 2776.0], [26.3, 2776.0], [26.4, 2780.0], [26.5, 2780.0], [26.6, 2780.0], [26.7, 2780.0], [26.8, 2803.0], [26.9, 2803.0], [27.0, 2803.0], [27.1, 2803.0], [27.2, 2833.0], [27.3, 2833.0], [27.4, 2833.0], [27.5, 2833.0], [27.6, 2848.0], [27.7, 2848.0], [27.8, 2848.0], [27.9, 2848.0], [28.0, 2876.0], [28.1, 2876.0], [28.2, 2876.0], [28.3, 2876.0], [28.4, 2880.0], [28.5, 2880.0], [28.6, 2880.0], [28.7, 2880.0], [28.8, 2887.0], [28.9, 2887.0], [29.0, 2887.0], [29.1, 2887.0], [29.2, 2887.0], [29.3, 2887.0], [29.4, 2887.0], [29.5, 2887.0], [29.6, 2895.0], [29.7, 2895.0], [29.8, 2895.0], [29.9, 2895.0], [30.0, 2902.0], [30.1, 2902.0], [30.2, 2902.0], [30.3, 2902.0], [30.4, 2908.0], [30.5, 2908.0], [30.6, 2908.0], [30.7, 2908.0], [30.8, 2930.0], [30.9, 2930.0], [31.0, 2930.0], [31.1, 2930.0], [31.2, 2936.0], [31.3, 2936.0], [31.4, 2936.0], [31.5, 2936.0], [31.6, 2945.0], [31.7, 2945.0], [31.8, 2945.0], [31.9, 2945.0], [32.0, 2963.0], [32.1, 2963.0], [32.2, 2963.0], [32.3, 2963.0], [32.4, 2983.0], [32.5, 2983.0], [32.6, 2983.0], [32.7, 2983.0], [32.8, 2989.0], [32.9, 2989.0], [33.0, 2989.0], [33.1, 2989.0], [33.2, 2990.0], [33.3, 2990.0], [33.4, 2990.0], [33.5, 2990.0], [33.6, 2991.0], [33.7, 2991.0], [33.8, 2991.0], [33.9, 2991.0], [34.0, 2997.0], [34.1, 2997.0], [34.2, 2997.0], [34.3, 2997.0], [34.4, 2999.0], [34.5, 2999.0], [34.6, 2999.0], [34.7, 2999.0], [34.8, 3001.0], [34.9, 3001.0], [35.0, 3001.0], [35.1, 3001.0], [35.2, 3003.0], [35.3, 3003.0], [35.4, 3003.0], [35.5, 3003.0], [35.6, 3006.0], [35.7, 3006.0], [35.8, 3006.0], [35.9, 3006.0], [36.0, 3011.0], [36.1, 3011.0], [36.2, 3011.0], [36.3, 3011.0], [36.4, 3043.0], [36.5, 3043.0], [36.6, 3043.0], [36.7, 3043.0], [36.8, 3045.0], [36.9, 3045.0], [37.0, 3045.0], [37.1, 3045.0], [37.2, 3049.0], [37.3, 3049.0], [37.4, 3049.0], [37.5, 3049.0], [37.6, 3060.0], [37.7, 3060.0], [37.8, 3060.0], [37.9, 3060.0], [38.0, 3068.0], [38.1, 3068.0], [38.2, 3068.0], [38.3, 3068.0], [38.4, 3076.0], [38.5, 3076.0], [38.6, 3076.0], [38.7, 3076.0], [38.8, 3093.0], [38.9, 3093.0], [39.0, 3093.0], [39.1, 3093.0], [39.2, 3093.0], [39.3, 3093.0], [39.4, 3093.0], [39.5, 3093.0], [39.6, 3095.0], [39.7, 3095.0], [39.8, 3095.0], [39.9, 3095.0], [40.0, 3101.0], [40.1, 3101.0], [40.2, 3101.0], [40.3, 3101.0], [40.4, 3109.0], [40.5, 3109.0], [40.6, 3109.0], [40.7, 3109.0], [40.8, 3109.0], [40.9, 3109.0], [41.0, 3109.0], [41.1, 3109.0], [41.2, 3114.0], [41.3, 3114.0], [41.4, 3114.0], [41.5, 3114.0], [41.6, 3118.0], [41.7, 3118.0], [41.8, 3118.0], [41.9, 3118.0], [42.0, 3118.0], [42.1, 3118.0], [42.2, 3118.0], [42.3, 3118.0], [42.4, 3127.0], [42.5, 3127.0], [42.6, 3127.0], [42.7, 3127.0], [42.8, 3128.0], [42.9, 3128.0], [43.0, 3128.0], [43.1, 3128.0], [43.2, 3134.0], [43.3, 3134.0], [43.4, 3134.0], [43.5, 3134.0], [43.6, 3138.0], [43.7, 3138.0], [43.8, 3138.0], [43.9, 3138.0], [44.0, 3152.0], [44.1, 3152.0], [44.2, 3152.0], [44.3, 3152.0], [44.4, 3173.0], [44.5, 3173.0], [44.6, 3173.0], [44.7, 3173.0], [44.8, 3175.0], [44.9, 3175.0], [45.0, 3175.0], [45.1, 3175.0], [45.2, 3177.0], [45.3, 3177.0], [45.4, 3177.0], [45.5, 3177.0], [45.6, 3187.0], [45.7, 3187.0], [45.8, 3187.0], [45.9, 3187.0], [46.0, 3190.0], [46.1, 3190.0], [46.2, 3190.0], [46.3, 3190.0], [46.4, 3192.0], [46.5, 3192.0], [46.6, 3192.0], [46.7, 3192.0], [46.8, 3199.0], [46.9, 3199.0], [47.0, 3199.0], [47.1, 3199.0], [47.2, 3205.0], [47.3, 3205.0], [47.4, 3205.0], [47.5, 3205.0], [47.6, 3216.0], [47.7, 3216.0], [47.8, 3216.0], [47.9, 3216.0], [48.0, 3221.0], [48.1, 3221.0], [48.2, 3221.0], [48.3, 3221.0], [48.4, 3225.0], [48.5, 3225.0], [48.6, 3225.0], [48.7, 3225.0], [48.8, 3237.0], [48.9, 3237.0], [49.0, 3237.0], [49.1, 3237.0], [49.2, 3248.0], [49.3, 3248.0], [49.4, 3248.0], [49.5, 3248.0], [49.6, 3280.0], [49.7, 3280.0], [49.8, 3280.0], [49.9, 3280.0], [50.0, 3323.0], [50.1, 3323.0], [50.2, 3323.0], [50.3, 3323.0], [50.4, 3346.0], [50.5, 3346.0], [50.6, 3346.0], [50.7, 3346.0], [50.8, 3347.0], [50.9, 3347.0], [51.0, 3347.0], [51.1, 3347.0], [51.2, 3349.0], [51.3, 3349.0], [51.4, 3349.0], [51.5, 3349.0], [51.6, 3381.0], [51.7, 3381.0], [51.8, 3381.0], [51.9, 3381.0], [52.0, 3387.0], [52.1, 3387.0], [52.2, 3387.0], [52.3, 3387.0], [52.4, 3393.0], [52.5, 3393.0], [52.6, 3393.0], [52.7, 3393.0], [52.8, 3405.0], [52.9, 3405.0], [53.0, 3405.0], [53.1, 3405.0], [53.2, 3419.0], [53.3, 3419.0], [53.4, 3419.0], [53.5, 3419.0], [53.6, 3426.0], [53.7, 3426.0], [53.8, 3426.0], [53.9, 3426.0], [54.0, 3432.0], [54.1, 3432.0], [54.2, 3432.0], [54.3, 3432.0], [54.4, 3434.0], [54.5, 3434.0], [54.6, 3434.0], [54.7, 3434.0], [54.8, 3439.0], [54.9, 3439.0], [55.0, 3439.0], [55.1, 3439.0], [55.2, 3457.0], [55.3, 3457.0], [55.4, 3457.0], [55.5, 3457.0], [55.6, 3461.0], [55.7, 3461.0], [55.8, 3461.0], [55.9, 3461.0], [56.0, 3479.0], [56.1, 3479.0], [56.2, 3479.0], [56.3, 3479.0], [56.4, 3480.0], [56.5, 3480.0], [56.6, 3480.0], [56.7, 3480.0], [56.8, 3495.0], [56.9, 3495.0], [57.0, 3495.0], [57.1, 3495.0], [57.2, 3496.0], [57.3, 3496.0], [57.4, 3496.0], [57.5, 3496.0], [57.6, 3498.0], [57.7, 3498.0], [57.8, 3498.0], [57.9, 3498.0], [58.0, 3505.0], [58.1, 3505.0], [58.2, 3505.0], [58.3, 3505.0], [58.4, 3532.0], [58.5, 3532.0], [58.6, 3532.0], [58.7, 3532.0], [58.8, 3561.0], [58.9, 3561.0], [59.0, 3561.0], [59.1, 3561.0], [59.2, 3566.0], [59.3, 3566.0], [59.4, 3566.0], [59.5, 3566.0], [59.6, 3596.0], [59.7, 3596.0], [59.8, 3596.0], [59.9, 3596.0], [60.0, 3627.0], [60.1, 3627.0], [60.2, 3627.0], [60.3, 3627.0], [60.4, 3645.0], [60.5, 3645.0], [60.6, 3645.0], [60.7, 3645.0], [60.8, 3657.0], [60.9, 3657.0], [61.0, 3657.0], [61.1, 3657.0], [61.2, 3730.0], [61.3, 3730.0], [61.4, 3730.0], [61.5, 3730.0], [61.6, 3744.0], [61.7, 3744.0], [61.8, 3744.0], [61.9, 3744.0], [62.0, 3764.0], [62.1, 3764.0], [62.2, 3764.0], [62.3, 3764.0], [62.4, 3792.0], [62.5, 3792.0], [62.6, 3792.0], [62.7, 3792.0], [62.8, 3829.0], [62.9, 3829.0], [63.0, 3829.0], [63.1, 3829.0], [63.2, 3847.0], [63.3, 3847.0], [63.4, 3847.0], [63.5, 3847.0], [63.6, 3869.0], [63.7, 3869.0], [63.8, 3869.0], [63.9, 3869.0], [64.0, 3910.0], [64.1, 3910.0], [64.2, 3910.0], [64.3, 3910.0], [64.4, 3918.0], [64.5, 3918.0], [64.6, 3918.0], [64.7, 3918.0], [64.8, 3937.0], [64.9, 3937.0], [65.0, 3937.0], [65.1, 3937.0], [65.2, 3967.0], [65.3, 3967.0], [65.4, 3967.0], [65.5, 3967.0], [65.6, 3985.0], [65.7, 3985.0], [65.8, 3985.0], [65.9, 3985.0], [66.0, 3996.0], [66.1, 3996.0], [66.2, 3996.0], [66.3, 3996.0], [66.4, 4028.0], [66.5, 4028.0], [66.6, 4028.0], [66.7, 4028.0], [66.8, 4028.0], [66.9, 4028.0], [67.0, 4028.0], [67.1, 4028.0], [67.2, 4037.0], [67.3, 4037.0], [67.4, 4037.0], [67.5, 4037.0], [67.6, 4054.0], [67.7, 4054.0], [67.8, 4054.0], [67.9, 4054.0], [68.0, 4066.0], [68.1, 4066.0], [68.2, 4066.0], [68.3, 4066.0], [68.4, 4078.0], [68.5, 4078.0], [68.6, 4078.0], [68.7, 4078.0], [68.8, 4092.0], [68.9, 4092.0], [69.0, 4092.0], [69.1, 4092.0], [69.2, 4108.0], [69.3, 4108.0], [69.4, 4108.0], [69.5, 4108.0], [69.6, 4130.0], [69.7, 4130.0], [69.8, 4130.0], [69.9, 4130.0], [70.0, 4151.0], [70.1, 4151.0], [70.2, 4151.0], [70.3, 4151.0], [70.4, 4193.0], [70.5, 4193.0], [70.6, 4193.0], [70.7, 4193.0], [70.8, 4203.0], [70.9, 4203.0], [71.0, 4203.0], [71.1, 4203.0], [71.2, 4265.0], [71.3, 4265.0], [71.4, 4265.0], [71.5, 4265.0], [71.6, 4288.0], [71.7, 4288.0], [71.8, 4288.0], [71.9, 4288.0], [72.0, 4288.0], [72.1, 4288.0], [72.2, 4288.0], [72.3, 4288.0], [72.4, 4301.0], [72.5, 4301.0], [72.6, 4301.0], [72.7, 4301.0], [72.8, 4347.0], [72.9, 4347.0], [73.0, 4347.0], [73.1, 4347.0], [73.2, 4419.0], [73.3, 4419.0], [73.4, 4419.0], [73.5, 4419.0], [73.6, 4433.0], [73.7, 4433.0], [73.8, 4433.0], [73.9, 4433.0], [74.0, 4448.0], [74.1, 4448.0], [74.2, 4448.0], [74.3, 4448.0], [74.4, 4452.0], [74.5, 4452.0], [74.6, 4452.0], [74.7, 4452.0], [74.8, 4462.0], [74.9, 4462.0], [75.0, 4462.0], [75.1, 4462.0], [75.2, 4468.0], [75.3, 4468.0], [75.4, 4468.0], [75.5, 4468.0], [75.6, 4574.0], [75.7, 4574.0], [75.8, 4574.0], [75.9, 4574.0], [76.0, 4605.0], [76.1, 4605.0], [76.2, 4605.0], [76.3, 4605.0], [76.4, 4624.0], [76.5, 4624.0], [76.6, 4624.0], [76.7, 4624.0], [76.8, 4646.0], [76.9, 4646.0], [77.0, 4646.0], [77.1, 4646.0], [77.2, 4672.0], [77.3, 4672.0], [77.4, 4672.0], [77.5, 4672.0], [77.6, 4672.0], [77.7, 4694.0], [77.8, 4694.0], [77.9, 4694.0], [78.0, 4694.0], [78.1, 4700.0], [78.2, 4700.0], [78.3, 4700.0], [78.4, 4700.0], [78.5, 4722.0], [78.6, 4722.0], [78.7, 4722.0], [78.8, 4722.0], [78.9, 4727.0], [79.0, 4727.0], [79.1, 4727.0], [79.2, 4727.0], [79.3, 4750.0], [79.4, 4750.0], [79.5, 4750.0], [79.6, 4750.0], [79.7, 4758.0], [79.8, 4758.0], [79.9, 4758.0], [80.0, 4758.0], [80.1, 4936.0], [80.2, 4936.0], [80.3, 4936.0], [80.4, 4936.0], [80.5, 4955.0], [80.6, 4955.0], [80.7, 4955.0], [80.8, 4955.0], [80.9, 4983.0], [81.0, 4983.0], [81.1, 4983.0], [81.2, 4983.0], [81.3, 5015.0], [81.4, 5015.0], [81.5, 5015.0], [81.6, 5015.0], [81.7, 5122.0], [81.8, 5122.0], [81.9, 5122.0], [82.0, 5122.0], [82.1, 5125.0], [82.2, 5125.0], [82.3, 5125.0], [82.4, 5125.0], [82.5, 5177.0], [82.6, 5177.0], [82.7, 5177.0], [82.8, 5177.0], [82.9, 5191.0], [83.0, 5191.0], [83.1, 5191.0], [83.2, 5191.0], [83.3, 5200.0], [83.4, 5200.0], [83.5, 5200.0], [83.6, 5200.0], [83.7, 5220.0], [83.8, 5220.0], [83.9, 5220.0], [84.0, 5220.0], [84.1, 5359.0], [84.2, 5359.0], [84.3, 5359.0], [84.4, 5359.0], [84.5, 5378.0], [84.6, 5378.0], [84.7, 5378.0], [84.8, 5378.0], [84.9, 5425.0], [85.0, 5425.0], [85.1, 5425.0], [85.2, 5425.0], [85.3, 5438.0], [85.4, 5438.0], [85.5, 5438.0], [85.6, 5438.0], [85.7, 5497.0], [85.8, 5497.0], [85.9, 5497.0], [86.0, 5497.0], [86.1, 5536.0], [86.2, 5536.0], [86.3, 5536.0], [86.4, 5536.0], [86.5, 5543.0], [86.6, 5543.0], [86.7, 5543.0], [86.8, 5543.0], [86.9, 5625.0], [87.0, 5625.0], [87.1, 5625.0], [87.2, 5625.0], [87.3, 5662.0], [87.4, 5662.0], [87.5, 5662.0], [87.6, 5662.0], [87.7, 5666.0], [87.8, 5666.0], [87.9, 5666.0], [88.0, 5666.0], [88.1, 5691.0], [88.2, 5691.0], [88.3, 5691.0], [88.4, 5691.0], [88.5, 5826.0], [88.6, 5826.0], [88.7, 5826.0], [88.8, 5826.0], [88.9, 5928.0], [89.0, 5928.0], [89.1, 5928.0], [89.2, 5928.0], [89.3, 5942.0], [89.4, 5942.0], [89.5, 5942.0], [89.6, 5942.0], [89.7, 6071.0], [89.8, 6071.0], [89.9, 6071.0], [90.0, 6071.0], [90.1, 6193.0], [90.2, 6193.0], [90.3, 6193.0], [90.4, 6193.0], [90.5, 6400.0], [90.6, 6400.0], [90.7, 6400.0], [90.8, 6400.0], [90.9, 6598.0], [91.0, 6598.0], [91.1, 6598.0], [91.2, 6598.0], [91.3, 6684.0], [91.4, 6684.0], [91.5, 6684.0], [91.6, 6684.0], [91.7, 6762.0], [91.8, 6762.0], [91.9, 6762.0], [92.0, 6762.0], [92.1, 6858.0], [92.2, 6858.0], [92.3, 6858.0], [92.4, 6858.0], [92.5, 6862.0], [92.6, 6862.0], [92.7, 6862.0], [92.8, 6862.0], [92.9, 6977.0], [93.0, 6977.0], [93.1, 6977.0], [93.2, 6977.0], [93.3, 7098.0], [93.4, 7098.0], [93.5, 7098.0], [93.6, 7098.0], [93.7, 7656.0], [93.8, 7656.0], [93.9, 7656.0], [94.0, 7656.0], [94.1, 7844.0], [94.2, 7844.0], [94.3, 7844.0], [94.4, 7844.0], [94.5, 7973.0], [94.6, 7973.0], [94.7, 7973.0], [94.8, 7973.0], [94.9, 8079.0], [95.0, 8079.0], [95.1, 8079.0], [95.2, 8079.0], [95.3, 8083.0], [95.4, 8083.0], [95.5, 8083.0], [95.6, 8083.0], [95.7, 8309.0], [95.8, 8309.0], [95.9, 8309.0], [96.0, 8309.0], [96.1, 8562.0], [96.2, 8562.0], [96.3, 8562.0], [96.4, 8562.0], [96.5, 9378.0], [96.6, 9378.0], [96.7, 9378.0], [96.8, 9378.0], [96.9, 9571.0], [97.0, 9571.0], [97.1, 9571.0], [97.2, 9571.0], [97.3, 10735.0], [97.4, 10735.0], [97.5, 10735.0], [97.6, 10735.0], [97.7, 11450.0], [97.8, 11450.0], [97.9, 11450.0], [98.0, 11450.0], [98.1, 11558.0], [98.2, 11558.0], [98.3, 11558.0], [98.4, 11558.0], [98.5, 14055.0], [98.6, 14055.0], [98.7, 14055.0], [98.8, 14055.0], [98.9, 14951.0], [99.0, 14951.0], [99.1, 14951.0], [99.2, 14951.0], [99.3, 25409.0], [99.4, 25409.0], [99.5, 25409.0], [99.6, 25409.0], [99.7, 82407.0], [99.8, 82407.0], [99.9, 82407.0], [100.0, 82407.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 2000.0, "maxY": 19.0, "series": [{"data": [[2000.0, 2.0], [2100.0, 3.0], [2200.0, 7.0], [2300.0, 6.0], [2400.0, 19.0], [2500.0, 12.0], [2600.0, 5.0], [2800.0, 8.0], [2700.0, 13.0], [2900.0, 12.0], [3000.0, 13.0], [3100.0, 18.0], [3300.0, 7.0], [3200.0, 7.0], [3400.0, 13.0], [3500.0, 5.0], [3700.0, 4.0], [3600.0, 3.0], [3800.0, 3.0], [3900.0, 6.0], [4000.0, 7.0], [4100.0, 4.0], [4200.0, 4.0], [4300.0, 2.0], [4400.0, 6.0], [4600.0, 5.0], [4500.0, 1.0], [4700.0, 5.0], [4900.0, 3.0], [5100.0, 4.0], [5000.0, 1.0], [5300.0, 2.0], [5200.0, 2.0], [5500.0, 2.0], [5600.0, 4.0], [5400.0, 3.0], [5800.0, 1.0], [6000.0, 1.0], [5900.0, 2.0], [6100.0, 1.0], [6500.0, 1.0], [6400.0, 1.0], [6600.0, 1.0], [6800.0, 2.0], [6900.0, 1.0], [6700.0, 1.0], [7000.0, 1.0], [7600.0, 1.0], [7800.0, 1.0], [7900.0, 1.0], [8000.0, 2.0], [8300.0, 1.0], [8500.0, 1.0], [9500.0, 1.0], [9300.0, 1.0], [10700.0, 1.0], [11400.0, 1.0], [11500.0, 1.0], [14000.0, 1.0], [14900.0, 1.0], [25400.0, 1.0], [82400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 82400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 249.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 249.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.67351538E12, "maxY": 77.21848739495802, "series": [{"data": [[1.6735155E12, 1.0], [1.67351544E12, 7.0], [1.67351538E12, 77.21848739495802]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6735155E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 2201.0, "minX": 1.0, "maxY": 82407.0, "series": [{"data": [[2.0, 25409.0], [3.0, 8562.0], [4.0, 14951.0], [5.0, 14055.0], [6.0, 9378.0], [7.0, 8309.0], [8.0, 11558.0], [9.0, 7656.0], [10.0, 6762.0], [11.0, 7973.0], [12.0, 5625.0], [13.0, 8079.0], [14.0, 4605.0], [15.0, 9571.0], [16.0, 6977.0], [17.0, 5666.0], [18.0, 5359.0], [19.0, 11450.0], [20.0, 4574.0], [21.0, 3918.0], [22.0, 4130.0], [23.0, 3847.0], [24.0, 5191.0], [25.0, 5942.0], [26.0, 4750.0], [27.0, 5425.0], [28.0, 4288.0], [29.0, 3190.0], [30.0, 4468.0], [31.0, 5200.0], [33.0, 4700.0], [32.0, 4955.0], [35.0, 3393.0], [34.0, 4624.0], [37.0, 3349.0], [36.0, 2989.0], [38.0, 2997.0], [41.0, 2936.0], [40.0, 5432.5], [43.0, 3498.0], [42.0, 3996.0], [45.0, 4066.0], [44.0, 6684.0], [47.0, 7844.0], [46.0, 3127.0], [49.0, 2341.0], [48.0, 3461.0], [51.0, 3128.0], [50.0, 5015.0], [53.0, 4301.0], [52.0, 5543.0], [55.0, 3434.0], [54.0, 4462.0], [57.0, 2529.0], [56.0, 3645.0], [59.0, 2983.0], [58.0, 2475.0], [61.0, 2991.0], [60.0, 2201.0], [63.0, 4936.0], [62.0, 6858.0], [67.0, 2902.0], [66.0, 5220.0], [65.0, 2442.0], [64.0, 2496.0], [70.0, 3381.5], [71.0, 2887.0], [69.0, 3003.0], [68.0, 2476.0], [75.0, 3397.5], [74.0, 5691.0], [73.0, 3792.0], [72.0, 3496.0], [77.0, 2853.75], [79.0, 3208.277777777778], [78.0, 3067.0], [76.0, 5052.5], [80.0, 3124.6875000000005], [83.0, 3623.777777777778], [82.0, 3073.6666666666665], [81.0, 2845.333333333333], [86.0, 4111.25], [87.0, 3277.5], [85.0, 2537.0], [84.0, 3187.0], [89.0, 3676.166666666667], [88.0, 3015.6666666666665], [91.0, 3643.0], [90.0, 3301.0], [92.0, 4430.333333333333], [93.0, 4453.0], [95.0, 3319.8], [94.0, 3152.0], [99.0, 3359.3], [98.0, 3755.8333333333335], [97.0, 3545.5], [96.0, 8083.0], [100.0, 3582.333333333333], [103.0, 3929.142857142857], [102.0, 3517.545454545455], [101.0, 3282.777777777778], [104.0, 3503.0], [1.0, 82407.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[73.82400000000001, 4328.731999999999]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 104.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.67351538E12, "maxY": 255847.01666666666, "series": [{"data": [[1.6735155E12, 22.366666666666667], [1.67351544E12, 11824.816666666668], [1.67351538E12, 255847.01666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6735155E12, 0.0], [1.67351544E12, 22.366666666666667], [1.67351538E12, 483.93333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6735155E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 3695.5378151260497, "minX": 1.67351538E12, "maxY": 82407.0, "series": [{"data": [[1.6735155E12, 82407.0], [1.67351544E12, 10930.727272727272], [1.67351538E12, 3695.5378151260497]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6735155E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1688.810924369748, "minX": 1.67351538E12, "maxY": 4348.090909090909, "series": [{"data": [[1.6735155E12, 2390.0], [1.67351544E12, 4348.090909090909], [1.67351538E12, 1688.810924369748]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6735155E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 475.0, "minX": 1.67351538E12, "maxY": 1315.7272727272727, "series": [{"data": [[1.6735155E12, 475.0], [1.67351544E12, 1315.7272727272727], [1.67351538E12, 634.7689075630253]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6735155E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 2004.0, "minX": 1.67351538E12, "maxY": 25409.0, "series": [{"data": [[1.67351544E12, 25409.0], [1.67351538E12, 11450.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.67351544E12, 23317.40000000001], [1.67351538E12, 5500.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.67351544E12, 25409.0], [1.67351538E12, 10281.039999999983]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.67351544E12, 25409.0], [1.67351538E12, 6602.299999999998]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.67351544E12, 5625.0], [1.67351538E12, 2004.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.67351544E12, 8562.0], [1.67351538E12, 3210.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67351544E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 2668.5, "minX": 1.0, "maxY": 82407.0, "series": [{"data": [[2.0, 6799.0], [8.0, 6321.5], [9.0, 4288.0], [3.0, 8843.5], [13.0, 3248.0], [16.0, 2668.5], [1.0, 25409.0], [19.0, 3730.0], [20.0, 3182.0], [24.0, 4183.5], [25.0, 3114.0], [26.0, 3113.5], [28.0, 3097.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 82407.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1260.0, "minX": 1.0, "maxY": 3859.5, "series": [{"data": [[2.0, 1813.5], [8.0, 3689.5], [9.0, 1284.0], [3.0, 3859.5], [13.0, 1309.0], [16.0, 1554.0], [1.0, 2893.0], [19.0, 1410.0], [20.0, 1345.5], [24.0, 1461.0], [25.0, 1260.0], [26.0, 1302.5], [28.0, 1453.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 2390.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 4.166666666666667, "minX": 1.67351538E12, "maxY": 4.166666666666667, "series": [{"data": [[1.67351538E12, 4.166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67351538E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.67351538E12, "maxY": 3.966666666666667, "series": [{"data": [[1.67351544E12, 0.18333333333333332], [1.67351538E12, 3.966666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6735155E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.ConnectionClosedException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6735155E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.67351538E12, "maxY": 3.966666666666667, "series": [{"data": [[1.67351544E12, 0.18333333333333332], [1.67351538E12, 3.966666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6735155E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6735155E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.67351538E12, "maxY": 3.966666666666667, "series": [{"data": [[1.67351544E12, 0.18333333333333332], [1.67351538E12, 3.966666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6735155E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6735155E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

