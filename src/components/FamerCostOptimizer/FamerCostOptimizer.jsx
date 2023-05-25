import React, { useState } from "react";
import "./FarmerCostOptimizer.css";

const FarmerCostOptimizer = () => {
  const [landAvailable, setLandAvailable] = useState(0);
  const [manureRequired, setManureRequired] = useState(0);
  const [fertilizerRequired, setFertilizerRequired] = useState(0);
  const [plantCost, setPlantCost] = useState(0);
  const [manureCost, setManureCost] = useState(0);
  const [fertilizerCost, setFertilizerCost] = useState(0);
  const [irrigationCost, setIrrigationCost] = useState(0);

    const [worker,setWorker] = useState(0);
    const [landPreperationCost, setLandPreparationCost] = useState(0);
    const [refillingCost, setRefillingCost] = useState(0);
    const [plantingCost, setplantingCost] = useState(0);
    const [protectionCost, setProtectionCost] = useState(0);
    const [weedremovalCost1, setWeedremovalCost1] = useState(0);
    const [weedremovalCost2, setweedremovalCost2] = useState(0);
    const [pruningCost, setPruningCost] = useState(0);
    const [harvestingCost,setHarvestingCost] =useState(0);



    const calculateLabourTotalCost = () => {
    const totalPreparationtCost = Number.parseFloat(landPreperationCost) * Number.parseFloat(worker)*300;
    const totalRefillingCost = Number.parseFloat(refillingCost) * Number.parseFloat(worker)*300;
    const totalplantingCost = Number.parseFloat(plantingCost) * Number.parseFloat(worker)*300;
    const totalprotectionCost = Number.parseFloat(protectionCost) * Number.parseFloat(worker)*300;
    const totalweedremovalCost1 = Number.parseFloat(weedremovalCost1) * Number.parseFloat(worker)*300;
    const totalweedremovalCost2 = Number.parseFloat(weedremovalCost2) * Number.parseFloat(worker)*300;
    const totalpruningCost = Number.parseFloat(pruningCost) * Number.parseFloat(worker)*300;
    const totalHarvestingCost =  Number.parseFloat(harvestingCost);
    const totalCost = totalHarvestingCost+totalPreparationtCost+totalRefillingCost+totalprotectionCost+totalweedremovalCost1+totalweedremovalCost2+totalpruningCost+totalplantingCost;
    return totalCost;
  };


  const calculateTotalCost = () => {
    const totalPlantCost = Number.parseFloat(landAvailable) * Number.parseFloat(plantCost)*200;
    const totalManureCost = Number.parseFloat(manureRequired) * Number.parseFloat(manureCost);
    const totalFertilizerCost = Number.parseFloat(fertilizerRequired) * Number.parseFloat(fertilizerCost);
    const totalirrgationCost =  Number.parseFloat(irrigationCost);
    const totalCost = totalPlantCost + totalManureCost + totalFertilizerCost + totalirrgationCost;
    return totalCost;
  };


  return (
    <>
    <div className="FarmerCostOptimizer">
      <h2>Material Cost Optimization</h2>
      <form>
        <label>
          Land Available (in acre):
          <input type="number" value={landAvailable} onChange={(e) => setLandAvailable(e.target.value)} />
        </label>
        <br />
        <label>
          Manure Required (in kg):
          <input type="number" value={manureRequired} onChange={(e) => setManureRequired(e.target.value)} />
        </label>
        <br />
        <label>
          Fertilizer Required (in kg):
          <input type="number" value={fertilizerRequired} onChange={(e) => setFertilizerRequired(e.target.value)} />
        </label>
        <br />
        <label>
          Cost of Plant (in Rs):
          <input type="number" value={plantCost} onChange={(e) => setPlantCost(e.target.value)} />
        </label>
        <br />
        <label>
          Cost of Manure (in Rs):
          <input type="number" value={manureCost} onChange={(e) => setManureCost(e.target.value)} />
        </label>
        <br />
        <label>
          Cost of Fertilizer (in Rs):
          <input type="number" value={fertilizerCost} onChange={(e) => setFertilizerCost(e.target.value)} />
        </label>
        <br />
        <label>
          Irrigation Cost for One Year (in Rs):
          <input type="number" value={irrigationCost} onChange={(e) => setIrrigationCost(e.target.value)} />
        </label>
      </form>
      <br />
      <div>
        <strong>Total  material cost for one year: {calculateTotalCost()}</strong>
      </div>
    </div>
    <div className="FarmerCostOptimizer">
      <h2>Labour Cost Optimization</h2>
      <form>
        <label>
          worker Available:
          <input type="number" value={worker} onChange={(e) => setWorker(e.target.value)} />
        </label>
        <br />
        <label>
          Land Preparation cost (in man-days):
          <input type="number" value={landPreperationCost} onChange={(e) => setLandPreparationCost(e.target.value)} />
        </label>
        <br />
        <label>
          Refilling Cost (in man-days):
          <input type="number" value={refillingCost} onChange={(e) => setRefillingCost(e.target.value)} />
        </label>
        <br />
        <label>
          Planting Cost (in man-days):
          <input type="number" value={plantingCost} onChange={(e) => setplantingCost(e.target.value)} />
        </label>
        <br />
        <label>
          Protection Cost (in man-days):
          <input type="number" value={protectionCost} onChange={(e) => setProtectionCost(e.target.value)} />
        </label>
        <br />
        <label>
          Weed removal Cost in 1st year (in man-days):
          <input type="number" value={weedremovalCost1} onChange={(e) => setWeedremovalCost1(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
          Weed removal Cost in 2nd year (in man-days):
          <input type="number" value={weedremovalCost2} onChange={(e) => setweedremovalCost2(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
          Harvesting Cost (in Rs.):
          <input type="number" value={harvestingCost} onChange={(e) => setHarvestingCost(e.target.value)} />
        </label>
        <br />
        <label>
          Pruning Cost (in man-days):
          <input type="number" value={pruningCost} onChange={(e) => setPruningCost(e.target.value)} />
        </label>
      </form>
      <br />
      <div>
        <strong>Total  labour cost for one year: {calculateLabourTotalCost()}</strong>
      </div>
    </div>
    </>
  );
};

export default FarmerCostOptimizer;
