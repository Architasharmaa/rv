import React from "react";
 
import { AreaChart, LineChart, PieChart ,BarChart} from "nr1";
 
import { Grid, GridItem } from "nr1";
 
const index = () => {
  return (
    <div className="heading"> <h1> custom visualizer </h1>
 
<Grid>
   
<GridItem columnSpan={6}>
    <AreaChart
            accountId={4438277}
            query="SELECT average(memoryUsedPercent) AS `Memory used %` FROM SystemSample WHERE (entityGuid = 'NDQzODI3N3xJTkZSQXxOQXwzNjkxNTUxNjMxOTkyMDgyMDAy') TIMESERIES AUTO SINCE 30 minutes ago UNTIL now"
            fullWidth
          />
</GridItem>
 
<GridItem columnSpan={6}>
    <LineChart
            accountId={4438277}
            query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI3N3xJTkZSQXxOQXwzNjkxNTUxNjMxOTkyMDgyMDAy') TIMESERIES AUTO SINCE 30 minutes ago UNTIL now"
            fullWidth
          />
</GridItem>
<GridItem columnSpan={6}>
<AreaChart
            accountId={4438277}
            query="SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQzODI3N3xJTkZSQXxOQXwzNjkxNTUxNjMxOTkyMDgyMDAy') TIMESERIES AUTO SINCE 30 minutes ago UNTIL now"
            fullWidth
          />
</GridItem>
<GridItem columnSpan={6}>
<PieChart
          accountId={4438277}
          query="SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQzODI3N3xJTkZSQXxOQXwzNjkxNTUxNjMxOTkyMDgyMDAy') TIMESERIES AUTO SINCE 30 minutes ago UNTIL now"
          fullWidth
          />
</GridItem></Grid>
<GridItem columnSpan={6}>
    <h1>BarChart</h1>
    <BarChart
            accountId={4438277}
            query="SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQzODI3N3xJTkZSQXxOQXwzNjkxNTUxNjMxOTkyMDgyMDAy') TIMESERIES AUTO SINCE 30 minutes ago UNTIL now"
            fullWidth
          />
</GridItem>
 
 
 
   
    </div>
  );
};
 
export default index;