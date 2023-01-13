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
        data: {"result": {"minY": 2201.0, "minX": 0.0, "maxY": 13272.0, "series": [{"data": [[0.0, 2201.0], [0.1, 2201.0], [0.2, 2201.0], [0.3, 2201.0], [0.4, 2201.0], [0.5, 2201.0], [0.6, 2201.0], [0.7, 2201.0], [0.8, 2201.0], [0.9, 2201.0], [1.0, 2201.0], [1.1, 2201.0], [1.2, 2209.0], [1.3, 2209.0], [1.4, 2209.0], [1.5, 2209.0], [1.6, 2209.0], [1.7, 2209.0], [1.8, 2209.0], [1.9, 2209.0], [2.0, 2209.0], [2.1, 2209.0], [2.2, 2209.0], [2.3, 2228.0], [2.4, 2228.0], [2.5, 2228.0], [2.6, 2228.0], [2.7, 2228.0], [2.8, 2228.0], [2.9, 2228.0], [3.0, 2228.0], [3.1, 2228.0], [3.2, 2228.0], [3.3, 2228.0], [3.4, 2240.0], [3.5, 2240.0], [3.6, 2240.0], [3.7, 2240.0], [3.8, 2240.0], [3.9, 2240.0], [4.0, 2240.0], [4.1, 2240.0], [4.2, 2240.0], [4.3, 2240.0], [4.4, 2240.0], [4.5, 2362.0], [4.6, 2362.0], [4.7, 2362.0], [4.8, 2362.0], [4.9, 2362.0], [5.0, 2362.0], [5.1, 2362.0], [5.2, 2362.0], [5.3, 2362.0], [5.4, 2362.0], [5.5, 2362.0], [5.6, 2413.0], [5.7, 2413.0], [5.8, 2413.0], [5.9, 2413.0], [6.0, 2413.0], [6.1, 2413.0], [6.2, 2413.0], [6.3, 2413.0], [6.4, 2413.0], [6.5, 2413.0], [6.6, 2413.0], [6.7, 2430.0], [6.8, 2430.0], [6.9, 2430.0], [7.0, 2430.0], [7.1, 2430.0], [7.2, 2430.0], [7.3, 2430.0], [7.4, 2430.0], [7.5, 2430.0], [7.6, 2430.0], [7.7, 2430.0], [7.8, 2450.0], [7.9, 2450.0], [8.0, 2450.0], [8.1, 2450.0], [8.2, 2450.0], [8.3, 2450.0], [8.4, 2450.0], [8.5, 2450.0], [8.6, 2450.0], [8.7, 2450.0], [8.8, 2450.0], [8.9, 2478.0], [9.0, 2478.0], [9.1, 2478.0], [9.2, 2478.0], [9.3, 2478.0], [9.4, 2478.0], [9.5, 2478.0], [9.6, 2478.0], [9.7, 2478.0], [9.8, 2478.0], [9.9, 2478.0], [10.0, 2522.0], [10.1, 2522.0], [10.2, 2522.0], [10.3, 2522.0], [10.4, 2522.0], [10.5, 2522.0], [10.6, 2522.0], [10.7, 2522.0], [10.8, 2522.0], [10.9, 2522.0], [11.0, 2522.0], [11.1, 2522.0], [11.2, 2525.0], [11.3, 2525.0], [11.4, 2525.0], [11.5, 2525.0], [11.6, 2525.0], [11.7, 2525.0], [11.8, 2525.0], [11.9, 2525.0], [12.0, 2525.0], [12.1, 2525.0], [12.2, 2525.0], [12.3, 2575.0], [12.4, 2575.0], [12.5, 2575.0], [12.6, 2575.0], [12.7, 2575.0], [12.8, 2575.0], [12.9, 2575.0], [13.0, 2575.0], [13.1, 2575.0], [13.2, 2575.0], [13.3, 2575.0], [13.4, 2584.0], [13.5, 2584.0], [13.6, 2584.0], [13.7, 2584.0], [13.8, 2584.0], [13.9, 2584.0], [14.0, 2584.0], [14.1, 2584.0], [14.2, 2584.0], [14.3, 2584.0], [14.4, 2584.0], [14.5, 2587.0], [14.6, 2587.0], [14.7, 2587.0], [14.8, 2587.0], [14.9, 2587.0], [15.0, 2587.0], [15.1, 2587.0], [15.2, 2587.0], [15.3, 2587.0], [15.4, 2587.0], [15.5, 2587.0], [15.6, 2601.0], [15.7, 2601.0], [15.8, 2601.0], [15.9, 2601.0], [16.0, 2601.0], [16.1, 2601.0], [16.2, 2601.0], [16.3, 2601.0], [16.4, 2601.0], [16.5, 2601.0], [16.6, 2601.0], [16.7, 2645.0], [16.8, 2645.0], [16.9, 2645.0], [17.0, 2645.0], [17.1, 2645.0], [17.2, 2645.0], [17.3, 2645.0], [17.4, 2645.0], [17.5, 2645.0], [17.6, 2645.0], [17.7, 2645.0], [17.8, 2652.0], [17.9, 2652.0], [18.0, 2652.0], [18.1, 2652.0], [18.2, 2652.0], [18.3, 2652.0], [18.4, 2652.0], [18.5, 2652.0], [18.6, 2652.0], [18.7, 2652.0], [18.8, 2652.0], [18.9, 2673.0], [19.0, 2673.0], [19.1, 2673.0], [19.2, 2673.0], [19.3, 2673.0], [19.4, 2673.0], [19.5, 2673.0], [19.6, 2673.0], [19.7, 2673.0], [19.8, 2673.0], [19.9, 2673.0], [20.0, 2717.0], [20.1, 2717.0], [20.2, 2717.0], [20.3, 2717.0], [20.4, 2717.0], [20.5, 2717.0], [20.6, 2717.0], [20.7, 2717.0], [20.8, 2717.0], [20.9, 2717.0], [21.0, 2717.0], [21.1, 2717.0], [21.2, 2737.0], [21.3, 2737.0], [21.4, 2737.0], [21.5, 2737.0], [21.6, 2737.0], [21.7, 2737.0], [21.8, 2737.0], [21.9, 2737.0], [22.0, 2737.0], [22.1, 2737.0], [22.2, 2737.0], [22.3, 2885.0], [22.4, 2885.0], [22.5, 2885.0], [22.6, 2885.0], [22.7, 2885.0], [22.8, 2885.0], [22.9, 2885.0], [23.0, 2885.0], [23.1, 2885.0], [23.2, 2885.0], [23.3, 2885.0], [23.4, 2900.0], [23.5, 2900.0], [23.6, 2900.0], [23.7, 2900.0], [23.8, 2900.0], [23.9, 2900.0], [24.0, 2900.0], [24.1, 2900.0], [24.2, 2900.0], [24.3, 2900.0], [24.4, 2900.0], [24.5, 2921.0], [24.6, 2921.0], [24.7, 2921.0], [24.8, 2921.0], [24.9, 2921.0], [25.0, 2921.0], [25.1, 2921.0], [25.2, 2921.0], [25.3, 2921.0], [25.4, 2921.0], [25.5, 2921.0], [25.6, 2924.0], [25.7, 2924.0], [25.8, 2924.0], [25.9, 2924.0], [26.0, 2924.0], [26.1, 2924.0], [26.2, 2924.0], [26.3, 2924.0], [26.4, 2924.0], [26.5, 2924.0], [26.6, 2924.0], [26.7, 2927.0], [26.8, 2927.0], [26.9, 2927.0], [27.0, 2927.0], [27.1, 2927.0], [27.2, 2927.0], [27.3, 2927.0], [27.4, 2927.0], [27.5, 2927.0], [27.6, 2927.0], [27.7, 2927.0], [27.8, 2940.0], [27.9, 2940.0], [28.0, 2940.0], [28.1, 2940.0], [28.2, 2940.0], [28.3, 2940.0], [28.4, 2940.0], [28.5, 2940.0], [28.6, 2940.0], [28.7, 2940.0], [28.8, 2940.0], [28.9, 2953.0], [29.0, 2953.0], [29.1, 2953.0], [29.2, 2953.0], [29.3, 2953.0], [29.4, 2953.0], [29.5, 2953.0], [29.6, 2953.0], [29.7, 2953.0], [29.8, 2953.0], [29.9, 2953.0], [30.0, 2972.0], [30.1, 2972.0], [30.2, 2972.0], [30.3, 2972.0], [30.4, 2972.0], [30.5, 2972.0], [30.6, 2972.0], [30.7, 2972.0], [30.8, 2972.0], [30.9, 2972.0], [31.0, 2972.0], [31.1, 2972.0], [31.2, 2996.0], [31.3, 2996.0], [31.4, 2996.0], [31.5, 2996.0], [31.6, 2996.0], [31.7, 2996.0], [31.8, 2996.0], [31.9, 2996.0], [32.0, 2996.0], [32.1, 2996.0], [32.2, 2996.0], [32.3, 3002.0], [32.4, 3002.0], [32.5, 3002.0], [32.6, 3002.0], [32.7, 3002.0], [32.8, 3002.0], [32.9, 3002.0], [33.0, 3002.0], [33.1, 3002.0], [33.2, 3002.0], [33.3, 3002.0], [33.4, 3013.0], [33.5, 3013.0], [33.6, 3013.0], [33.7, 3013.0], [33.8, 3013.0], [33.9, 3013.0], [34.0, 3013.0], [34.1, 3013.0], [34.2, 3013.0], [34.3, 3013.0], [34.4, 3013.0], [34.5, 3060.0], [34.6, 3060.0], [34.7, 3060.0], [34.8, 3060.0], [34.9, 3060.0], [35.0, 3060.0], [35.1, 3060.0], [35.2, 3060.0], [35.3, 3060.0], [35.4, 3060.0], [35.5, 3060.0], [35.6, 3163.0], [35.7, 3163.0], [35.8, 3163.0], [35.9, 3163.0], [36.0, 3163.0], [36.1, 3163.0], [36.2, 3163.0], [36.3, 3163.0], [36.4, 3163.0], [36.5, 3163.0], [36.6, 3163.0], [36.7, 3170.0], [36.8, 3170.0], [36.9, 3170.0], [37.0, 3170.0], [37.1, 3170.0], [37.2, 3170.0], [37.3, 3170.0], [37.4, 3170.0], [37.5, 3170.0], [37.6, 3170.0], [37.7, 3170.0], [37.8, 3178.0], [37.9, 3178.0], [38.0, 3178.0], [38.1, 3178.0], [38.2, 3178.0], [38.3, 3178.0], [38.4, 3178.0], [38.5, 3178.0], [38.6, 3178.0], [38.7, 3178.0], [38.8, 3178.0], [38.9, 3180.0], [39.0, 3180.0], [39.1, 3180.0], [39.2, 3180.0], [39.3, 3180.0], [39.4, 3180.0], [39.5, 3180.0], [39.6, 3180.0], [39.7, 3180.0], [39.8, 3180.0], [39.9, 3180.0], [40.0, 3180.0], [40.1, 3185.0], [40.2, 3185.0], [40.3, 3185.0], [40.4, 3185.0], [40.5, 3185.0], [40.6, 3185.0], [40.7, 3185.0], [40.8, 3185.0], [40.9, 3185.0], [41.0, 3185.0], [41.1, 3185.0], [41.2, 3203.0], [41.3, 3203.0], [41.4, 3203.0], [41.5, 3203.0], [41.6, 3203.0], [41.7, 3203.0], [41.8, 3203.0], [41.9, 3203.0], [42.0, 3203.0], [42.1, 3203.0], [42.2, 3203.0], [42.3, 3213.0], [42.4, 3213.0], [42.5, 3213.0], [42.6, 3213.0], [42.7, 3213.0], [42.8, 3213.0], [42.9, 3213.0], [43.0, 3213.0], [43.1, 3213.0], [43.2, 3213.0], [43.3, 3213.0], [43.4, 3218.0], [43.5, 3218.0], [43.6, 3218.0], [43.7, 3218.0], [43.8, 3218.0], [43.9, 3218.0], [44.0, 3218.0], [44.1, 3218.0], [44.2, 3218.0], [44.3, 3218.0], [44.4, 3218.0], [44.5, 3231.0], [44.6, 3231.0], [44.7, 3231.0], [44.8, 3231.0], [44.9, 3231.0], [45.0, 3231.0], [45.1, 3231.0], [45.2, 3231.0], [45.3, 3231.0], [45.4, 3231.0], [45.5, 3231.0], [45.6, 3233.0], [45.7, 3233.0], [45.8, 3233.0], [45.9, 3233.0], [46.0, 3233.0], [46.1, 3233.0], [46.2, 3233.0], [46.3, 3233.0], [46.4, 3233.0], [46.5, 3233.0], [46.6, 3233.0], [46.7, 3234.0], [46.8, 3234.0], [46.9, 3234.0], [47.0, 3234.0], [47.1, 3234.0], [47.2, 3234.0], [47.3, 3234.0], [47.4, 3234.0], [47.5, 3234.0], [47.6, 3234.0], [47.7, 3234.0], [47.8, 3243.0], [47.9, 3243.0], [48.0, 3243.0], [48.1, 3243.0], [48.2, 3243.0], [48.3, 3243.0], [48.4, 3243.0], [48.5, 3243.0], [48.6, 3243.0], [48.7, 3243.0], [48.8, 3243.0], [48.9, 3265.0], [49.0, 3265.0], [49.1, 3265.0], [49.2, 3265.0], [49.3, 3265.0], [49.4, 3265.0], [49.5, 3265.0], [49.6, 3265.0], [49.7, 3265.0], [49.8, 3265.0], [49.9, 3265.0], [50.0, 3265.0], [50.1, 3379.0], [50.2, 3379.0], [50.3, 3379.0], [50.4, 3379.0], [50.5, 3379.0], [50.6, 3379.0], [50.7, 3379.0], [50.8, 3379.0], [50.9, 3379.0], [51.0, 3379.0], [51.1, 3379.0], [51.2, 3403.0], [51.3, 3403.0], [51.4, 3403.0], [51.5, 3403.0], [51.6, 3403.0], [51.7, 3403.0], [51.8, 3403.0], [51.9, 3403.0], [52.0, 3403.0], [52.1, 3403.0], [52.2, 3403.0], [52.3, 3414.0], [52.4, 3414.0], [52.5, 3414.0], [52.6, 3414.0], [52.7, 3414.0], [52.8, 3414.0], [52.9, 3414.0], [53.0, 3414.0], [53.1, 3414.0], [53.2, 3414.0], [53.3, 3414.0], [53.4, 3439.0], [53.5, 3439.0], [53.6, 3439.0], [53.7, 3439.0], [53.8, 3439.0], [53.9, 3439.0], [54.0, 3439.0], [54.1, 3439.0], [54.2, 3439.0], [54.3, 3439.0], [54.4, 3439.0], [54.5, 3447.0], [54.6, 3447.0], [54.7, 3447.0], [54.8, 3447.0], [54.9, 3447.0], [55.0, 3447.0], [55.1, 3447.0], [55.2, 3447.0], [55.3, 3447.0], [55.4, 3447.0], [55.5, 3447.0], [55.6, 3478.0], [55.7, 3478.0], [55.8, 3478.0], [55.9, 3478.0], [56.0, 3478.0], [56.1, 3478.0], [56.2, 3478.0], [56.3, 3478.0], [56.4, 3478.0], [56.5, 3478.0], [56.6, 3478.0], [56.7, 3590.0], [56.8, 3590.0], [56.9, 3590.0], [57.0, 3590.0], [57.1, 3590.0], [57.2, 3590.0], [57.3, 3590.0], [57.4, 3590.0], [57.5, 3590.0], [57.6, 3590.0], [57.7, 3590.0], [57.8, 3604.0], [57.9, 3604.0], [58.0, 3604.0], [58.1, 3604.0], [58.2, 3604.0], [58.3, 3604.0], [58.4, 3604.0], [58.5, 3604.0], [58.6, 3604.0], [58.7, 3604.0], [58.8, 3604.0], [58.9, 3710.0], [59.0, 3710.0], [59.1, 3710.0], [59.2, 3710.0], [59.3, 3710.0], [59.4, 3710.0], [59.5, 3710.0], [59.6, 3710.0], [59.7, 3710.0], [59.8, 3710.0], [59.9, 3710.0], [60.0, 3710.0], [60.1, 3786.0], [60.2, 3786.0], [60.3, 3786.0], [60.4, 3786.0], [60.5, 3786.0], [60.6, 3786.0], [60.7, 3786.0], [60.8, 3786.0], [60.9, 3786.0], [61.0, 3786.0], [61.1, 3786.0], [61.2, 3796.0], [61.3, 3796.0], [61.4, 3796.0], [61.5, 3796.0], [61.6, 3796.0], [61.7, 3796.0], [61.8, 3796.0], [61.9, 3796.0], [62.0, 3796.0], [62.1, 3796.0], [62.2, 3796.0], [62.3, 3997.0], [62.4, 3997.0], [62.5, 3997.0], [62.6, 3997.0], [62.7, 3997.0], [62.8, 3997.0], [62.9, 3997.0], [63.0, 3997.0], [63.1, 3997.0], [63.2, 3997.0], [63.3, 3997.0], [63.4, 4022.0], [63.5, 4022.0], [63.6, 4022.0], [63.7, 4022.0], [63.8, 4022.0], [63.9, 4022.0], [64.0, 4022.0], [64.1, 4022.0], [64.2, 4022.0], [64.3, 4022.0], [64.4, 4022.0], [64.5, 4099.0], [64.6, 4099.0], [64.7, 4099.0], [64.8, 4099.0], [64.9, 4099.0], [65.0, 4099.0], [65.1, 4099.0], [65.2, 4099.0], [65.3, 4099.0], [65.4, 4099.0], [65.5, 4099.0], [65.6, 4100.0], [65.7, 4100.0], [65.8, 4100.0], [65.9, 4100.0], [66.0, 4100.0], [66.1, 4100.0], [66.2, 4100.0], [66.3, 4100.0], [66.4, 4100.0], [66.5, 4100.0], [66.6, 4100.0], [66.7, 4349.0], [66.8, 4349.0], [66.9, 4349.0], [67.0, 4349.0], [67.1, 4349.0], [67.2, 4349.0], [67.3, 4349.0], [67.4, 4349.0], [67.5, 4349.0], [67.6, 4349.0], [67.7, 4349.0], [67.8, 4351.0], [67.9, 4351.0], [68.0, 4351.0], [68.1, 4351.0], [68.2, 4351.0], [68.3, 4351.0], [68.4, 4351.0], [68.5, 4351.0], [68.6, 4351.0], [68.7, 4351.0], [68.8, 4351.0], [68.9, 4450.0], [69.0, 4450.0], [69.1, 4450.0], [69.2, 4450.0], [69.3, 4450.0], [69.4, 4450.0], [69.5, 4450.0], [69.6, 4450.0], [69.7, 4450.0], [69.8, 4450.0], [69.9, 4450.0], [70.0, 4450.0], [70.1, 4682.0], [70.2, 4682.0], [70.3, 4682.0], [70.4, 4682.0], [70.5, 4682.0], [70.6, 4682.0], [70.7, 4682.0], [70.8, 4682.0], [70.9, 4682.0], [71.0, 4682.0], [71.1, 4682.0], [71.2, 4687.0], [71.3, 4687.0], [71.4, 4687.0], [71.5, 4687.0], [71.6, 4687.0], [71.7, 4687.0], [71.8, 4687.0], [71.9, 4687.0], [72.0, 4687.0], [72.1, 4687.0], [72.2, 4687.0], [72.3, 4883.0], [72.4, 4883.0], [72.5, 4883.0], [72.6, 4883.0], [72.7, 4883.0], [72.8, 4883.0], [72.9, 4883.0], [73.0, 4883.0], [73.1, 4883.0], [73.2, 4883.0], [73.3, 4883.0], [73.4, 4996.0], [73.5, 4996.0], [73.6, 4996.0], [73.7, 4996.0], [73.8, 4996.0], [73.9, 4996.0], [74.0, 4996.0], [74.1, 4996.0], [74.2, 4996.0], [74.3, 4996.0], [74.4, 4996.0], [74.5, 5262.0], [74.6, 5262.0], [74.7, 5262.0], [74.8, 5262.0], [74.9, 5262.0], [75.0, 5262.0], [75.1, 5262.0], [75.2, 5262.0], [75.3, 5262.0], [75.4, 5262.0], [75.5, 5262.0], [75.6, 5383.0], [75.7, 5383.0], [75.8, 5383.0], [75.9, 5383.0], [76.0, 5383.0], [76.1, 5383.0], [76.2, 5383.0], [76.3, 5383.0], [76.4, 5383.0], [76.5, 5383.0], [76.6, 5383.0], [76.7, 5452.0], [76.8, 5452.0], [76.9, 5452.0], [77.0, 5452.0], [77.1, 5452.0], [77.2, 5452.0], [77.3, 5452.0], [77.4, 5452.0], [77.5, 5452.0], [77.6, 5452.0], [77.7, 5452.0], [77.8, 5475.0], [77.9, 5475.0], [78.0, 5475.0], [78.1, 5475.0], [78.2, 5475.0], [78.3, 5475.0], [78.4, 5475.0], [78.5, 5475.0], [78.6, 5475.0], [78.7, 5475.0], [78.8, 5475.0], [78.9, 5516.0], [79.0, 5516.0], [79.1, 5516.0], [79.2, 5516.0], [79.3, 5516.0], [79.4, 5516.0], [79.5, 5516.0], [79.6, 5516.0], [79.7, 5516.0], [79.8, 5516.0], [79.9, 5516.0], [80.0, 5516.0], [80.1, 5648.0], [80.2, 5648.0], [80.3, 5648.0], [80.4, 5648.0], [80.5, 5648.0], [80.6, 5648.0], [80.7, 5648.0], [80.8, 5648.0], [80.9, 5648.0], [81.0, 5648.0], [81.1, 5648.0], [81.2, 5734.0], [81.3, 5734.0], [81.4, 5734.0], [81.5, 5734.0], [81.6, 5734.0], [81.7, 5734.0], [81.8, 5734.0], [81.9, 5734.0], [82.0, 5734.0], [82.1, 5734.0], [82.2, 5734.0], [82.3, 5836.0], [82.4, 5836.0], [82.5, 5836.0], [82.6, 5836.0], [82.7, 5836.0], [82.8, 5836.0], [82.9, 5836.0], [83.0, 5836.0], [83.1, 5836.0], [83.2, 5836.0], [83.3, 5836.0], [83.4, 6302.0], [83.5, 6302.0], [83.6, 6302.0], [83.7, 6302.0], [83.8, 6302.0], [83.9, 6302.0], [84.0, 6302.0], [84.1, 6302.0], [84.2, 6302.0], [84.3, 6302.0], [84.4, 6302.0], [84.5, 6385.0], [84.6, 6385.0], [84.7, 6385.0], [84.8, 6385.0], [84.9, 6385.0], [85.0, 6385.0], [85.1, 6385.0], [85.2, 6385.0], [85.3, 6385.0], [85.4, 6385.0], [85.5, 6385.0], [85.6, 6490.0], [85.7, 6490.0], [85.8, 6490.0], [85.9, 6490.0], [86.0, 6490.0], [86.1, 6490.0], [86.2, 6490.0], [86.3, 6490.0], [86.4, 6490.0], [86.5, 6490.0], [86.6, 6490.0], [86.7, 6561.0], [86.8, 6561.0], [86.9, 6561.0], [87.0, 6561.0], [87.1, 6561.0], [87.2, 6561.0], [87.3, 6561.0], [87.4, 6561.0], [87.5, 6561.0], [87.6, 6561.0], [87.7, 6561.0], [87.8, 6608.0], [87.9, 6608.0], [88.0, 6608.0], [88.1, 6608.0], [88.2, 6608.0], [88.3, 6608.0], [88.4, 6608.0], [88.5, 6608.0], [88.6, 6608.0], [88.7, 6608.0], [88.8, 6608.0], [88.9, 6761.0], [89.0, 6761.0], [89.1, 6761.0], [89.2, 6761.0], [89.3, 6761.0], [89.4, 6761.0], [89.5, 6761.0], [89.6, 6761.0], [89.7, 6761.0], [89.8, 6761.0], [89.9, 6761.0], [90.0, 6761.0], [90.1, 6848.0], [90.2, 6848.0], [90.3, 6848.0], [90.4, 6848.0], [90.5, 6848.0], [90.6, 6848.0], [90.7, 6848.0], [90.8, 6848.0], [90.9, 6848.0], [91.0, 6848.0], [91.1, 6848.0], [91.2, 6935.0], [91.3, 6935.0], [91.4, 6935.0], [91.5, 6935.0], [91.6, 6935.0], [91.7, 6935.0], [91.8, 6935.0], [91.9, 6935.0], [92.0, 6935.0], [92.1, 6935.0], [92.2, 6935.0], [92.3, 6980.0], [92.4, 6980.0], [92.5, 6980.0], [92.6, 6980.0], [92.7, 6980.0], [92.8, 6980.0], [92.9, 6980.0], [93.0, 6980.0], [93.1, 6980.0], [93.2, 6980.0], [93.3, 6980.0], [93.4, 7344.0], [93.5, 7344.0], [93.6, 7344.0], [93.7, 7344.0], [93.8, 7344.0], [93.9, 7344.0], [94.0, 7344.0], [94.1, 7344.0], [94.2, 7344.0], [94.3, 7344.0], [94.4, 7344.0], [94.5, 8889.0], [94.6, 8889.0], [94.7, 8889.0], [94.8, 8889.0], [94.9, 8889.0], [95.0, 8889.0], [95.1, 8889.0], [95.2, 8889.0], [95.3, 8889.0], [95.4, 8889.0], [95.5, 8889.0], [95.6, 9692.0], [95.7, 9692.0], [95.8, 9692.0], [95.9, 9692.0], [96.0, 9692.0], [96.1, 9692.0], [96.2, 9692.0], [96.3, 9692.0], [96.4, 9692.0], [96.5, 9692.0], [96.6, 9692.0], [96.7, 10709.0], [96.8, 10709.0], [96.9, 10709.0], [97.0, 10709.0], [97.1, 10709.0], [97.2, 10709.0], [97.3, 10709.0], [97.4, 10709.0], [97.5, 10709.0], [97.6, 10709.0], [97.7, 10709.0], [97.8, 11699.0], [97.9, 11699.0], [98.0, 11699.0], [98.1, 11699.0], [98.2, 11699.0], [98.3, 11699.0], [98.4, 11699.0], [98.5, 11699.0], [98.6, 11699.0], [98.7, 11699.0], [98.8, 11699.0], [98.9, 13272.0], [99.0, 13272.0], [99.1, 13272.0], [99.2, 13272.0], [99.3, 13272.0], [99.4, 13272.0], [99.5, 13272.0], [99.6, 13272.0], [99.7, 13272.0], [99.8, 13272.0], [99.9, 13272.0], [100.0, 13272.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2200.0, "maxY": 8.0, "series": [{"data": [[8800.0, 1.0], [9600.0, 1.0], [10700.0, 1.0], [11600.0, 1.0], [13200.0, 1.0], [2200.0, 4.0], [2300.0, 1.0], [2400.0, 4.0], [2500.0, 5.0], [2600.0, 4.0], [2700.0, 2.0], [2800.0, 1.0], [2900.0, 8.0], [3000.0, 3.0], [3100.0, 5.0], [3200.0, 8.0], [3300.0, 1.0], [3400.0, 5.0], [3500.0, 1.0], [3600.0, 1.0], [3700.0, 3.0], [3900.0, 1.0], [4000.0, 2.0], [4300.0, 2.0], [4100.0, 1.0], [4600.0, 2.0], [4400.0, 1.0], [4800.0, 1.0], [4900.0, 1.0], [5200.0, 1.0], [5300.0, 1.0], [5500.0, 1.0], [5400.0, 2.0], [5600.0, 1.0], [5800.0, 1.0], [5700.0, 1.0], [6300.0, 2.0], [6400.0, 1.0], [6500.0, 1.0], [6600.0, 1.0], [6900.0, 2.0], [6800.0, 1.0], [6700.0, 1.0], [7300.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 90.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 90.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 90.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 26.599999999999998, "minX": 1.6734639E12, "maxY": 26.599999999999998, "series": [{"data": [[1.6734639E12, 26.599999999999998]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6734639E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2587.0, "minX": 1.0, "maxY": 13272.0, "series": [{"data": [[32.0, 3384.333333333333], [33.0, 3585.1666666666665], [2.0, 10709.0], [35.0, 3749.6], [34.0, 3328.9333333333334], [3.0, 9692.0], [4.0, 11699.0], [5.0, 6980.0], [6.0, 5734.0], [7.0, 5836.0], [8.0, 6608.0], [9.0, 5648.0], [10.0, 6761.0], [11.0, 6848.0], [12.0, 4996.0], [13.0, 3786.0], [14.0, 4099.0], [15.0, 6385.0], [16.0, 4687.0], [1.0, 13272.0], [17.0, 4100.0], [18.0, 8889.0], [19.0, 3265.0], [20.0, 3997.0], [21.0, 5452.0], [22.0, 4022.0], [23.0, 6935.0], [24.0, 2587.0], [25.0, 4450.0], [26.0, 6302.0], [27.0, 3439.0], [28.0, 3796.0], [29.0, 2943.8999999999996], [30.0, 3289.1111111111113], [31.0, 3691.2]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[26.599999999999998, 4227.566666666667]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 35.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 183.0, "minX": 1.6734639E12, "maxY": 96748.5, "series": [{"data": [[1.6734639E12, 96748.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6734639E12, 183.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6734639E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4227.566666666667, "minX": 1.6734639E12, "maxY": 4227.566666666667, "series": [{"data": [[1.6734639E12, 4227.566666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6734639E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1803.5333333333335, "minX": 1.6734639E12, "maxY": 1803.5333333333335, "series": [{"data": [[1.6734639E12, 1803.5333333333335]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6734639E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 699.9888888888888, "minX": 1.6734639E12, "maxY": 699.9888888888888, "series": [{"data": [[1.6734639E12, 699.9888888888888]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6734639E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2201.0, "minX": 1.6734639E12, "maxY": 13272.0, "series": [{"data": [[1.6734639E12, 13272.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6734639E12, 6839.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6734639E12, 13272.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6734639E12, 9250.350000000002]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6734639E12, 2201.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6734639E12, 3322.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6734639E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2996.0, "minX": 1.0, "maxY": 13272.0, "series": [{"data": [[8.0, 3119.0], [2.0, 6357.0], [1.0, 13272.0], [9.0, 2996.0], [10.0, 3083.0], [5.0, 5742.0], [3.0, 4099.0], [6.0, 3356.0], [7.0, 4450.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1254.5, "minX": 1.0, "maxY": 3481.0, "series": [{"data": [[8.0, 1254.5], [2.0, 3319.0], [1.0, 3481.0], [9.0, 1264.0], [10.0, 1282.5], [5.0, 2395.5], [3.0, 1595.0], [6.0, 1387.0], [7.0, 1655.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.6734639E12, "maxY": 1.5, "series": [{"data": [[1.6734639E12, 1.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6734639E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.6734639E12, "maxY": 1.5, "series": [{"data": [[1.6734639E12, 1.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6734639E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.6734639E12, "maxY": 1.5, "series": [{"data": [[1.6734639E12, 1.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6734639E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.6734639E12, "maxY": 1.5, "series": [{"data": [[1.6734639E12, 1.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6734639E12, "title": "Total Transactions Per Second"}},
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

