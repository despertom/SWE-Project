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
        <li>Q: How can I add my own information to the calculator?<br /> A: First, you need to provide the name of the object you are adding. Then, you hhave to provide the carbon production of the object in units of pounds of carbon per year. The item will be saved to our database so that other users can add them to their calculations without having to submit a new object themselves.</li><br />
        <li>Q: How is the total carbon footprint calculated?<br /> A: For the preloaded datapoints, there is a set carbon footprint value to represent its impact on the environment. </li><br />
        <li>Q: Is my data visible to other users?<br /> A: No, data entered into the calculator is inaccessible to other users. However, the data is stored in our database and is used for creating percentiles for user to user comparisons.</li><br /> 
      </ul>
      <h1>Sources</h1>
      <ul>
        <li><a href="https://greenly.earth/en-us/blog/company-guide/what-is-the-average-american-carbon-footprint-and-how-to-reduce-it">Greenly</a></li><br />
        <li><a href="https://wmo.int/media/news/record-carbon-emissions-highlight-urgency-of-global-greenhouse-gas-watch#:~:text=This%20includes%20fossil%20CO2%20emissions%20of%2037.4,(deforestation)%2C%20according%20to%20the%20Global%20Carbon%20Budget.">wmo.int</a></li><br/>
        <li><a href="https://www.climate.gov/news-features/understanding-climate/climate-change-atmospheric-carbon-dioxide#:~:text=Why%20carbon%20dioxide%20matters,pH%20is%20called%20ocean%20acidification.">climate.gov</a></li><br/>
        <li><a href="https://science.nasa.gov/climate-change/effects/">NASA</a></li><br/>
      </ul>
    </div>
  );
}

export default Info;