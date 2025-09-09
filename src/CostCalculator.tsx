import React from 'react'
import { useState } from 'react';

function CostCalculator(props:{priceOfSingleVMPerHour:number}) {

    const [numberOfVMs, setNumberOfVMs] = React.useState(1);

    const costPerHour = (Number(numberOfVMs) || 0) * props.priceOfSingleVMPerHour;
    const costPerDay = costPerHour * 24;
    const costPerMonth = costPerDay * 30;
    const costPerYear = costPerDay * 365;

  return (
    <div>
        <h1>VM Cost Calculator</h1>

        <label htmlFor="vmNumber">Number of VMs</label>
        <input type = "text" id = "vmNumber" placeholder="Number of VMs" value = {numberOfVMs}
            onChange={(e) => setNumberOfVMs(e.target.value)} />

        <h2>Costs</h2>
        <p>Cost per hour: {costPerHour}</p>
        <p>Cost per day: {costPerDay}</p>
        <p>Cost per month: {costPerMonth}</p>
        <p>Cost per year: {costPerYear}</p>
    </div>
  )
}

export default CostCalculator;
