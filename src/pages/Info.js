import React, { useState, useEffect } from 'react';
import '../App.css';

function Info(){
  return (
    <div class="information">
      <h1>What is GreenGauge?</h1>
      <p>GreenGauge is a carbon footprint calculator designed to calculate how much carbon your lifestyle produces in a year and allow you to compare your results with others. The calculator utilizes items in your daily life such as cars and plastic water bottles and information on how the item was made and contributes to carbon production. When all items are accounted for, the calculator generates the user’s yearly carbon footprint and breaks down which areas are the worst contributors for the user and areas where they do well. This will also allow them to compare their results with others using a percentile system. Direct user to user comparisons will not be available in order to protect the privacy of our users.</p>
      <h1>Carbon Pollution and Climate Change Facts</h1>
      <ul>
        <li>The average carbon footprint of an American is 16 tons of carbon produced per year. This is significantly higher than most of the world. For example, a person living in the U.K. averages 6 tons per year, a person living in France averages 9.2 tons, and a person living in Japan averages 8.6 tons.</li><br />
        <li>In 2024, it is estimated that 41.6 billion tons of carbon was produced.</li><br />
        <li>Carbon in the form of carbon dioxide is a greenhouse gas. Greenhouse gasses absorb heat, so increased amounts of carbon in our atmosphere increases the rate of climate change.</li><br />
        <li>Some of the impacts of climate change are stronger hurricanes, drought, more intense heatwaves, rising sea levels, and many more.</li>
      </ul>
      <h1>GreenGauge FAQ</h1>
      <ul>
        <li>Q: <br /> A:</li><br />
        <li>Q: <br /> A:</li><br />
        <li>Q: <br /> A:</li><br />
        <li>Q: <br /> A:</li><br />
      </ul>
      <h1>Sources</h1>
      <ul>
        <li>https://greenly.earth/en-us/blog/company-guide/what-is-the-average-american-carbon-footprint-and-how-to-reduce-it</li><br />
        <li>https://wmo.int/media/news/record-carbon-emissions-highlight-urgency-of-global-greenhouse-gas-watch#:~:text=This%20includes%20fossil%20CO2%20emissions%20of%2037.4,(deforestation)%2C%20according%20to%20the%20Global%20Carbon%20Budget.</li><br/>
        <li>https://www.climate.gov/news-features/understanding-climate/climate-change-atmospheric-carbon-dioxide#:~:text=Why%20carbon%20dioxide%20matters,pH%20is%20called%20ocean%20acidification.</li><br/>
        <li>https://science.nasa.gov/climate-change/effects/</li><br/>
      </ul>
    </div>
  );
}

export default Info;