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
        data: {"result": {"minY": 1934.0, "minX": 0.0, "maxY": 24684.0, "series": [{"data": [[0.0, 1934.0], [0.1, 1934.0], [0.2, 1934.0], [0.3, 1934.0], [0.4, 1934.0], [0.5, 1964.0], [0.6, 1964.0], [0.7, 1964.0], [0.8, 1964.0], [0.9, 1964.0], [1.0, 2127.0], [1.1, 2127.0], [1.2, 2127.0], [1.3, 2127.0], [1.4, 2127.0], [1.5, 2201.0], [1.6, 2201.0], [1.7, 2201.0], [1.8, 2201.0], [1.9, 2201.0], [2.0, 2207.0], [2.1, 2207.0], [2.2, 2207.0], [2.3, 2207.0], [2.4, 2240.0], [2.5, 2240.0], [2.6, 2240.0], [2.7, 2240.0], [2.8, 2240.0], [2.9, 2263.0], [3.0, 2263.0], [3.1, 2263.0], [3.2, 2263.0], [3.3, 2263.0], [3.4, 2268.0], [3.5, 2268.0], [3.6, 2268.0], [3.7, 2268.0], [3.8, 2268.0], [3.9, 2333.0], [4.0, 2333.0], [4.1, 2333.0], [4.2, 2333.0], [4.3, 2358.0], [4.4, 2358.0], [4.5, 2358.0], [4.6, 2358.0], [4.7, 2358.0], [4.8, 2372.0], [4.9, 2372.0], [5.0, 2372.0], [5.1, 2372.0], [5.2, 2372.0], [5.3, 2382.0], [5.4, 2382.0], [5.5, 2382.0], [5.6, 2382.0], [5.7, 2382.0], [5.8, 2398.0], [5.9, 2398.0], [6.0, 2398.0], [6.1, 2398.0], [6.2, 2415.0], [6.3, 2415.0], [6.4, 2415.0], [6.5, 2415.0], [6.6, 2415.0], [6.7, 2426.0], [6.8, 2426.0], [6.9, 2426.0], [7.0, 2426.0], [7.1, 2426.0], [7.2, 2429.0], [7.3, 2429.0], [7.4, 2429.0], [7.5, 2429.0], [7.6, 2429.0], [7.7, 2442.0], [7.8, 2442.0], [7.9, 2442.0], [8.0, 2442.0], [8.1, 2445.0], [8.2, 2445.0], [8.3, 2445.0], [8.4, 2445.0], [8.5, 2445.0], [8.6, 2449.0], [8.7, 2449.0], [8.8, 2449.0], [8.9, 2449.0], [9.0, 2449.0], [9.1, 2460.0], [9.2, 2460.0], [9.3, 2460.0], [9.4, 2460.0], [9.5, 2460.0], [9.6, 2466.0], [9.7, 2466.0], [9.8, 2466.0], [9.9, 2466.0], [10.0, 2474.0], [10.1, 2474.0], [10.2, 2474.0], [10.3, 2474.0], [10.4, 2474.0], [10.5, 2479.0], [10.6, 2479.0], [10.7, 2479.0], [10.8, 2479.0], [10.9, 2479.0], [11.0, 2535.0], [11.1, 2535.0], [11.2, 2535.0], [11.3, 2535.0], [11.4, 2535.0], [11.5, 2536.0], [11.6, 2536.0], [11.7, 2536.0], [11.8, 2536.0], [11.9, 2536.0], [12.0, 2538.0], [12.1, 2538.0], [12.2, 2538.0], [12.3, 2538.0], [12.4, 2569.0], [12.5, 2569.0], [12.6, 2569.0], [12.7, 2569.0], [12.8, 2569.0], [12.9, 2572.0], [13.0, 2572.0], [13.1, 2572.0], [13.2, 2572.0], [13.3, 2572.0], [13.4, 2587.0], [13.5, 2587.0], [13.6, 2587.0], [13.7, 2587.0], [13.8, 2587.0], [13.9, 2593.0], [14.0, 2593.0], [14.1, 2593.0], [14.2, 2593.0], [14.3, 2599.0], [14.4, 2599.0], [14.5, 2599.0], [14.6, 2599.0], [14.7, 2599.0], [14.8, 2637.0], [14.9, 2637.0], [15.0, 2637.0], [15.1, 2637.0], [15.2, 2637.0], [15.3, 2649.0], [15.4, 2649.0], [15.5, 2649.0], [15.6, 2649.0], [15.7, 2649.0], [15.8, 2664.0], [15.9, 2664.0], [16.0, 2664.0], [16.1, 2664.0], [16.2, 2672.0], [16.3, 2672.0], [16.4, 2672.0], [16.5, 2672.0], [16.6, 2672.0], [16.7, 2672.0], [16.8, 2672.0], [16.9, 2672.0], [17.0, 2672.0], [17.1, 2672.0], [17.2, 2677.0], [17.3, 2677.0], [17.4, 2677.0], [17.5, 2677.0], [17.6, 2677.0], [17.7, 2695.0], [17.8, 2695.0], [17.9, 2695.0], [18.0, 2695.0], [18.1, 2716.0], [18.2, 2716.0], [18.3, 2716.0], [18.4, 2716.0], [18.5, 2716.0], [18.6, 2724.0], [18.7, 2724.0], [18.8, 2724.0], [18.9, 2724.0], [19.0, 2724.0], [19.1, 2733.0], [19.2, 2733.0], [19.3, 2733.0], [19.4, 2733.0], [19.5, 2733.0], [19.6, 2747.0], [19.7, 2747.0], [19.8, 2747.0], [19.9, 2747.0], [20.0, 2842.0], [20.1, 2842.0], [20.2, 2842.0], [20.3, 2842.0], [20.4, 2842.0], [20.5, 2882.0], [20.6, 2882.0], [20.7, 2882.0], [20.8, 2882.0], [20.9, 2882.0], [21.0, 2891.0], [21.1, 2891.0], [21.2, 2891.0], [21.3, 2891.0], [21.4, 2891.0], [21.5, 2896.0], [21.6, 2896.0], [21.7, 2896.0], [21.8, 2896.0], [21.9, 2896.0], [22.0, 2911.0], [22.1, 2911.0], [22.2, 2911.0], [22.3, 2911.0], [22.4, 2916.0], [22.5, 2916.0], [22.6, 2916.0], [22.7, 2916.0], [22.8, 2916.0], [22.9, 2937.0], [23.0, 2937.0], [23.1, 2937.0], [23.2, 2937.0], [23.3, 2937.0], [23.4, 2948.0], [23.5, 2948.0], [23.6, 2948.0], [23.7, 2948.0], [23.8, 2948.0], [23.9, 2964.0], [24.0, 2964.0], [24.1, 2964.0], [24.2, 2964.0], [24.3, 2974.0], [24.4, 2974.0], [24.5, 2974.0], [24.6, 2974.0], [24.7, 2974.0], [24.8, 3017.0], [24.9, 3017.0], [25.0, 3017.0], [25.1, 3017.0], [25.2, 3017.0], [25.3, 3050.0], [25.4, 3050.0], [25.5, 3050.0], [25.6, 3050.0], [25.7, 3050.0], [25.8, 3086.0], [25.9, 3086.0], [26.0, 3086.0], [26.1, 3086.0], [26.2, 3099.0], [26.3, 3099.0], [26.4, 3099.0], [26.5, 3099.0], [26.6, 3099.0], [26.7, 3103.0], [26.8, 3103.0], [26.9, 3103.0], [27.0, 3103.0], [27.1, 3103.0], [27.2, 3144.0], [27.3, 3144.0], [27.4, 3144.0], [27.5, 3144.0], [27.6, 3144.0], [27.7, 3175.0], [27.8, 3175.0], [27.9, 3175.0], [28.0, 3175.0], [28.1, 3185.0], [28.2, 3185.0], [28.3, 3185.0], [28.4, 3185.0], [28.5, 3185.0], [28.6, 3200.0], [28.7, 3200.0], [28.8, 3200.0], [28.9, 3200.0], [29.0, 3200.0], [29.1, 3227.0], [29.2, 3227.0], [29.3, 3227.0], [29.4, 3227.0], [29.5, 3227.0], [29.6, 3266.0], [29.7, 3266.0], [29.8, 3266.0], [29.9, 3266.0], [30.0, 3267.0], [30.1, 3267.0], [30.2, 3267.0], [30.3, 3267.0], [30.4, 3267.0], [30.5, 3296.0], [30.6, 3296.0], [30.7, 3296.0], [30.8, 3296.0], [30.9, 3296.0], [31.0, 3313.0], [31.1, 3313.0], [31.2, 3313.0], [31.3, 3313.0], [31.4, 3313.0], [31.5, 3317.0], [31.6, 3317.0], [31.7, 3317.0], [31.8, 3317.0], [31.9, 3317.0], [32.0, 3319.0], [32.1, 3319.0], [32.2, 3319.0], [32.3, 3319.0], [32.4, 3347.0], [32.5, 3347.0], [32.6, 3347.0], [32.7, 3347.0], [32.8, 3347.0], [32.9, 3411.0], [33.0, 3411.0], [33.1, 3411.0], [33.2, 3411.0], [33.3, 3411.0], [33.4, 3415.0], [33.5, 3415.0], [33.6, 3415.0], [33.7, 3415.0], [33.8, 3415.0], [33.9, 3418.0], [34.0, 3418.0], [34.1, 3418.0], [34.2, 3418.0], [34.3, 3425.0], [34.4, 3425.0], [34.5, 3425.0], [34.6, 3425.0], [34.7, 3425.0], [34.8, 3533.0], [34.9, 3533.0], [35.0, 3533.0], [35.1, 3533.0], [35.2, 3533.0], [35.3, 3583.0], [35.4, 3583.0], [35.5, 3583.0], [35.6, 3583.0], [35.7, 3583.0], [35.8, 3591.0], [35.9, 3591.0], [36.0, 3591.0], [36.1, 3591.0], [36.2, 3602.0], [36.3, 3602.0], [36.4, 3602.0], [36.5, 3602.0], [36.6, 3602.0], [36.7, 3631.0], [36.8, 3631.0], [36.9, 3631.0], [37.0, 3631.0], [37.1, 3631.0], [37.2, 3647.0], [37.3, 3647.0], [37.4, 3647.0], [37.5, 3647.0], [37.6, 3647.0], [37.7, 3663.0], [37.8, 3663.0], [37.9, 3663.0], [38.0, 3663.0], [38.1, 3666.0], [38.2, 3666.0], [38.3, 3666.0], [38.4, 3666.0], [38.5, 3666.0], [38.6, 3678.0], [38.7, 3678.0], [38.8, 3678.0], [38.9, 3678.0], [39.0, 3678.0], [39.1, 3691.0], [39.2, 3691.0], [39.3, 3691.0], [39.4, 3691.0], [39.5, 3691.0], [39.6, 3722.0], [39.7, 3722.0], [39.8, 3722.0], [39.9, 3722.0], [40.0, 3746.0], [40.1, 3746.0], [40.2, 3746.0], [40.3, 3746.0], [40.4, 3746.0], [40.5, 3804.0], [40.6, 3804.0], [40.7, 3804.0], [40.8, 3804.0], [40.9, 3804.0], [41.0, 3804.0], [41.1, 3804.0], [41.2, 3804.0], [41.3, 3804.0], [41.4, 3804.0], [41.5, 3859.0], [41.6, 3859.0], [41.7, 3859.0], [41.8, 3859.0], [41.9, 3859.0], [42.0, 3918.0], [42.1, 3918.0], [42.2, 3918.0], [42.3, 3918.0], [42.4, 3951.0], [42.5, 3951.0], [42.6, 3951.0], [42.7, 3951.0], [42.8, 3951.0], [42.9, 4005.0], [43.0, 4005.0], [43.1, 4005.0], [43.2, 4005.0], [43.3, 4005.0], [43.4, 4024.0], [43.5, 4024.0], [43.6, 4024.0], [43.7, 4024.0], [43.8, 4024.0], [43.9, 4054.0], [44.0, 4054.0], [44.1, 4054.0], [44.2, 4054.0], [44.3, 4056.0], [44.4, 4056.0], [44.5, 4056.0], [44.6, 4056.0], [44.7, 4056.0], [44.8, 4060.0], [44.9, 4060.0], [45.0, 4060.0], [45.1, 4060.0], [45.2, 4060.0], [45.3, 4105.0], [45.4, 4105.0], [45.5, 4105.0], [45.6, 4105.0], [45.7, 4105.0], [45.8, 4123.0], [45.9, 4123.0], [46.0, 4123.0], [46.1, 4123.0], [46.2, 4125.0], [46.3, 4125.0], [46.4, 4125.0], [46.5, 4125.0], [46.6, 4125.0], [46.7, 4165.0], [46.8, 4165.0], [46.9, 4165.0], [47.0, 4165.0], [47.1, 4165.0], [47.2, 4179.0], [47.3, 4179.0], [47.4, 4179.0], [47.5, 4179.0], [47.6, 4179.0], [47.7, 4189.0], [47.8, 4189.0], [47.9, 4189.0], [48.0, 4189.0], [48.1, 4192.0], [48.2, 4192.0], [48.3, 4192.0], [48.4, 4192.0], [48.5, 4192.0], [48.6, 4195.0], [48.7, 4195.0], [48.8, 4195.0], [48.9, 4195.0], [49.0, 4195.0], [49.1, 4207.0], [49.2, 4207.0], [49.3, 4207.0], [49.4, 4207.0], [49.5, 4207.0], [49.6, 4207.0], [49.7, 4207.0], [49.8, 4207.0], [49.9, 4207.0], [50.0, 4267.0], [50.1, 4267.0], [50.2, 4267.0], [50.3, 4267.0], [50.4, 4267.0], [50.5, 4305.0], [50.6, 4305.0], [50.7, 4305.0], [50.8, 4305.0], [50.9, 4305.0], [51.0, 4311.0], [51.1, 4311.0], [51.2, 4311.0], [51.3, 4311.0], [51.4, 4311.0], [51.5, 4325.0], [51.6, 4325.0], [51.7, 4325.0], [51.8, 4325.0], [51.9, 4325.0], [52.0, 4356.0], [52.1, 4356.0], [52.2, 4356.0], [52.3, 4356.0], [52.4, 4364.0], [52.5, 4364.0], [52.6, 4364.0], [52.7, 4364.0], [52.8, 4364.0], [52.9, 4392.0], [53.0, 4392.0], [53.1, 4392.0], [53.2, 4392.0], [53.3, 4392.0], [53.4, 4413.0], [53.5, 4413.0], [53.6, 4413.0], [53.7, 4413.0], [53.8, 4413.0], [53.9, 4461.0], [54.0, 4461.0], [54.1, 4461.0], [54.2, 4461.0], [54.3, 4467.0], [54.4, 4467.0], [54.5, 4467.0], [54.6, 4467.0], [54.7, 4467.0], [54.8, 4480.0], [54.9, 4480.0], [55.0, 4480.0], [55.1, 4480.0], [55.2, 4480.0], [55.3, 4481.0], [55.4, 4481.0], [55.5, 4481.0], [55.6, 4481.0], [55.7, 4481.0], [55.8, 4579.0], [55.9, 4579.0], [56.0, 4579.0], [56.1, 4579.0], [56.2, 4580.0], [56.3, 4580.0], [56.4, 4580.0], [56.5, 4580.0], [56.6, 4580.0], [56.7, 4599.0], [56.8, 4599.0], [56.9, 4599.0], [57.0, 4599.0], [57.1, 4599.0], [57.2, 4603.0], [57.3, 4603.0], [57.4, 4603.0], [57.5, 4603.0], [57.6, 4603.0], [57.7, 4655.0], [57.8, 4655.0], [57.9, 4655.0], [58.0, 4655.0], [58.1, 4673.0], [58.2, 4673.0], [58.3, 4673.0], [58.4, 4673.0], [58.5, 4673.0], [58.6, 4714.0], [58.7, 4714.0], [58.8, 4714.0], [58.9, 4714.0], [59.0, 4714.0], [59.1, 4751.0], [59.2, 4751.0], [59.3, 4751.0], [59.4, 4751.0], [59.5, 4751.0], [59.6, 4770.0], [59.7, 4770.0], [59.8, 4770.0], [59.9, 4770.0], [60.0, 4779.0], [60.1, 4779.0], [60.2, 4779.0], [60.3, 4779.0], [60.4, 4779.0], [60.5, 4857.0], [60.6, 4857.0], [60.7, 4857.0], [60.8, 4857.0], [60.9, 4857.0], [61.0, 4876.0], [61.1, 4876.0], [61.2, 4876.0], [61.3, 4876.0], [61.4, 4876.0], [61.5, 4881.0], [61.6, 4881.0], [61.7, 4881.0], [61.8, 4881.0], [61.9, 4881.0], [62.0, 4890.0], [62.1, 4890.0], [62.2, 4890.0], [62.3, 4890.0], [62.4, 4957.0], [62.5, 4957.0], [62.6, 4957.0], [62.7, 4957.0], [62.8, 4957.0], [62.9, 4961.0], [63.0, 4961.0], [63.1, 4961.0], [63.2, 4961.0], [63.3, 4961.0], [63.4, 5007.0], [63.5, 5007.0], [63.6, 5007.0], [63.7, 5007.0], [63.8, 5007.0], [63.9, 5013.0], [64.0, 5013.0], [64.1, 5013.0], [64.2, 5013.0], [64.3, 5016.0], [64.4, 5016.0], [64.5, 5016.0], [64.6, 5016.0], [64.7, 5016.0], [64.8, 5133.0], [64.9, 5133.0], [65.0, 5133.0], [65.1, 5133.0], [65.2, 5133.0], [65.3, 5139.0], [65.4, 5139.0], [65.5, 5139.0], [65.6, 5139.0], [65.7, 5139.0], [65.8, 5169.0], [65.9, 5169.0], [66.0, 5169.0], [66.1, 5169.0], [66.2, 5211.0], [66.3, 5211.0], [66.4, 5211.0], [66.5, 5211.0], [66.6, 5211.0], [66.7, 5255.0], [66.8, 5255.0], [66.9, 5255.0], [67.0, 5255.0], [67.1, 5255.0], [67.2, 5277.0], [67.3, 5277.0], [67.4, 5277.0], [67.5, 5277.0], [67.6, 5277.0], [67.7, 5313.0], [67.8, 5313.0], [67.9, 5313.0], [68.0, 5313.0], [68.1, 5323.0], [68.2, 5323.0], [68.3, 5323.0], [68.4, 5323.0], [68.5, 5323.0], [68.6, 5332.0], [68.7, 5332.0], [68.8, 5332.0], [68.9, 5332.0], [69.0, 5332.0], [69.1, 5346.0], [69.2, 5346.0], [69.3, 5346.0], [69.4, 5346.0], [69.5, 5346.0], [69.6, 5370.0], [69.7, 5370.0], [69.8, 5370.0], [69.9, 5370.0], [70.0, 5409.0], [70.1, 5409.0], [70.2, 5409.0], [70.3, 5409.0], [70.4, 5409.0], [70.5, 5429.0], [70.6, 5429.0], [70.7, 5429.0], [70.8, 5429.0], [70.9, 5429.0], [71.0, 5446.0], [71.1, 5446.0], [71.2, 5446.0], [71.3, 5446.0], [71.4, 5446.0], [71.5, 5465.0], [71.6, 5465.0], [71.7, 5465.0], [71.8, 5465.0], [71.9, 5465.0], [72.0, 5543.0], [72.1, 5543.0], [72.2, 5543.0], [72.3, 5543.0], [72.4, 5546.0], [72.5, 5546.0], [72.6, 5546.0], [72.7, 5546.0], [72.8, 5546.0], [72.9, 5639.0], [73.0, 5639.0], [73.1, 5639.0], [73.2, 5639.0], [73.3, 5639.0], [73.4, 5679.0], [73.5, 5679.0], [73.6, 5679.0], [73.7, 5679.0], [73.8, 5679.0], [73.9, 5697.0], [74.0, 5697.0], [74.1, 5697.0], [74.2, 5697.0], [74.3, 5796.0], [74.4, 5796.0], [74.5, 5796.0], [74.6, 5796.0], [74.7, 5796.0], [74.8, 5812.0], [74.9, 5812.0], [75.0, 5812.0], [75.1, 5812.0], [75.2, 5812.0], [75.3, 5823.0], [75.4, 5823.0], [75.5, 5823.0], [75.6, 5823.0], [75.7, 5823.0], [75.8, 5874.0], [75.9, 5874.0], [76.0, 5874.0], [76.1, 5874.0], [76.2, 5881.0], [76.3, 5881.0], [76.4, 5881.0], [76.5, 5881.0], [76.6, 5881.0], [76.7, 6018.0], [76.8, 6018.0], [76.9, 6018.0], [77.0, 6018.0], [77.1, 6018.0], [77.2, 6034.0], [77.3, 6034.0], [77.4, 6034.0], [77.5, 6034.0], [77.6, 6034.0], [77.7, 6181.0], [77.8, 6181.0], [77.9, 6181.0], [78.0, 6181.0], [78.1, 6230.0], [78.2, 6230.0], [78.3, 6230.0], [78.4, 6230.0], [78.5, 6230.0], [78.6, 6259.0], [78.7, 6259.0], [78.8, 6259.0], [78.9, 6259.0], [79.0, 6259.0], [79.1, 6299.0], [79.2, 6299.0], [79.3, 6299.0], [79.4, 6299.0], [79.5, 6299.0], [79.6, 6370.0], [79.7, 6370.0], [79.8, 6370.0], [79.9, 6370.0], [80.0, 6370.0], [80.1, 6409.0], [80.2, 6409.0], [80.3, 6409.0], [80.4, 6409.0], [80.5, 6478.0], [80.6, 6478.0], [80.7, 6478.0], [80.8, 6478.0], [80.9, 6478.0], [81.0, 6489.0], [81.1, 6489.0], [81.2, 6489.0], [81.3, 6489.0], [81.4, 6489.0], [81.5, 6608.0], [81.6, 6608.0], [81.7, 6608.0], [81.8, 6608.0], [81.9, 6608.0], [82.0, 6873.0], [82.1, 6873.0], [82.2, 6873.0], [82.3, 6873.0], [82.4, 7040.0], [82.5, 7040.0], [82.6, 7040.0], [82.7, 7040.0], [82.8, 7040.0], [82.9, 7052.0], [83.0, 7052.0], [83.1, 7052.0], [83.2, 7052.0], [83.3, 7052.0], [83.4, 7066.0], [83.5, 7066.0], [83.6, 7066.0], [83.7, 7066.0], [83.8, 7066.0], [83.9, 7093.0], [84.0, 7093.0], [84.1, 7093.0], [84.2, 7093.0], [84.3, 7120.0], [84.4, 7120.0], [84.5, 7120.0], [84.6, 7120.0], [84.7, 7120.0], [84.8, 7197.0], [84.9, 7197.0], [85.0, 7197.0], [85.1, 7197.0], [85.2, 7197.0], [85.3, 7292.0], [85.4, 7292.0], [85.5, 7292.0], [85.6, 7292.0], [85.7, 7292.0], [85.8, 7456.0], [85.9, 7456.0], [86.0, 7456.0], [86.1, 7456.0], [86.2, 7471.0], [86.3, 7471.0], [86.4, 7471.0], [86.5, 7471.0], [86.6, 7471.0], [86.7, 7591.0], [86.8, 7591.0], [86.9, 7591.0], [87.0, 7591.0], [87.1, 7591.0], [87.2, 7597.0], [87.3, 7597.0], [87.4, 7597.0], [87.5, 7597.0], [87.6, 7597.0], [87.7, 7668.0], [87.8, 7668.0], [87.9, 7668.0], [88.0, 7668.0], [88.1, 7737.0], [88.2, 7737.0], [88.3, 7737.0], [88.4, 7737.0], [88.5, 7737.0], [88.6, 7763.0], [88.7, 7763.0], [88.8, 7763.0], [88.9, 7763.0], [89.0, 7763.0], [89.1, 7947.0], [89.2, 7947.0], [89.3, 7947.0], [89.4, 7947.0], [89.5, 7947.0], [89.6, 7954.0], [89.7, 7954.0], [89.8, 7954.0], [89.9, 7954.0], [90.0, 7954.0], [90.1, 7958.0], [90.2, 7958.0], [90.3, 7958.0], [90.4, 7958.0], [90.5, 8066.0], [90.6, 8066.0], [90.7, 8066.0], [90.8, 8066.0], [90.9, 8066.0], [91.0, 8292.0], [91.1, 8292.0], [91.2, 8292.0], [91.3, 8292.0], [91.4, 8292.0], [91.5, 8307.0], [91.6, 8307.0], [91.7, 8307.0], [91.8, 8307.0], [91.9, 8307.0], [92.0, 8763.0], [92.1, 8763.0], [92.2, 8763.0], [92.3, 8763.0], [92.4, 8857.0], [92.5, 8857.0], [92.6, 8857.0], [92.7, 8857.0], [92.8, 8857.0], [92.9, 9080.0], [93.0, 9080.0], [93.1, 9080.0], [93.2, 9080.0], [93.3, 9080.0], [93.4, 9485.0], [93.5, 9485.0], [93.6, 9485.0], [93.7, 9485.0], [93.8, 9485.0], [93.9, 9512.0], [94.0, 9512.0], [94.1, 9512.0], [94.2, 9512.0], [94.3, 10106.0], [94.4, 10106.0], [94.5, 10106.0], [94.6, 10106.0], [94.7, 10106.0], [94.8, 10314.0], [94.9, 10314.0], [95.0, 10314.0], [95.1, 10314.0], [95.2, 10314.0], [95.3, 10394.0], [95.4, 10394.0], [95.5, 10394.0], [95.6, 10394.0], [95.7, 10394.0], [95.8, 10538.0], [95.9, 10538.0], [96.0, 10538.0], [96.1, 10538.0], [96.2, 10731.0], [96.3, 10731.0], [96.4, 10731.0], [96.5, 10731.0], [96.6, 10731.0], [96.7, 10849.0], [96.8, 10849.0], [96.9, 10849.0], [97.0, 10849.0], [97.1, 10849.0], [97.2, 16013.0], [97.3, 16013.0], [97.4, 16013.0], [97.5, 16013.0], [97.6, 16013.0], [97.7, 17048.0], [97.8, 17048.0], [97.9, 17048.0], [98.0, 17048.0], [98.1, 17795.0], [98.2, 17795.0], [98.3, 17795.0], [98.4, 17795.0], [98.5, 17795.0], [98.6, 17976.0], [98.7, 17976.0], [98.8, 17976.0], [98.9, 17976.0], [99.0, 17976.0], [99.1, 21048.0], [99.2, 21048.0], [99.3, 21048.0], [99.4, 21048.0], [99.5, 21048.0], [99.6, 24684.0], [99.7, 24684.0], [99.8, 24684.0], [99.9, 24684.0], [100.0, 24684.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1900.0, "maxY": 10.0, "series": [{"data": [[1900.0, 2.0], [2100.0, 1.0], [2300.0, 5.0], [2200.0, 5.0], [2400.0, 10.0], [2500.0, 8.0], [2600.0, 7.0], [2800.0, 4.0], [2700.0, 4.0], [2900.0, 6.0], [3000.0, 4.0], [3100.0, 4.0], [3300.0, 4.0], [3200.0, 5.0], [3400.0, 4.0], [3500.0, 3.0], [3600.0, 7.0], [3700.0, 2.0], [3800.0, 3.0], [3900.0, 2.0], [4000.0, 5.0], [4100.0, 8.0], [4200.0, 3.0], [4300.0, 6.0], [4600.0, 3.0], [4500.0, 3.0], [4400.0, 5.0], [4800.0, 4.0], [4700.0, 4.0], [5000.0, 3.0], [5100.0, 3.0], [4900.0, 2.0], [5300.0, 5.0], [5200.0, 3.0], [5500.0, 2.0], [5400.0, 4.0], [5600.0, 3.0], [5800.0, 4.0], [5700.0, 1.0], [6000.0, 2.0], [6100.0, 1.0], [6200.0, 3.0], [6300.0, 1.0], [6400.0, 3.0], [6600.0, 1.0], [6800.0, 1.0], [7100.0, 2.0], [7000.0, 4.0], [7200.0, 1.0], [7400.0, 2.0], [7500.0, 2.0], [7600.0, 1.0], [7900.0, 3.0], [7700.0, 2.0], [8000.0, 1.0], [8700.0, 1.0], [8300.0, 1.0], [8200.0, 1.0], [8800.0, 1.0], [9000.0, 1.0], [9500.0, 1.0], [9400.0, 1.0], [10100.0, 1.0], [10300.0, 2.0], [10500.0, 1.0], [10700.0, 1.0], [10800.0, 1.0], [16000.0, 1.0], [17000.0, 1.0], [17700.0, 1.0], [17900.0, 1.0], [21000.0, 1.0], [24600.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 24600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 208.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 208.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.5, "minX": 1.6735149E12, "maxY": 69.38834951456315, "series": [{"data": [[1.67351496E12, 2.5], [1.6735149E12, 69.38834951456315]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67351496E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3125.4, "minX": 1.0, "maxY": 24684.0, "series": [{"data": [[2.0, 21048.0], [3.0, 17048.0], [4.0, 17976.0], [5.0, 10731.0], [6.0, 17795.0], [7.0, 16013.0], [8.0, 9485.0], [9.0, 8292.0], [10.0, 7947.0], [11.0, 7197.0], [12.0, 7597.0], [13.0, 7456.0], [14.0, 7668.0], [15.0, 5874.0], [16.0, 7471.0], [17.0, 5169.0], [18.0, 5277.0], [19.0, 5812.0], [20.0, 7954.0], [21.0, 6181.0], [22.0, 5313.0], [23.0, 4603.0], [24.0, 5013.0], [25.0, 6034.0], [26.0, 5796.0], [27.0, 4599.0], [28.0, 9080.0], [29.0, 5639.0], [30.0, 7591.0], [31.0, 4881.0], [33.0, 5429.0], [32.0, 3804.0], [35.0, 5697.0], [34.0, 4060.0], [37.0, 10849.0], [36.0, 3746.0], [39.0, 5446.0], [38.0, 7040.0], [41.0, 4125.0], [40.0, 4751.0], [43.0, 10394.0], [42.0, 7052.0], [45.0, 4056.0], [44.0, 4770.0], [47.0, 3200.0], [46.0, 4165.0], [49.0, 4207.0], [48.0, 3319.0], [51.0, 6230.0], [50.0, 8307.0], [53.0, 4192.0], [52.0, 4857.0], [55.0, 3749.5], [54.0, 3804.0], [56.0, 3527.5], [57.0, 4453.0], [59.0, 4704.333333333334], [58.0, 3274.0], [60.0, 3625.0], [61.0, 4241.0], [62.0, 3979.0], [63.0, 3725.5], [64.0, 3904.25], [66.0, 3260.6], [67.0, 3257.0], [65.0, 4123.0], [68.0, 3828.0], [70.0, 4805.5], [69.0, 3242.75], [71.0, 4136.0], [72.0, 3218.4], [73.0, 5827.0], [74.0, 4039.0], [75.0, 4356.0], [76.0, 7113.5], [77.0, 3857.5], [79.0, 4267.0], [78.0, 5133.0], [81.0, 4125.0], [83.0, 3288.5], [82.0, 8066.0], [80.0, 4305.0], [84.0, 4501.333333333333], [85.0, 4612.0], [87.0, 5047.0], [86.0, 5016.0], [88.0, 4277.0], [89.0, 3471.0], [91.0, 4381.5], [90.0, 5459.333333333334], [92.0, 3862.25], [93.0, 4287.5], [95.0, 5700.0], [94.0, 6478.0], [97.0, 5018.6], [99.0, 4275.0], [98.0, 4869.999999999999], [96.0, 3210.5], [101.0, 3286.5], [100.0, 5345.5], [103.0, 3142.6], [102.0, 3125.4], [104.0, 4689.4], [105.0, 3663.0], [1.0, 24684.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[68.11428571428576, 5036.480952380953]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 105.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4.066666666666666, "minX": 1.6735149E12, "maxY": 221446.56666666668, "series": [{"data": [[1.67351496E12, 2218.4666666666667], [1.6735149E12, 221446.56666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.67351496E12, 4.066666666666666], [1.6735149E12, 418.8666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67351496E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4742.257281553399, "minX": 1.6735149E12, "maxY": 20189.0, "series": [{"data": [[1.67351496E12, 20189.0], [1.6735149E12, 4742.257281553399]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67351496E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2220.6747572815543, "minX": 1.6735149E12, "maxY": 3131.25, "series": [{"data": [[1.67351496E12, 3131.25], [1.6735149E12, 2220.6747572815543]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67351496E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 678.5776699029127, "minX": 1.6735149E12, "maxY": 6464.500000000001, "series": [{"data": [[1.67351496E12, 6464.500000000001], [1.6735149E12, 678.5776699029127]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67351496E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1934.0, "minX": 1.6735149E12, "maxY": 17976.0, "series": [{"data": [[1.67351496E12, 17976.0], [1.6735149E12, 17795.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.67351496E12, 17976.0], [1.6735149E12, 7744.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.67351496E12, 17976.0], [1.6735149E12, 15651.520000000035]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.67351496E12, 17976.0], [1.6735149E12, 9343.24999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.67351496E12, 17048.0], [1.6735149E12, 1934.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.67351496E12, 17512.0], [1.6735149E12, 4201.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67351496E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3123.5, "minX": 1.0, "maxY": 22866.0, "series": [{"data": [[16.0, 3281.5], [1.0, 17048.0], [2.0, 10108.0], [17.0, 3663.0], [18.0, 5542.5], [10.0, 3722.5], [22.0, 4866.5], [12.0, 3616.5], [3.0, 7597.0], [13.0, 3533.0], [15.0, 3123.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 22866.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1046.5, "minX": 1.0, "maxY": 5063.0, "series": [{"data": [[16.0, 1360.0], [1.0, 4551.0], [2.0, 3650.5], [17.0, 1272.0], [18.0, 2919.0], [10.0, 2055.5], [22.0, 2727.0], [12.0, 1427.0], [3.0, 5063.0], [13.0, 1637.0], [15.0, 1324.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 1046.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.5, "minX": 1.6735149E12, "maxY": 3.5, "series": [{"data": [[1.6735149E12, 3.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6735149E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6735149E12, "maxY": 3.433333333333333, "series": [{"data": [[1.67351496E12, 0.03333333333333333], [1.6735149E12, 3.433333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.67351496E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.67351496E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.ConnectionClosedException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67351496E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6735149E12, "maxY": 3.433333333333333, "series": [{"data": [[1.67351496E12, 0.03333333333333333], [1.6735149E12, 3.433333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.67351496E12, 0.03333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67351496E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6735149E12, "maxY": 3.433333333333333, "series": [{"data": [[1.67351496E12, 0.03333333333333333], [1.6735149E12, 3.433333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.67351496E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67351496E12, "title": "Total Transactions Per Second"}},
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

