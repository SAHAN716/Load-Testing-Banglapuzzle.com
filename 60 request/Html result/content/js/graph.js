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
        data: {"result": {"minY": 2182.0, "minX": 0.0, "maxY": 22975.0, "series": [{"data": [[0.0, 2182.0], [0.1, 2182.0], [0.2, 2182.0], [0.3, 2182.0], [0.4, 2182.0], [0.5, 2182.0], [0.6, 2182.0], [0.7, 2182.0], [0.8, 2182.0], [0.9, 2182.0], [1.0, 2182.0], [1.1, 2182.0], [1.2, 2182.0], [1.3, 2182.0], [1.4, 2182.0], [1.5, 2182.0], [1.6, 2182.0], [1.7, 2203.0], [1.8, 2203.0], [1.9, 2203.0], [2.0, 2203.0], [2.1, 2203.0], [2.2, 2203.0], [2.3, 2203.0], [2.4, 2203.0], [2.5, 2203.0], [2.6, 2203.0], [2.7, 2203.0], [2.8, 2203.0], [2.9, 2203.0], [3.0, 2203.0], [3.1, 2203.0], [3.2, 2203.0], [3.3, 2203.0], [3.4, 2309.0], [3.5, 2309.0], [3.6, 2309.0], [3.7, 2309.0], [3.8, 2309.0], [3.9, 2309.0], [4.0, 2309.0], [4.1, 2309.0], [4.2, 2309.0], [4.3, 2309.0], [4.4, 2309.0], [4.5, 2309.0], [4.6, 2309.0], [4.7, 2309.0], [4.8, 2309.0], [4.9, 2309.0], [5.0, 2353.0], [5.1, 2353.0], [5.2, 2353.0], [5.3, 2353.0], [5.4, 2353.0], [5.5, 2353.0], [5.6, 2353.0], [5.7, 2353.0], [5.8, 2353.0], [5.9, 2353.0], [6.0, 2353.0], [6.1, 2353.0], [6.2, 2353.0], [6.3, 2353.0], [6.4, 2353.0], [6.5, 2353.0], [6.6, 2353.0], [6.7, 2362.0], [6.8, 2362.0], [6.9, 2362.0], [7.0, 2362.0], [7.1, 2362.0], [7.2, 2362.0], [7.3, 2362.0], [7.4, 2362.0], [7.5, 2362.0], [7.6, 2362.0], [7.7, 2362.0], [7.8, 2362.0], [7.9, 2362.0], [8.0, 2362.0], [8.1, 2362.0], [8.2, 2362.0], [8.3, 2362.0], [8.4, 2400.0], [8.5, 2400.0], [8.6, 2400.0], [8.7, 2400.0], [8.8, 2400.0], [8.9, 2400.0], [9.0, 2400.0], [9.1, 2400.0], [9.2, 2400.0], [9.3, 2400.0], [9.4, 2400.0], [9.5, 2400.0], [9.6, 2400.0], [9.7, 2400.0], [9.8, 2400.0], [9.9, 2400.0], [10.0, 2441.0], [10.1, 2441.0], [10.2, 2441.0], [10.3, 2441.0], [10.4, 2441.0], [10.5, 2441.0], [10.6, 2441.0], [10.7, 2441.0], [10.8, 2441.0], [10.9, 2441.0], [11.0, 2441.0], [11.1, 2441.0], [11.2, 2441.0], [11.3, 2441.0], [11.4, 2441.0], [11.5, 2441.0], [11.6, 2441.0], [11.7, 2444.0], [11.8, 2444.0], [11.9, 2444.0], [12.0, 2444.0], [12.1, 2444.0], [12.2, 2444.0], [12.3, 2444.0], [12.4, 2444.0], [12.5, 2444.0], [12.6, 2444.0], [12.7, 2444.0], [12.8, 2444.0], [12.9, 2444.0], [13.0, 2444.0], [13.1, 2444.0], [13.2, 2444.0], [13.3, 2444.0], [13.4, 2470.0], [13.5, 2470.0], [13.6, 2470.0], [13.7, 2470.0], [13.8, 2470.0], [13.9, 2470.0], [14.0, 2470.0], [14.1, 2470.0], [14.2, 2470.0], [14.3, 2470.0], [14.4, 2470.0], [14.5, 2470.0], [14.6, 2470.0], [14.7, 2470.0], [14.8, 2470.0], [14.9, 2470.0], [15.0, 2470.0], [15.1, 2470.0], [15.2, 2470.0], [15.3, 2470.0], [15.4, 2470.0], [15.5, 2470.0], [15.6, 2470.0], [15.7, 2470.0], [15.8, 2470.0], [15.9, 2470.0], [16.0, 2470.0], [16.1, 2470.0], [16.2, 2470.0], [16.3, 2470.0], [16.4, 2470.0], [16.5, 2470.0], [16.6, 2470.0], [16.7, 2489.0], [16.8, 2489.0], [16.9, 2489.0], [17.0, 2489.0], [17.1, 2489.0], [17.2, 2489.0], [17.3, 2489.0], [17.4, 2489.0], [17.5, 2489.0], [17.6, 2489.0], [17.7, 2489.0], [17.8, 2489.0], [17.9, 2489.0], [18.0, 2489.0], [18.1, 2489.0], [18.2, 2489.0], [18.3, 2489.0], [18.4, 2555.0], [18.5, 2555.0], [18.6, 2555.0], [18.7, 2555.0], [18.8, 2555.0], [18.9, 2555.0], [19.0, 2555.0], [19.1, 2555.0], [19.2, 2555.0], [19.3, 2555.0], [19.4, 2555.0], [19.5, 2555.0], [19.6, 2555.0], [19.7, 2555.0], [19.8, 2555.0], [19.9, 2555.0], [20.0, 2588.0], [20.1, 2588.0], [20.2, 2588.0], [20.3, 2588.0], [20.4, 2588.0], [20.5, 2588.0], [20.6, 2588.0], [20.7, 2588.0], [20.8, 2588.0], [20.9, 2588.0], [21.0, 2588.0], [21.1, 2588.0], [21.2, 2588.0], [21.3, 2588.0], [21.4, 2588.0], [21.5, 2588.0], [21.6, 2588.0], [21.7, 2592.0], [21.8, 2592.0], [21.9, 2592.0], [22.0, 2592.0], [22.1, 2592.0], [22.2, 2592.0], [22.3, 2592.0], [22.4, 2592.0], [22.5, 2592.0], [22.6, 2592.0], [22.7, 2592.0], [22.8, 2592.0], [22.9, 2592.0], [23.0, 2592.0], [23.1, 2592.0], [23.2, 2592.0], [23.3, 2592.0], [23.4, 2647.0], [23.5, 2647.0], [23.6, 2647.0], [23.7, 2647.0], [23.8, 2647.0], [23.9, 2647.0], [24.0, 2647.0], [24.1, 2647.0], [24.2, 2647.0], [24.3, 2647.0], [24.4, 2647.0], [24.5, 2647.0], [24.6, 2647.0], [24.7, 2647.0], [24.8, 2647.0], [24.9, 2647.0], [25.0, 2647.0], [25.1, 2723.0], [25.2, 2723.0], [25.3, 2723.0], [25.4, 2723.0], [25.5, 2723.0], [25.6, 2723.0], [25.7, 2723.0], [25.8, 2723.0], [25.9, 2723.0], [26.0, 2723.0], [26.1, 2723.0], [26.2, 2723.0], [26.3, 2723.0], [26.4, 2723.0], [26.5, 2723.0], [26.6, 2723.0], [26.7, 2816.0], [26.8, 2816.0], [26.9, 2816.0], [27.0, 2816.0], [27.1, 2816.0], [27.2, 2816.0], [27.3, 2816.0], [27.4, 2816.0], [27.5, 2816.0], [27.6, 2816.0], [27.7, 2816.0], [27.8, 2816.0], [27.9, 2816.0], [28.0, 2816.0], [28.1, 2816.0], [28.2, 2816.0], [28.3, 2816.0], [28.4, 2826.0], [28.5, 2826.0], [28.6, 2826.0], [28.7, 2826.0], [28.8, 2826.0], [28.9, 2826.0], [29.0, 2826.0], [29.1, 2826.0], [29.2, 2826.0], [29.3, 2826.0], [29.4, 2826.0], [29.5, 2826.0], [29.6, 2826.0], [29.7, 2826.0], [29.8, 2826.0], [29.9, 2826.0], [30.0, 2826.0], [30.1, 2893.0], [30.2, 2893.0], [30.3, 2893.0], [30.4, 2893.0], [30.5, 2893.0], [30.6, 2893.0], [30.7, 2893.0], [30.8, 2893.0], [30.9, 2893.0], [31.0, 2893.0], [31.1, 2893.0], [31.2, 2893.0], [31.3, 2893.0], [31.4, 2893.0], [31.5, 2893.0], [31.6, 2893.0], [31.7, 2893.0], [31.8, 2893.0], [31.9, 2893.0], [32.0, 2893.0], [32.1, 2893.0], [32.2, 2893.0], [32.3, 2893.0], [32.4, 2893.0], [32.5, 2893.0], [32.6, 2893.0], [32.7, 2893.0], [32.8, 2893.0], [32.9, 2893.0], [33.0, 2893.0], [33.1, 2893.0], [33.2, 2893.0], [33.3, 2893.0], [33.4, 2908.0], [33.5, 2908.0], [33.6, 2908.0], [33.7, 2908.0], [33.8, 2908.0], [33.9, 2908.0], [34.0, 2908.0], [34.1, 2908.0], [34.2, 2908.0], [34.3, 2908.0], [34.4, 2908.0], [34.5, 2908.0], [34.6, 2908.0], [34.7, 2908.0], [34.8, 2908.0], [34.9, 2908.0], [35.0, 2908.0], [35.1, 2919.0], [35.2, 2919.0], [35.3, 2919.0], [35.4, 2919.0], [35.5, 2919.0], [35.6, 2919.0], [35.7, 2919.0], [35.8, 2919.0], [35.9, 2919.0], [36.0, 2919.0], [36.1, 2919.0], [36.2, 2919.0], [36.3, 2919.0], [36.4, 2919.0], [36.5, 2919.0], [36.6, 2919.0], [36.7, 2968.0], [36.8, 2968.0], [36.9, 2968.0], [37.0, 2968.0], [37.1, 2968.0], [37.2, 2968.0], [37.3, 2968.0], [37.4, 2968.0], [37.5, 2968.0], [37.6, 2968.0], [37.7, 2968.0], [37.8, 2968.0], [37.9, 2968.0], [38.0, 2968.0], [38.1, 2968.0], [38.2, 2968.0], [38.3, 2968.0], [38.4, 2993.0], [38.5, 2993.0], [38.6, 2993.0], [38.7, 2993.0], [38.8, 2993.0], [38.9, 2993.0], [39.0, 2993.0], [39.1, 2993.0], [39.2, 2993.0], [39.3, 2993.0], [39.4, 2993.0], [39.5, 2993.0], [39.6, 2993.0], [39.7, 2993.0], [39.8, 2993.0], [39.9, 2993.0], [40.0, 3008.0], [40.1, 3008.0], [40.2, 3008.0], [40.3, 3008.0], [40.4, 3008.0], [40.5, 3008.0], [40.6, 3008.0], [40.7, 3008.0], [40.8, 3008.0], [40.9, 3008.0], [41.0, 3008.0], [41.1, 3008.0], [41.2, 3008.0], [41.3, 3008.0], [41.4, 3008.0], [41.5, 3008.0], [41.6, 3008.0], [41.7, 3021.0], [41.8, 3021.0], [41.9, 3021.0], [42.0, 3021.0], [42.1, 3021.0], [42.2, 3021.0], [42.3, 3021.0], [42.4, 3021.0], [42.5, 3021.0], [42.6, 3021.0], [42.7, 3021.0], [42.8, 3021.0], [42.9, 3021.0], [43.0, 3021.0], [43.1, 3021.0], [43.2, 3021.0], [43.3, 3021.0], [43.4, 3032.0], [43.5, 3032.0], [43.6, 3032.0], [43.7, 3032.0], [43.8, 3032.0], [43.9, 3032.0], [44.0, 3032.0], [44.1, 3032.0], [44.2, 3032.0], [44.3, 3032.0], [44.4, 3032.0], [44.5, 3032.0], [44.6, 3032.0], [44.7, 3032.0], [44.8, 3032.0], [44.9, 3032.0], [45.0, 3044.0], [45.1, 3044.0], [45.2, 3044.0], [45.3, 3044.0], [45.4, 3044.0], [45.5, 3044.0], [45.6, 3044.0], [45.7, 3044.0], [45.8, 3044.0], [45.9, 3044.0], [46.0, 3044.0], [46.1, 3044.0], [46.2, 3044.0], [46.3, 3044.0], [46.4, 3044.0], [46.5, 3044.0], [46.6, 3044.0], [46.7, 3046.0], [46.8, 3046.0], [46.9, 3046.0], [47.0, 3046.0], [47.1, 3046.0], [47.2, 3046.0], [47.3, 3046.0], [47.4, 3046.0], [47.5, 3046.0], [47.6, 3046.0], [47.7, 3046.0], [47.8, 3046.0], [47.9, 3046.0], [48.0, 3046.0], [48.1, 3046.0], [48.2, 3046.0], [48.3, 3046.0], [48.4, 3061.0], [48.5, 3061.0], [48.6, 3061.0], [48.7, 3061.0], [48.8, 3061.0], [48.9, 3061.0], [49.0, 3061.0], [49.1, 3061.0], [49.2, 3061.0], [49.3, 3061.0], [49.4, 3061.0], [49.5, 3061.0], [49.6, 3061.0], [49.7, 3061.0], [49.8, 3061.0], [49.9, 3061.0], [50.0, 3117.0], [50.1, 3117.0], [50.2, 3117.0], [50.3, 3117.0], [50.4, 3117.0], [50.5, 3117.0], [50.6, 3117.0], [50.7, 3117.0], [50.8, 3117.0], [50.9, 3117.0], [51.0, 3117.0], [51.1, 3117.0], [51.2, 3117.0], [51.3, 3117.0], [51.4, 3117.0], [51.5, 3117.0], [51.6, 3117.0], [51.7, 3123.0], [51.8, 3123.0], [51.9, 3123.0], [52.0, 3123.0], [52.1, 3123.0], [52.2, 3123.0], [52.3, 3123.0], [52.4, 3123.0], [52.5, 3123.0], [52.6, 3123.0], [52.7, 3123.0], [52.8, 3123.0], [52.9, 3123.0], [53.0, 3123.0], [53.1, 3123.0], [53.2, 3123.0], [53.3, 3123.0], [53.4, 3188.0], [53.5, 3188.0], [53.6, 3188.0], [53.7, 3188.0], [53.8, 3188.0], [53.9, 3188.0], [54.0, 3188.0], [54.1, 3188.0], [54.2, 3188.0], [54.3, 3188.0], [54.4, 3188.0], [54.5, 3188.0], [54.6, 3188.0], [54.7, 3188.0], [54.8, 3188.0], [54.9, 3188.0], [55.0, 3224.0], [55.1, 3224.0], [55.2, 3224.0], [55.3, 3224.0], [55.4, 3224.0], [55.5, 3224.0], [55.6, 3224.0], [55.7, 3224.0], [55.8, 3224.0], [55.9, 3224.0], [56.0, 3224.0], [56.1, 3224.0], [56.2, 3224.0], [56.3, 3224.0], [56.4, 3224.0], [56.5, 3224.0], [56.6, 3224.0], [56.7, 3245.0], [56.8, 3245.0], [56.9, 3245.0], [57.0, 3245.0], [57.1, 3245.0], [57.2, 3245.0], [57.3, 3245.0], [57.4, 3245.0], [57.5, 3245.0], [57.6, 3245.0], [57.7, 3245.0], [57.8, 3245.0], [57.9, 3245.0], [58.0, 3245.0], [58.1, 3245.0], [58.2, 3245.0], [58.3, 3245.0], [58.4, 3315.0], [58.5, 3315.0], [58.6, 3315.0], [58.7, 3315.0], [58.8, 3315.0], [58.9, 3315.0], [59.0, 3315.0], [59.1, 3315.0], [59.2, 3315.0], [59.3, 3315.0], [59.4, 3315.0], [59.5, 3315.0], [59.6, 3315.0], [59.7, 3315.0], [59.8, 3315.0], [59.9, 3315.0], [60.0, 3335.0], [60.1, 3335.0], [60.2, 3335.0], [60.3, 3335.0], [60.4, 3335.0], [60.5, 3335.0], [60.6, 3335.0], [60.7, 3335.0], [60.8, 3335.0], [60.9, 3335.0], [61.0, 3335.0], [61.1, 3335.0], [61.2, 3335.0], [61.3, 3335.0], [61.4, 3335.0], [61.5, 3335.0], [61.6, 3335.0], [61.7, 3340.0], [61.8, 3340.0], [61.9, 3340.0], [62.0, 3340.0], [62.1, 3340.0], [62.2, 3340.0], [62.3, 3340.0], [62.4, 3340.0], [62.5, 3340.0], [62.6, 3340.0], [62.7, 3340.0], [62.8, 3340.0], [62.9, 3340.0], [63.0, 3340.0], [63.1, 3340.0], [63.2, 3340.0], [63.3, 3340.0], [63.4, 3631.0], [63.5, 3631.0], [63.6, 3631.0], [63.7, 3631.0], [63.8, 3631.0], [63.9, 3631.0], [64.0, 3631.0], [64.1, 3631.0], [64.2, 3631.0], [64.3, 3631.0], [64.4, 3631.0], [64.5, 3631.0], [64.6, 3631.0], [64.7, 3631.0], [64.8, 3631.0], [64.9, 3631.0], [65.0, 3648.0], [65.1, 3648.0], [65.2, 3648.0], [65.3, 3648.0], [65.4, 3648.0], [65.5, 3648.0], [65.6, 3648.0], [65.7, 3648.0], [65.8, 3648.0], [65.9, 3648.0], [66.0, 3648.0], [66.1, 3648.0], [66.2, 3648.0], [66.3, 3648.0], [66.4, 3648.0], [66.5, 3648.0], [66.6, 3648.0], [66.7, 3652.0], [66.8, 3652.0], [66.9, 3652.0], [67.0, 3652.0], [67.1, 3652.0], [67.2, 3652.0], [67.3, 3652.0], [67.4, 3652.0], [67.5, 3652.0], [67.6, 3652.0], [67.7, 3652.0], [67.8, 3652.0], [67.9, 3652.0], [68.0, 3652.0], [68.1, 3652.0], [68.2, 3652.0], [68.3, 3652.0], [68.4, 3738.0], [68.5, 3738.0], [68.6, 3738.0], [68.7, 3738.0], [68.8, 3738.0], [68.9, 3738.0], [69.0, 3738.0], [69.1, 3738.0], [69.2, 3738.0], [69.3, 3738.0], [69.4, 3738.0], [69.5, 3738.0], [69.6, 3738.0], [69.7, 3738.0], [69.8, 3738.0], [69.9, 3738.0], [70.0, 3785.0], [70.1, 3785.0], [70.2, 3785.0], [70.3, 3785.0], [70.4, 3785.0], [70.5, 3785.0], [70.6, 3785.0], [70.7, 3785.0], [70.8, 3785.0], [70.9, 3785.0], [71.0, 3785.0], [71.1, 3785.0], [71.2, 3785.0], [71.3, 3785.0], [71.4, 3785.0], [71.5, 3785.0], [71.6, 3785.0], [71.7, 3954.0], [71.8, 3954.0], [71.9, 3954.0], [72.0, 3954.0], [72.1, 3954.0], [72.2, 3954.0], [72.3, 3954.0], [72.4, 3954.0], [72.5, 3954.0], [72.6, 3954.0], [72.7, 3954.0], [72.8, 3954.0], [72.9, 3954.0], [73.0, 3954.0], [73.1, 3954.0], [73.2, 3954.0], [73.3, 3954.0], [73.4, 3979.0], [73.5, 3979.0], [73.6, 3979.0], [73.7, 3979.0], [73.8, 3979.0], [73.9, 3979.0], [74.0, 3979.0], [74.1, 3979.0], [74.2, 3979.0], [74.3, 3979.0], [74.4, 3979.0], [74.5, 3979.0], [74.6, 3979.0], [74.7, 3979.0], [74.8, 3979.0], [74.9, 3979.0], [75.0, 4030.0], [75.1, 4030.0], [75.2, 4030.0], [75.3, 4030.0], [75.4, 4030.0], [75.5, 4030.0], [75.6, 4030.0], [75.7, 4030.0], [75.8, 4030.0], [75.9, 4030.0], [76.0, 4030.0], [76.1, 4030.0], [76.2, 4030.0], [76.3, 4030.0], [76.4, 4030.0], [76.5, 4030.0], [76.6, 4030.0], [76.7, 4067.0], [76.8, 4067.0], [76.9, 4067.0], [77.0, 4067.0], [77.1, 4067.0], [77.2, 4067.0], [77.3, 4067.0], [77.4, 4067.0], [77.5, 4067.0], [77.6, 4067.0], [77.7, 4067.0], [77.8, 4067.0], [77.9, 4067.0], [78.0, 4067.0], [78.1, 4067.0], [78.2, 4067.0], [78.3, 4067.0], [78.4, 4118.0], [78.5, 4118.0], [78.6, 4118.0], [78.7, 4118.0], [78.8, 4118.0], [78.9, 4118.0], [79.0, 4118.0], [79.1, 4118.0], [79.2, 4118.0], [79.3, 4118.0], [79.4, 4118.0], [79.5, 4118.0], [79.6, 4118.0], [79.7, 4118.0], [79.8, 4118.0], [79.9, 4118.0], [80.0, 4118.0], [80.1, 4299.0], [80.2, 4299.0], [80.3, 4299.0], [80.4, 4299.0], [80.5, 4299.0], [80.6, 4299.0], [80.7, 4299.0], [80.8, 4299.0], [80.9, 4299.0], [81.0, 4299.0], [81.1, 4299.0], [81.2, 4299.0], [81.3, 4299.0], [81.4, 4299.0], [81.5, 4299.0], [81.6, 4299.0], [81.7, 4372.0], [81.8, 4372.0], [81.9, 4372.0], [82.0, 4372.0], [82.1, 4372.0], [82.2, 4372.0], [82.3, 4372.0], [82.4, 4372.0], [82.5, 4372.0], [82.6, 4372.0], [82.7, 4372.0], [82.8, 4372.0], [82.9, 4372.0], [83.0, 4372.0], [83.1, 4372.0], [83.2, 4372.0], [83.3, 4372.0], [83.4, 4519.0], [83.5, 4519.0], [83.6, 4519.0], [83.7, 4519.0], [83.8, 4519.0], [83.9, 4519.0], [84.0, 4519.0], [84.1, 4519.0], [84.2, 4519.0], [84.3, 4519.0], [84.4, 4519.0], [84.5, 4519.0], [84.6, 4519.0], [84.7, 4519.0], [84.8, 4519.0], [84.9, 4519.0], [85.0, 4519.0], [85.1, 4710.0], [85.2, 4710.0], [85.3, 4710.0], [85.4, 4710.0], [85.5, 4710.0], [85.6, 4710.0], [85.7, 4710.0], [85.8, 4710.0], [85.9, 4710.0], [86.0, 4710.0], [86.1, 4710.0], [86.2, 4710.0], [86.3, 4710.0], [86.4, 4710.0], [86.5, 4710.0], [86.6, 4710.0], [86.7, 4732.0], [86.8, 4732.0], [86.9, 4732.0], [87.0, 4732.0], [87.1, 4732.0], [87.2, 4732.0], [87.3, 4732.0], [87.4, 4732.0], [87.5, 4732.0], [87.6, 4732.0], [87.7, 4732.0], [87.8, 4732.0], [87.9, 4732.0], [88.0, 4732.0], [88.1, 4732.0], [88.2, 4732.0], [88.3, 4732.0], [88.4, 4791.0], [88.5, 4791.0], [88.6, 4791.0], [88.7, 4791.0], [88.8, 4791.0], [88.9, 4791.0], [89.0, 4791.0], [89.1, 4791.0], [89.2, 4791.0], [89.3, 4791.0], [89.4, 4791.0], [89.5, 4791.0], [89.6, 4791.0], [89.7, 4791.0], [89.8, 4791.0], [89.9, 4791.0], [90.0, 4791.0], [90.1, 4881.0], [90.2, 4881.0], [90.3, 4881.0], [90.4, 4881.0], [90.5, 4881.0], [90.6, 4881.0], [90.7, 4881.0], [90.8, 4881.0], [90.9, 4881.0], [91.0, 4881.0], [91.1, 4881.0], [91.2, 4881.0], [91.3, 4881.0], [91.4, 4881.0], [91.5, 4881.0], [91.6, 4881.0], [91.7, 4910.0], [91.8, 4910.0], [91.9, 4910.0], [92.0, 4910.0], [92.1, 4910.0], [92.2, 4910.0], [92.3, 4910.0], [92.4, 4910.0], [92.5, 4910.0], [92.6, 4910.0], [92.7, 4910.0], [92.8, 4910.0], [92.9, 4910.0], [93.0, 4910.0], [93.1, 4910.0], [93.2, 4910.0], [93.3, 4910.0], [93.4, 9810.0], [93.5, 9810.0], [93.6, 9810.0], [93.7, 9810.0], [93.8, 9810.0], [93.9, 9810.0], [94.0, 9810.0], [94.1, 9810.0], [94.2, 9810.0], [94.3, 9810.0], [94.4, 9810.0], [94.5, 9810.0], [94.6, 9810.0], [94.7, 9810.0], [94.8, 9810.0], [94.9, 9810.0], [95.0, 9810.0], [95.1, 11333.0], [95.2, 11333.0], [95.3, 11333.0], [95.4, 11333.0], [95.5, 11333.0], [95.6, 11333.0], [95.7, 11333.0], [95.8, 11333.0], [95.9, 11333.0], [96.0, 11333.0], [96.1, 11333.0], [96.2, 11333.0], [96.3, 11333.0], [96.4, 11333.0], [96.5, 11333.0], [96.6, 11333.0], [96.7, 12274.0], [96.8, 12274.0], [96.9, 12274.0], [97.0, 12274.0], [97.1, 12274.0], [97.2, 12274.0], [97.3, 12274.0], [97.4, 12274.0], [97.5, 12274.0], [97.6, 12274.0], [97.7, 12274.0], [97.8, 12274.0], [97.9, 12274.0], [98.0, 12274.0], [98.1, 12274.0], [98.2, 12274.0], [98.3, 12274.0], [98.4, 22975.0], [98.5, 22975.0], [98.6, 22975.0], [98.7, 22975.0], [98.8, 22975.0], [98.9, 22975.0], [99.0, 22975.0], [99.1, 22975.0], [99.2, 22975.0], [99.3, 22975.0], [99.4, 22975.0], [99.5, 22975.0], [99.6, 22975.0], [99.7, 22975.0], [99.8, 22975.0], [99.9, 22975.0], [100.0, 22975.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2100.0, "maxY": 6.0, "series": [{"data": [[9800.0, 1.0], [11300.0, 1.0], [12200.0, 1.0], [22900.0, 1.0], [2100.0, 1.0], [2300.0, 3.0], [2200.0, 1.0], [2400.0, 6.0], [2500.0, 3.0], [2600.0, 1.0], [2800.0, 4.0], [2700.0, 1.0], [2900.0, 4.0], [3000.0, 6.0], [3100.0, 3.0], [3300.0, 3.0], [3200.0, 2.0], [3600.0, 3.0], [3700.0, 2.0], [3900.0, 2.0], [4000.0, 2.0], [4200.0, 1.0], [4300.0, 1.0], [4100.0, 1.0], [4500.0, 1.0], [4700.0, 3.0], [4800.0, 1.0], [4900.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 22900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 59.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 59.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 18.133333333333333, "minX": 1.67346282E12, "maxY": 18.133333333333333, "series": [{"data": [[1.67346282E12, 18.133333333333333]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67346282E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2444.0, "minX": 1.0, "maxY": 22975.0, "series": [{"data": [[2.0, 11333.0], [3.0, 12274.0], [4.0, 3785.0], [5.0, 2993.0], [6.0, 3245.0], [7.0, 4067.0], [8.0, 3224.0], [9.0, 3046.0], [10.0, 3032.0], [11.0, 4710.0], [12.0, 3117.0], [13.0, 3652.0], [14.0, 2444.0], [15.0, 4118.0], [16.0, 3008.0], [1.0, 22975.0], [17.0, 4372.0], [18.0, 3311.0], [19.0, 3323.0], [20.0, 2970.5], [21.0, 2673.833333333333], [22.0, 3252.3846153846152], [23.0, 2800.3333333333335], [24.0, 3803.4285714285716], [25.0, 9810.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[18.133333333333333, 3979.183333333333]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 25.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 119.96666666666667, "minX": 1.67346282E12, "maxY": 63446.38333333333, "series": [{"data": [[1.67346282E12, 63446.38333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.67346282E12, 119.96666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67346282E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3979.183333333333, "minX": 1.67346282E12, "maxY": 3979.183333333333, "series": [{"data": [[1.67346282E12, 3979.183333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67346282E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1716.9666666666665, "minX": 1.67346282E12, "maxY": 1716.9666666666665, "series": [{"data": [[1.67346282E12, 1716.9666666666665]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67346282E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 653.0, "minX": 1.67346282E12, "maxY": 653.0, "series": [{"data": [[1.67346282E12, 653.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67346282E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2182.0, "minX": 1.67346282E12, "maxY": 12274.0, "series": [{"data": [[1.67346282E12, 12274.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.67346282E12, 4791.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.67346282E12, 12274.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.67346282E12, 9810.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.67346282E12, 2182.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.67346282E12, 3061.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67346282E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2938.0, "minX": 1.0, "maxY": 22975.0, "series": [{"data": [[4.0, 3135.0], [1.0, 11803.5], [9.0, 3695.0], [5.0, 2938.0], [3.0, 3021.0], [6.0, 2990.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 22975.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1252.5, "minX": 1.0, "maxY": 7673.0, "series": [{"data": [[4.0, 1252.5], [1.0, 6066.5], [9.0, 1261.0], [5.0, 1255.0], [3.0, 1271.0], [6.0, 1370.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 7673.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.67346282E12, "maxY": 1.0, "series": [{"data": [[1.67346282E12, 1.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67346282E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.67346282E12, "maxY": 0.9833333333333333, "series": [{"data": [[1.67346282E12, 0.9833333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.67346282E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.ConnectionClosedException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67346282E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.67346282E12, "maxY": 0.9833333333333333, "series": [{"data": [[1.67346282E12, 0.9833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.67346282E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67346282E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.67346282E12, "maxY": 0.9833333333333333, "series": [{"data": [[1.67346282E12, 0.9833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.67346282E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67346282E12, "title": "Total Transactions Per Second"}},
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

