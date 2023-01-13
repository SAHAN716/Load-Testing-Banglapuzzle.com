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
        data: {"result": {"minY": 1897.0, "minX": 0.0, "maxY": 18970.0, "series": [{"data": [[0.0, 1897.0], [0.1, 1897.0], [0.2, 1897.0], [0.3, 1897.0], [0.4, 1897.0], [0.5, 1897.0], [0.6, 2049.0], [0.7, 2049.0], [0.8, 2049.0], [0.9, 2049.0], [1.0, 2049.0], [1.1, 2049.0], [1.2, 2178.0], [1.3, 2178.0], [1.4, 2178.0], [1.5, 2178.0], [1.6, 2178.0], [1.7, 2202.0], [1.8, 2202.0], [1.9, 2202.0], [2.0, 2202.0], [2.1, 2202.0], [2.2, 2202.0], [2.3, 2206.0], [2.4, 2206.0], [2.5, 2206.0], [2.6, 2206.0], [2.7, 2206.0], [2.8, 2237.0], [2.9, 2237.0], [3.0, 2237.0], [3.1, 2237.0], [3.2, 2237.0], [3.3, 2237.0], [3.4, 2273.0], [3.5, 2273.0], [3.6, 2273.0], [3.7, 2273.0], [3.8, 2273.0], [3.9, 2297.0], [4.0, 2297.0], [4.1, 2297.0], [4.2, 2297.0], [4.3, 2297.0], [4.4, 2297.0], [4.5, 2342.0], [4.6, 2342.0], [4.7, 2342.0], [4.8, 2342.0], [4.9, 2342.0], [5.0, 2342.0], [5.1, 2342.0], [5.2, 2342.0], [5.3, 2342.0], [5.4, 2342.0], [5.5, 2342.0], [5.6, 2349.0], [5.7, 2349.0], [5.8, 2349.0], [5.9, 2349.0], [6.0, 2349.0], [6.1, 2349.0], [6.2, 2402.0], [6.3, 2402.0], [6.4, 2402.0], [6.5, 2402.0], [6.6, 2402.0], [6.7, 2409.0], [6.8, 2409.0], [6.9, 2409.0], [7.0, 2409.0], [7.1, 2409.0], [7.2, 2409.0], [7.3, 2409.0], [7.4, 2409.0], [7.5, 2409.0], [7.6, 2409.0], [7.7, 2409.0], [7.8, 2411.0], [7.9, 2411.0], [8.0, 2411.0], [8.1, 2411.0], [8.2, 2411.0], [8.3, 2411.0], [8.4, 2412.0], [8.5, 2412.0], [8.6, 2412.0], [8.7, 2412.0], [8.8, 2412.0], [8.9, 2414.0], [9.0, 2414.0], [9.1, 2414.0], [9.2, 2414.0], [9.3, 2414.0], [9.4, 2414.0], [9.5, 2415.0], [9.6, 2415.0], [9.7, 2415.0], [9.8, 2415.0], [9.9, 2415.0], [10.0, 2416.0], [10.1, 2416.0], [10.2, 2416.0], [10.3, 2416.0], [10.4, 2416.0], [10.5, 2416.0], [10.6, 2483.0], [10.7, 2483.0], [10.8, 2483.0], [10.9, 2483.0], [11.0, 2483.0], [11.1, 2483.0], [11.2, 2487.0], [11.3, 2487.0], [11.4, 2487.0], [11.5, 2487.0], [11.6, 2487.0], [11.7, 2508.0], [11.8, 2508.0], [11.9, 2508.0], [12.0, 2508.0], [12.1, 2508.0], [12.2, 2508.0], [12.3, 2573.0], [12.4, 2573.0], [12.5, 2573.0], [12.6, 2573.0], [12.7, 2573.0], [12.8, 2608.0], [12.9, 2608.0], [13.0, 2608.0], [13.1, 2608.0], [13.2, 2608.0], [13.3, 2608.0], [13.4, 2620.0], [13.5, 2620.0], [13.6, 2620.0], [13.7, 2620.0], [13.8, 2620.0], [13.9, 2666.0], [14.0, 2666.0], [14.1, 2666.0], [14.2, 2666.0], [14.3, 2666.0], [14.4, 2666.0], [14.5, 2695.0], [14.6, 2695.0], [14.7, 2695.0], [14.8, 2695.0], [14.9, 2695.0], [15.0, 2712.0], [15.1, 2712.0], [15.2, 2712.0], [15.3, 2712.0], [15.4, 2712.0], [15.5, 2712.0], [15.6, 2799.0], [15.7, 2799.0], [15.8, 2799.0], [15.9, 2799.0], [16.0, 2799.0], [16.1, 2799.0], [16.2, 2804.0], [16.3, 2804.0], [16.4, 2804.0], [16.5, 2804.0], [16.6, 2804.0], [16.7, 2812.0], [16.8, 2812.0], [16.9, 2812.0], [17.0, 2812.0], [17.1, 2812.0], [17.2, 2812.0], [17.3, 2822.0], [17.4, 2822.0], [17.5, 2822.0], [17.6, 2822.0], [17.7, 2822.0], [17.8, 2871.0], [17.9, 2871.0], [18.0, 2871.0], [18.1, 2871.0], [18.2, 2871.0], [18.3, 2871.0], [18.4, 2888.0], [18.5, 2888.0], [18.6, 2888.0], [18.7, 2888.0], [18.8, 2888.0], [18.9, 2891.0], [19.0, 2891.0], [19.1, 2891.0], [19.2, 2891.0], [19.3, 2891.0], [19.4, 2891.0], [19.5, 2893.0], [19.6, 2893.0], [19.7, 2893.0], [19.8, 2893.0], [19.9, 2893.0], [20.0, 2893.0], [20.1, 2896.0], [20.2, 2896.0], [20.3, 2896.0], [20.4, 2896.0], [20.5, 2896.0], [20.6, 2909.0], [20.7, 2909.0], [20.8, 2909.0], [20.9, 2909.0], [21.0, 2909.0], [21.1, 2909.0], [21.2, 2919.0], [21.3, 2919.0], [21.4, 2919.0], [21.5, 2919.0], [21.6, 2919.0], [21.7, 2933.0], [21.8, 2933.0], [21.9, 2933.0], [22.0, 2933.0], [22.1, 2933.0], [22.2, 2933.0], [22.3, 2936.0], [22.4, 2936.0], [22.5, 2936.0], [22.6, 2936.0], [22.7, 2936.0], [22.8, 2950.0], [22.9, 2950.0], [23.0, 2950.0], [23.1, 2950.0], [23.2, 2950.0], [23.3, 2950.0], [23.4, 2971.0], [23.5, 2971.0], [23.6, 2971.0], [23.7, 2971.0], [23.8, 2971.0], [23.9, 2980.0], [24.0, 2980.0], [24.1, 2980.0], [24.2, 2980.0], [24.3, 2980.0], [24.4, 2980.0], [24.5, 2983.0], [24.6, 2983.0], [24.7, 2983.0], [24.8, 2983.0], [24.9, 2983.0], [25.0, 2983.0], [25.1, 2994.0], [25.2, 2994.0], [25.3, 2994.0], [25.4, 2994.0], [25.5, 2994.0], [25.6, 2998.0], [25.7, 2998.0], [25.8, 2998.0], [25.9, 2998.0], [26.0, 2998.0], [26.1, 2998.0], [26.2, 3037.0], [26.3, 3037.0], [26.4, 3037.0], [26.5, 3037.0], [26.6, 3037.0], [26.7, 3059.0], [26.8, 3059.0], [26.9, 3059.0], [27.0, 3059.0], [27.1, 3059.0], [27.2, 3059.0], [27.3, 3097.0], [27.4, 3097.0], [27.5, 3097.0], [27.6, 3097.0], [27.7, 3097.0], [27.8, 3098.0], [27.9, 3098.0], [28.0, 3098.0], [28.1, 3098.0], [28.2, 3098.0], [28.3, 3098.0], [28.4, 3100.0], [28.5, 3100.0], [28.6, 3100.0], [28.7, 3100.0], [28.8, 3100.0], [28.9, 3111.0], [29.0, 3111.0], [29.1, 3111.0], [29.2, 3111.0], [29.3, 3111.0], [29.4, 3111.0], [29.5, 3115.0], [29.6, 3115.0], [29.7, 3115.0], [29.8, 3115.0], [29.9, 3115.0], [30.0, 3115.0], [30.1, 3122.0], [30.2, 3122.0], [30.3, 3122.0], [30.4, 3122.0], [30.5, 3122.0], [30.6, 3128.0], [30.7, 3128.0], [30.8, 3128.0], [30.9, 3128.0], [31.0, 3128.0], [31.1, 3128.0], [31.2, 3148.0], [31.3, 3148.0], [31.4, 3148.0], [31.5, 3148.0], [31.6, 3148.0], [31.7, 3154.0], [31.8, 3154.0], [31.9, 3154.0], [32.0, 3154.0], [32.1, 3154.0], [32.2, 3154.0], [32.3, 3165.0], [32.4, 3165.0], [32.5, 3165.0], [32.6, 3165.0], [32.7, 3165.0], [32.8, 3208.0], [32.9, 3208.0], [33.0, 3208.0], [33.1, 3208.0], [33.2, 3208.0], [33.3, 3208.0], [33.4, 3209.0], [33.5, 3209.0], [33.6, 3209.0], [33.7, 3209.0], [33.8, 3209.0], [33.9, 3245.0], [34.0, 3245.0], [34.1, 3245.0], [34.2, 3245.0], [34.3, 3245.0], [34.4, 3245.0], [34.5, 3279.0], [34.6, 3279.0], [34.7, 3279.0], [34.8, 3279.0], [34.9, 3279.0], [35.0, 3279.0], [35.1, 3338.0], [35.2, 3338.0], [35.3, 3338.0], [35.4, 3338.0], [35.5, 3338.0], [35.6, 3393.0], [35.7, 3393.0], [35.8, 3393.0], [35.9, 3393.0], [36.0, 3393.0], [36.1, 3393.0], [36.2, 3423.0], [36.3, 3423.0], [36.4, 3423.0], [36.5, 3423.0], [36.6, 3423.0], [36.7, 3428.0], [36.8, 3428.0], [36.9, 3428.0], [37.0, 3428.0], [37.1, 3428.0], [37.2, 3428.0], [37.3, 3434.0], [37.4, 3434.0], [37.5, 3434.0], [37.6, 3434.0], [37.7, 3434.0], [37.8, 3462.0], [37.9, 3462.0], [38.0, 3462.0], [38.1, 3462.0], [38.2, 3462.0], [38.3, 3462.0], [38.4, 3510.0], [38.5, 3510.0], [38.6, 3510.0], [38.7, 3510.0], [38.8, 3510.0], [38.9, 3540.0], [39.0, 3540.0], [39.1, 3540.0], [39.2, 3540.0], [39.3, 3540.0], [39.4, 3540.0], [39.5, 3597.0], [39.6, 3597.0], [39.7, 3597.0], [39.8, 3597.0], [39.9, 3597.0], [40.0, 3597.0], [40.1, 3643.0], [40.2, 3643.0], [40.3, 3643.0], [40.4, 3643.0], [40.5, 3643.0], [40.6, 3665.0], [40.7, 3665.0], [40.8, 3665.0], [40.9, 3665.0], [41.0, 3665.0], [41.1, 3665.0], [41.2, 3761.0], [41.3, 3761.0], [41.4, 3761.0], [41.5, 3761.0], [41.6, 3761.0], [41.7, 4487.0], [41.8, 4487.0], [41.9, 4487.0], [42.0, 4487.0], [42.1, 4487.0], [42.2, 4487.0], [42.3, 4599.0], [42.4, 4599.0], [42.5, 4599.0], [42.6, 4599.0], [42.7, 4599.0], [42.8, 4662.0], [42.9, 4662.0], [43.0, 4662.0], [43.1, 4662.0], [43.2, 4662.0], [43.3, 4662.0], [43.4, 4683.0], [43.5, 4683.0], [43.6, 4683.0], [43.7, 4683.0], [43.8, 4683.0], [43.9, 4928.0], [44.0, 4928.0], [44.1, 4928.0], [44.2, 4928.0], [44.3, 4928.0], [44.4, 4928.0], [44.5, 4947.0], [44.6, 4947.0], [44.7, 4947.0], [44.8, 4947.0], [44.9, 4947.0], [45.0, 4947.0], [45.1, 5279.0], [45.2, 5279.0], [45.3, 5279.0], [45.4, 5279.0], [45.5, 5279.0], [45.6, 5310.0], [45.7, 5310.0], [45.8, 5310.0], [45.9, 5310.0], [46.0, 5310.0], [46.1, 5310.0], [46.2, 5315.0], [46.3, 5315.0], [46.4, 5315.0], [46.5, 5315.0], [46.6, 5315.0], [46.7, 5360.0], [46.8, 5360.0], [46.9, 5360.0], [47.0, 5360.0], [47.1, 5360.0], [47.2, 5360.0], [47.3, 5434.0], [47.4, 5434.0], [47.5, 5434.0], [47.6, 5434.0], [47.7, 5434.0], [47.8, 5637.0], [47.9, 5637.0], [48.0, 5637.0], [48.1, 5637.0], [48.2, 5637.0], [48.3, 5637.0], [48.4, 5709.0], [48.5, 5709.0], [48.6, 5709.0], [48.7, 5709.0], [48.8, 5709.0], [48.9, 5978.0], [49.0, 5978.0], [49.1, 5978.0], [49.2, 5978.0], [49.3, 5978.0], [49.4, 5978.0], [49.5, 6150.0], [49.6, 6150.0], [49.7, 6150.0], [49.8, 6150.0], [49.9, 6150.0], [50.0, 6150.0], [50.1, 6162.0], [50.2, 6162.0], [50.3, 6162.0], [50.4, 6162.0], [50.5, 6162.0], [50.6, 6189.0], [50.7, 6189.0], [50.8, 6189.0], [50.9, 6189.0], [51.0, 6189.0], [51.1, 6189.0], [51.2, 6383.0], [51.3, 6383.0], [51.4, 6383.0], [51.5, 6383.0], [51.6, 6383.0], [51.7, 6624.0], [51.8, 6624.0], [51.9, 6624.0], [52.0, 6624.0], [52.1, 6624.0], [52.2, 6624.0], [52.3, 6747.0], [52.4, 6747.0], [52.5, 6747.0], [52.6, 6747.0], [52.7, 6747.0], [52.8, 6767.0], [52.9, 6767.0], [53.0, 6767.0], [53.1, 6767.0], [53.2, 6767.0], [53.3, 6767.0], [53.4, 6949.0], [53.5, 6949.0], [53.6, 6949.0], [53.7, 6949.0], [53.8, 6949.0], [53.9, 7103.0], [54.0, 7103.0], [54.1, 7103.0], [54.2, 7103.0], [54.3, 7103.0], [54.4, 7103.0], [54.5, 7136.0], [54.6, 7136.0], [54.7, 7136.0], [54.8, 7136.0], [54.9, 7136.0], [55.0, 7136.0], [55.1, 7181.0], [55.2, 7181.0], [55.3, 7181.0], [55.4, 7181.0], [55.5, 7181.0], [55.6, 7238.0], [55.7, 7238.0], [55.8, 7238.0], [55.9, 7238.0], [56.0, 7238.0], [56.1, 7238.0], [56.2, 7528.0], [56.3, 7528.0], [56.4, 7528.0], [56.5, 7528.0], [56.6, 7528.0], [56.7, 7726.0], [56.8, 7726.0], [56.9, 7726.0], [57.0, 7726.0], [57.1, 7726.0], [57.2, 7726.0], [57.3, 7747.0], [57.4, 7747.0], [57.5, 7747.0], [57.6, 7747.0], [57.7, 7747.0], [57.8, 7840.0], [57.9, 7840.0], [58.0, 7840.0], [58.1, 7840.0], [58.2, 7840.0], [58.3, 7840.0], [58.4, 7860.0], [58.5, 7860.0], [58.6, 7860.0], [58.7, 7860.0], [58.8, 7860.0], [58.9, 7882.0], [59.0, 7882.0], [59.1, 7882.0], [59.2, 7882.0], [59.3, 7882.0], [59.4, 7882.0], [59.5, 7913.0], [59.6, 7913.0], [59.7, 7913.0], [59.8, 7913.0], [59.9, 7913.0], [60.0, 7913.0], [60.1, 7999.0], [60.2, 7999.0], [60.3, 7999.0], [60.4, 7999.0], [60.5, 7999.0], [60.6, 8137.0], [60.7, 8137.0], [60.8, 8137.0], [60.9, 8137.0], [61.0, 8137.0], [61.1, 8137.0], [61.2, 8161.0], [61.3, 8161.0], [61.4, 8161.0], [61.5, 8161.0], [61.6, 8161.0], [61.7, 8241.0], [61.8, 8241.0], [61.9, 8241.0], [62.0, 8241.0], [62.1, 8241.0], [62.2, 8241.0], [62.3, 8253.0], [62.4, 8253.0], [62.5, 8253.0], [62.6, 8253.0], [62.7, 8253.0], [62.8, 8267.0], [62.9, 8267.0], [63.0, 8267.0], [63.1, 8267.0], [63.2, 8267.0], [63.3, 8267.0], [63.4, 8342.0], [63.5, 8342.0], [63.6, 8342.0], [63.7, 8342.0], [63.8, 8342.0], [63.9, 8487.0], [64.0, 8487.0], [64.1, 8487.0], [64.2, 8487.0], [64.3, 8487.0], [64.4, 8487.0], [64.5, 8532.0], [64.6, 8532.0], [64.7, 8532.0], [64.8, 8532.0], [64.9, 8532.0], [65.0, 8532.0], [65.1, 8669.0], [65.2, 8669.0], [65.3, 8669.0], [65.4, 8669.0], [65.5, 8669.0], [65.6, 8774.0], [65.7, 8774.0], [65.8, 8774.0], [65.9, 8774.0], [66.0, 8774.0], [66.1, 8774.0], [66.2, 8900.0], [66.3, 8900.0], [66.4, 8900.0], [66.5, 8900.0], [66.6, 8900.0], [66.7, 8958.0], [66.8, 8958.0], [66.9, 8958.0], [67.0, 8958.0], [67.1, 8958.0], [67.2, 8958.0], [67.3, 9236.0], [67.4, 9236.0], [67.5, 9236.0], [67.6, 9236.0], [67.7, 9236.0], [67.8, 9391.0], [67.9, 9391.0], [68.0, 9391.0], [68.1, 9391.0], [68.2, 9391.0], [68.3, 9391.0], [68.4, 9407.0], [68.5, 9407.0], [68.6, 9407.0], [68.7, 9407.0], [68.8, 9407.0], [68.9, 9460.0], [69.0, 9460.0], [69.1, 9460.0], [69.2, 9460.0], [69.3, 9460.0], [69.4, 9460.0], [69.5, 9591.0], [69.6, 9591.0], [69.7, 9591.0], [69.8, 9591.0], [69.9, 9591.0], [70.0, 9591.0], [70.1, 9620.0], [70.2, 9620.0], [70.3, 9620.0], [70.4, 9620.0], [70.5, 9620.0], [70.6, 9678.0], [70.7, 9678.0], [70.8, 9678.0], [70.9, 9678.0], [71.0, 9678.0], [71.1, 9678.0], [71.2, 9984.0], [71.3, 9984.0], [71.4, 9984.0], [71.5, 9984.0], [71.6, 9984.0], [71.7, 10132.0], [71.8, 10132.0], [71.9, 10132.0], [72.0, 10132.0], [72.1, 10132.0], [72.2, 10132.0], [72.3, 10174.0], [72.4, 10174.0], [72.5, 10174.0], [72.6, 10174.0], [72.7, 10174.0], [72.8, 10175.0], [72.9, 10175.0], [73.0, 10175.0], [73.1, 10175.0], [73.2, 10175.0], [73.3, 10175.0], [73.4, 10189.0], [73.5, 10189.0], [73.6, 10189.0], [73.7, 10189.0], [73.8, 10189.0], [73.9, 10250.0], [74.0, 10250.0], [74.1, 10250.0], [74.2, 10250.0], [74.3, 10250.0], [74.4, 10250.0], [74.5, 10363.0], [74.6, 10363.0], [74.7, 10363.0], [74.8, 10363.0], [74.9, 10363.0], [75.0, 10363.0], [75.1, 10377.0], [75.2, 10377.0], [75.3, 10377.0], [75.4, 10377.0], [75.5, 10377.0], [75.6, 10520.0], [75.7, 10520.0], [75.8, 10520.0], [75.9, 10520.0], [76.0, 10520.0], [76.1, 10520.0], [76.2, 10634.0], [76.3, 10634.0], [76.4, 10634.0], [76.5, 10634.0], [76.6, 10634.0], [76.7, 10707.0], [76.8, 10707.0], [76.9, 10707.0], [77.0, 10707.0], [77.1, 10707.0], [77.2, 10707.0], [77.3, 10729.0], [77.4, 10729.0], [77.5, 10729.0], [77.6, 10729.0], [77.7, 10729.0], [77.8, 10787.0], [77.9, 10787.0], [78.0, 10787.0], [78.1, 10787.0], [78.2, 10787.0], [78.3, 10787.0], [78.4, 10805.0], [78.5, 10805.0], [78.6, 10805.0], [78.7, 10805.0], [78.8, 10805.0], [78.9, 10812.0], [79.0, 10812.0], [79.1, 10812.0], [79.2, 10812.0], [79.3, 10812.0], [79.4, 10812.0], [79.5, 10854.0], [79.6, 10854.0], [79.7, 10854.0], [79.8, 10854.0], [79.9, 10854.0], [80.0, 10854.0], [80.1, 10878.0], [80.2, 10878.0], [80.3, 10878.0], [80.4, 10878.0], [80.5, 10878.0], [80.6, 11023.0], [80.7, 11023.0], [80.8, 11023.0], [80.9, 11023.0], [81.0, 11023.0], [81.1, 11023.0], [81.2, 11101.0], [81.3, 11101.0], [81.4, 11101.0], [81.5, 11101.0], [81.6, 11101.0], [81.7, 11224.0], [81.8, 11224.0], [81.9, 11224.0], [82.0, 11224.0], [82.1, 11224.0], [82.2, 11224.0], [82.3, 11269.0], [82.4, 11269.0], [82.5, 11269.0], [82.6, 11269.0], [82.7, 11269.0], [82.8, 11350.0], [82.9, 11350.0], [83.0, 11350.0], [83.1, 11350.0], [83.2, 11350.0], [83.3, 11350.0], [83.4, 11377.0], [83.5, 11377.0], [83.6, 11377.0], [83.7, 11377.0], [83.8, 11377.0], [83.9, 11464.0], [84.0, 11464.0], [84.1, 11464.0], [84.2, 11464.0], [84.3, 11464.0], [84.4, 11464.0], [84.5, 11597.0], [84.6, 11597.0], [84.7, 11597.0], [84.8, 11597.0], [84.9, 11597.0], [85.0, 11597.0], [85.1, 11722.0], [85.2, 11722.0], [85.3, 11722.0], [85.4, 11722.0], [85.5, 11722.0], [85.6, 11758.0], [85.7, 11758.0], [85.8, 11758.0], [85.9, 11758.0], [86.0, 11758.0], [86.1, 11758.0], [86.2, 11959.0], [86.3, 11959.0], [86.4, 11959.0], [86.5, 11959.0], [86.6, 11959.0], [86.7, 12008.0], [86.8, 12008.0], [86.9, 12008.0], [87.0, 12008.0], [87.1, 12008.0], [87.2, 12008.0], [87.3, 12159.0], [87.4, 12159.0], [87.5, 12159.0], [87.6, 12159.0], [87.7, 12159.0], [87.8, 12175.0], [87.9, 12175.0], [88.0, 12175.0], [88.1, 12175.0], [88.2, 12175.0], [88.3, 12175.0], [88.4, 12224.0], [88.5, 12224.0], [88.6, 12224.0], [88.7, 12224.0], [88.8, 12224.0], [88.9, 12276.0], [89.0, 12276.0], [89.1, 12276.0], [89.2, 12276.0], [89.3, 12276.0], [89.4, 12276.0], [89.5, 12969.0], [89.6, 12969.0], [89.7, 12969.0], [89.8, 12969.0], [89.9, 12969.0], [90.0, 12969.0], [90.1, 12991.0], [90.2, 12991.0], [90.3, 12991.0], [90.4, 12991.0], [90.5, 12991.0], [90.6, 13102.0], [90.7, 13102.0], [90.8, 13102.0], [90.9, 13102.0], [91.0, 13102.0], [91.1, 13102.0], [91.2, 13148.0], [91.3, 13148.0], [91.4, 13148.0], [91.5, 13148.0], [91.6, 13148.0], [91.7, 13210.0], [91.8, 13210.0], [91.9, 13210.0], [92.0, 13210.0], [92.1, 13210.0], [92.2, 13210.0], [92.3, 13237.0], [92.4, 13237.0], [92.5, 13237.0], [92.6, 13237.0], [92.7, 13237.0], [92.8, 13329.0], [92.9, 13329.0], [93.0, 13329.0], [93.1, 13329.0], [93.2, 13329.0], [93.3, 13329.0], [93.4, 13332.0], [93.5, 13332.0], [93.6, 13332.0], [93.7, 13332.0], [93.8, 13332.0], [93.9, 13390.0], [94.0, 13390.0], [94.1, 13390.0], [94.2, 13390.0], [94.3, 13390.0], [94.4, 13390.0], [94.5, 13448.0], [94.6, 13448.0], [94.7, 13448.0], [94.8, 13448.0], [94.9, 13448.0], [95.0, 13448.0], [95.1, 13477.0], [95.2, 13477.0], [95.3, 13477.0], [95.4, 13477.0], [95.5, 13477.0], [95.6, 13670.0], [95.7, 13670.0], [95.8, 13670.0], [95.9, 13670.0], [96.0, 13670.0], [96.1, 13670.0], [96.2, 13894.0], [96.3, 13894.0], [96.4, 13894.0], [96.5, 13894.0], [96.6, 13894.0], [96.7, 14077.0], [96.8, 14077.0], [96.9, 14077.0], [97.0, 14077.0], [97.1, 14077.0], [97.2, 14077.0], [97.3, 15402.0], [97.4, 15402.0], [97.5, 15402.0], [97.6, 15402.0], [97.7, 15402.0], [97.8, 16668.0], [97.9, 16668.0], [98.0, 16668.0], [98.1, 16668.0], [98.2, 16668.0], [98.3, 16668.0], [98.4, 17238.0], [98.5, 17238.0], [98.6, 17238.0], [98.7, 17238.0], [98.8, 17238.0], [98.9, 17286.0], [99.0, 17286.0], [99.1, 17286.0], [99.2, 17286.0], [99.3, 17286.0], [99.4, 17286.0], [99.5, 18970.0], [99.6, 18970.0], [99.7, 18970.0], [99.8, 18970.0], [99.9, 18970.0], [100.0, 18970.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1800.0, "maxY": 10.0, "series": [{"data": [[1800.0, 1.0], [2000.0, 1.0], [2100.0, 1.0], [2200.0, 5.0], [2300.0, 3.0], [2400.0, 10.0], [2500.0, 2.0], [2600.0, 4.0], [2800.0, 8.0], [2700.0, 2.0], [2900.0, 10.0], [3000.0, 4.0], [3100.0, 8.0], [3300.0, 2.0], [3200.0, 4.0], [3400.0, 4.0], [3500.0, 3.0], [3600.0, 2.0], [3700.0, 1.0], [4500.0, 1.0], [4400.0, 1.0], [4600.0, 2.0], [4900.0, 2.0], [5200.0, 1.0], [5300.0, 3.0], [5400.0, 1.0], [5600.0, 1.0], [5700.0, 1.0], [6100.0, 3.0], [5900.0, 1.0], [6300.0, 1.0], [6600.0, 1.0], [6700.0, 2.0], [6900.0, 1.0], [7100.0, 3.0], [7200.0, 1.0], [7500.0, 1.0], [7800.0, 3.0], [7700.0, 2.0], [7900.0, 2.0], [8100.0, 2.0], [8200.0, 3.0], [8300.0, 1.0], [8500.0, 1.0], [8700.0, 1.0], [8400.0, 1.0], [8600.0, 1.0], [8900.0, 2.0], [9200.0, 1.0], [9600.0, 2.0], [9400.0, 2.0], [9300.0, 1.0], [9500.0, 1.0], [10100.0, 4.0], [9900.0, 1.0], [10200.0, 1.0], [10700.0, 3.0], [10300.0, 2.0], [10600.0, 1.0], [10500.0, 1.0], [10800.0, 4.0], [11200.0, 2.0], [11100.0, 1.0], [11000.0, 1.0], [11400.0, 1.0], [11700.0, 2.0], [11300.0, 2.0], [11500.0, 1.0], [12100.0, 2.0], [12200.0, 2.0], [12000.0, 1.0], [11900.0, 1.0], [13100.0, 2.0], [13300.0, 3.0], [13200.0, 2.0], [12900.0, 2.0], [13400.0, 2.0], [13800.0, 1.0], [13600.0, 1.0], [14000.0, 1.0], [15400.0, 1.0], [17200.0, 2.0], [16600.0, 1.0], [18900.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 18900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 180.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 180.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 180.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 69.12222222222223, "minX": 1.67346978E12, "maxY": 69.12222222222223, "series": [{"data": [[1.67346978E12, 69.12222222222223]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67346978E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2402.0, "minX": 1.0, "maxY": 18970.0, "series": [{"data": [[2.0, 13448.0], [3.0, 14077.0], [4.0, 16668.0], [5.0, 9591.0], [6.0, 8669.0], [7.0, 15402.0], [8.0, 17238.0], [9.0, 17286.0], [10.0, 9236.0], [11.0, 9460.0], [12.0, 11023.0], [13.0, 7860.0], [14.0, 8253.0], [15.0, 7913.0], [16.0, 8487.0], [17.0, 7726.0], [18.0, 6624.0], [19.0, 7840.0], [20.0, 12991.0], [21.0, 5978.0], [22.0, 8774.0], [23.0, 7136.0], [24.0, 7528.0], [25.0, 7103.0], [26.0, 6747.0], [27.0, 11597.0], [28.0, 10520.0], [29.0, 7999.0], [30.0, 6150.0], [31.0, 8161.0], [33.0, 10174.0], [32.0, 8532.0], [35.0, 6383.0], [34.0, 7747.0], [37.0, 7238.0], [36.0, 6162.0], [39.0, 8900.0], [38.0, 10363.0], [41.0, 9391.0], [40.0, 5315.0], [43.0, 11959.0], [42.0, 10634.0], [45.0, 13329.0], [44.0, 10878.0], [47.0, 10805.0], [46.0, 9407.0], [49.0, 5360.0], [48.0, 10175.0], [51.0, 3966.666666666667], [50.0, 10377.0], [53.0, 5709.0], [52.0, 8241.0], [55.0, 6949.0], [54.0, 9678.0], [57.0, 8137.0], [56.0, 8342.0], [59.0, 3973.6], [58.0, 4674.0], [60.0, 7367.0], [61.0, 9620.0], [63.0, 7882.0], [62.0, 9984.0], [64.0, 5845.0], [66.0, 7385.0], [67.0, 4538.8], [65.0, 13237.0], [68.0, 4477.5], [69.0, 3657.3333333333335], [71.0, 7640.0], [70.0, 11101.0], [73.0, 5998.0], [75.0, 10707.0], [74.0, 10189.0], [72.0, 12969.0], [77.0, 6898.5], [79.0, 13210.0], [78.0, 13670.0], [76.0, 13390.0], [81.0, 8154.0], [83.0, 13477.0], [82.0, 11758.0], [80.0, 11269.0], [85.0, 6097.0], [86.0, 3945.5], [87.0, 7307.5], [84.0, 12008.0], [88.0, 7123.0], [89.0, 5215.75], [90.0, 7107.5], [91.0, 11722.0], [93.0, 8064.0], [95.0, 3895.0], [94.0, 12175.0], [92.0, 12276.0], [97.0, 4451.666666666667], [99.0, 3434.0], [98.0, 2909.0], [96.0, 11464.0], [100.0, 2910.5], [102.0, 2880.0], [103.0, 2637.0], [101.0, 5279.0], [105.0, 2967.0], [104.0, 2714.0], [107.0, 3540.0], [106.0, 5637.0], [111.0, 2547.5], [110.0, 3891.5], [109.0, 2412.0], [108.0, 3115.0], [113.0, 4562.5], [115.0, 3244.0], [114.0, 2402.0], [112.0, 2804.0], [116.0, 2997.0], [119.0, 3111.0], [118.0, 2695.0], [117.0, 6767.0], [120.0, 3034.0], [121.0, 3300.5], [1.0, 18970.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[69.12222222222223, 6867.666666666669]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 121.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 366.0, "minX": 1.67346978E12, "maxY": 193497.0, "series": [{"data": [[1.67346978E12, 193497.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.67346978E12, 366.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67346978E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 6867.666666666669, "minX": 1.67346978E12, "maxY": 6867.666666666669, "series": [{"data": [[1.67346978E12, 6867.666666666669]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67346978E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5001.855555555556, "minX": 1.67346978E12, "maxY": 5001.855555555556, "series": [{"data": [[1.67346978E12, 5001.855555555556]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67346978E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 578.1166666666668, "minX": 1.67346978E12, "maxY": 578.1166666666668, "series": [{"data": [[1.67346978E12, 578.1166666666668]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67346978E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1897.0, "minX": 1.67346978E12, "maxY": 18970.0, "series": [{"data": [[1.67346978E12, 18970.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.67346978E12, 12988.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.67346978E12, 17605.959999999995]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.67346978E12, 13475.55]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.67346978E12, 1897.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.67346978E12, 6156.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67346978E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2359.5, "minX": 1.0, "maxY": 17238.0, "series": [{"data": [[2.0, 2359.5], [4.0, 8952.5], [8.0, 2879.5], [33.0, 9984.0], [1.0, 16209.0], [9.0, 2983.0], [10.0, 3107.5], [21.0, 11758.0], [12.0, 2541.0], [6.0, 2851.5], [3.0, 17238.0], [26.0, 7876.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1245.0, "minX": 1.0, "maxY": 12689.0, "series": [{"data": [[2.0, 1654.0], [4.0, 5796.0], [8.0, 1248.5], [33.0, 8479.0], [1.0, 9081.0], [9.0, 1246.0], [10.0, 1267.0], [21.0, 10546.0], [12.0, 1260.5], [6.0, 1245.0], [3.0, 12689.0], [26.0, 5879.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.67346978E12, "maxY": 3.0, "series": [{"data": [[1.67346978E12, 3.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67346978E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.67346978E12, "maxY": 3.0, "series": [{"data": [[1.67346978E12, 3.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67346978E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.67346978E12, "maxY": 3.0, "series": [{"data": [[1.67346978E12, 3.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67346978E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.67346978E12, "maxY": 3.0, "series": [{"data": [[1.67346978E12, 3.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67346978E12, "title": "Total Transactions Per Second"}},
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

