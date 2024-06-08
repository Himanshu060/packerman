const Box = require('../model/boxmodel.js');

let objects;

async function readData() {
    objects = await Box.find();
}



async function main() {
    // console.log("Main function called");
    await readData();
    var maxWeight = 600;
    var containerVolume = 500;
    function getTotals(obj){
      let totPrice = 0, totWeight = 0, totVolume = 0;
      obj.forEach((item) => {
        totPrice += item.price;
        totWeight += item.weight;
        totVolume += item.volume;
      });

      return {totPrice, totWeight, totVolume};
    }
    
    const packedEfficiency = maximizePackingEfficiency(objects, containerVolume, maxWeight);
    // console.log('Maximized Packing Efficiency:', packedEfficiency);
    
    const maxProfit = maximizeProfit(objects, containerVolume, maxWeight);
    // console.log('Maximized Profit:', maxProfit);

    const maxWeightPacking = maximizeWeight(objects, containerVolume, maxWeight);
    // console.log('Maximized Weight Packing:', maxWeightPacking);

    const findResult = () => {
      let schemes = [];
      const effScheme = getTotals(packedEfficiency);
      const priceScheme = getTotals(maxProfit);
      const weightScheme = getTotals(maxWeightPacking);

      schemes.push(effScheme);
      schemes.push(priceScheme);
      schemes.push(weightScheme);

      return schemes;
    };

    return {packedEfficiency, maxProfit, maxWeightPacking, result: findResult()}
     
}
/// Backtracking algorithm for maximizeProfit without density
function maximizeProfit(objects, containerVolume, maxWeight) {
  let maxProfit = 0;
  let currentProfit = 0;
  let bestConfiguration = [];

  function backtrack(itemIndex, packedVolume, packedWeight, currentConfiguration) {
    if (itemIndex >= objects.length) {
      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
        bestConfiguration = [...currentConfiguration];
      }
      return;
    }


    if (packedVolume + objects[itemIndex].volume <= containerVolume && packedWeight + objects[itemIndex].weight <= maxWeight) {
      packedVolume += objects[itemIndex].volume;
      packedWeight += objects[itemIndex].weight;
      currentProfit += objects[itemIndex].price;
      currentConfiguration.push(objects[itemIndex]);

      backtrack(itemIndex + 1, packedVolume, packedWeight, currentConfiguration);

      packedVolume -= objects[itemIndex].volume;
      packedWeight -= objects[itemIndex].weight;
      currentProfit -= objects[itemIndex].price;
      currentConfiguration.pop();
    }

    backtrack(itemIndex + 1, packedVolume, packedWeight, currentConfiguration);
  }

  backtrack(0, 0, 0, []);

  return bestConfiguration;
}

// Backtracking algorithm for maximizeWeight 
function maximizeWeight(objects, containerVolume, maxWeight) {
  let maxWeightPacked = 0;
  let currentWeight = 0;
  let currentprofit=0;
  let maxProfit = 0;
  let bestWeightConfiguration = [];

  function backtrack(itemIndex, packedVolume, packedWeight, currentWeightConfiguration) {
    if (itemIndex >= objects.length) {
      if (currentWeight > maxWeightPacked) {
        maxWeightPacked = currentWeight;
        maxProfit = currentprofit;
        bestWeightConfiguration = [...currentWeightConfiguration];
      }
      else if(currentWeight==maxWeightPacked && currentprofit>maxProfit){
        maxWeightPacked = currentWeight;
        bestWeightConfiguration = [...currentWeightConfiguration];
      }
      return;
    }


    if (packedVolume + objects[itemIndex].volume <= containerVolume && packedWeight + objects[itemIndex].weight <= maxWeight) {
      packedVolume += objects[itemIndex].volume;
      packedWeight += objects[itemIndex].weight;
      currentWeight += objects[itemIndex].weight;
      currentprofit+=objects[itemIndex].price;
      currentWeightConfiguration.push(objects[itemIndex]);

      backtrack(itemIndex + 1, packedVolume, packedWeight, currentWeightConfiguration);

      packedVolume -= objects[itemIndex].volume;
      packedWeight -= objects[itemIndex].weight;
      currentWeight -= objects[itemIndex].weight;
      currentprofit-=objects[itemIndex].price;
      currentWeightConfiguration.pop();
    }

    backtrack(itemIndex + 1, packedVolume, packedWeight, currentWeightConfiguration);
  }

  backtrack(0, 0, 0, []);

  return bestWeightConfiguration;
}


// // Backtracking algorithm for maximizePackingEfficiency
function maximizePackingEfficiency(objects, containerVolume, maxWeight) {
  let maxVolumePacked = 0;
  let currentVolume = 0;
  let currentprofit=0;
  let maxProfit = 0;
  let bestVolumeConfiguration = [];

  function backtrack(
    itemIndex,
    packedVolume,
    packedWeight,
    currentVolumeConfiguration
  ) {
    if (itemIndex >= objects.length) {
      if (currentVolume > maxVolumePacked) {
        maxProfit = currentprofit;
        maxVolumePacked = currentVolume;
        bestVolumeConfiguration = [...currentVolumeConfiguration];
      }
      else if(currentVolume==maxVolumePacked && currentprofit>maxProfit){
        maxVolumePacked = currentVolume;
        bestVolumeConfiguration = [...currentVolumeConfiguration];
      }

      return;
    }

    if (
      packedVolume + objects[itemIndex].volume <= containerVolume &&
      packedWeight + objects[itemIndex].weight <= maxWeight
    ) {
      packedVolume += objects[itemIndex].volume;
      packedWeight += objects[itemIndex].weight;
      currentVolume += objects[itemIndex].volume;
      currentprofit+=objects[itemIndex].price;
      currentVolumeConfiguration.push(objects[itemIndex]);

      backtrack(
        itemIndex + 1,
        packedVolume,
        packedWeight,
        currentVolumeConfiguration
      );

      packedVolume -= objects[itemIndex].volume;
      packedWeight -= objects[itemIndex].weight;
      currentVolume -= objects[itemIndex].volume;
      currentprofit-=objects[itemIndex].price;
      currentVolumeConfiguration.pop();
    }

    backtrack(
      itemIndex + 1,
      packedVolume,
      packedWeight,
      currentVolumeConfiguration
    );
  }

  backtrack(0, 0, 0, []);

  return bestVolumeConfiguration;
}


exports.main = main;