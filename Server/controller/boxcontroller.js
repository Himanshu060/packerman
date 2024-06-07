const Box = require("../model/boxmodel");
const Log = require("../model/logmodel");
const { main } = require("../operation/dynamic");
// Add a new box
exports.addBox = async (req, res, next) => {
  // console.log(req.body);
  let { price, weight, type } = req.body;
  // console.log(price);
  let volume = 0;
  if (type == "small") {
    volume = 15;
  } else if (type == "medium") {
    volume = 20;
  } else if (type == "large") {
    volume = 30;
  }
  // console.log(price,weight,volume);
  const box = await Box.create({
    price,
    weight,
    volume,
  });
  res.status(200).json({
    success: true,
    data: box,
  });
};

// Get all the boxes
exports.getBox = async (req, res, next) => {
  const box = await Box.find();
  res.status(200).json({
    success: true,
    data: box,
  });
};

exports.getResult = async (req, res, next) => {
  const result = await main();
  // console.log(result);
  res.status(200).json({
    success: true,
    data: result,
  });
};
// update the containernum of box to container id
exports.updateBox = async (req, res, next) => {
  const { id } = req.params;
  const { containerNum } = req.body;
  const result = await Box.findByIdAndUpdate(id, {
    containerNum: containerNum,
  });
  res.status(200).json({
    success: true,
    data: result,
  });
};
// delete boxes with id
exports.deleteBox = async (req, res, next) => {
  const { id } = req.params;
  const result = await Box.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    data: result,
  });
};

// Add boxes with containerNum to log
exports.addLog = async (req, res, next) => {
  const { containerNum, boxes } = req.body;
  // const box=await Box.find({containerNum:containerNum});
  // console.log(boxes)
  const log = await Log.create({
    containerId: containerNum,
    boxes: boxes,
  });

  res.status(200).json({
    success: true,
    data: log,
  });
};

// Get all the logs
exports.getLog = async (req, res, next) => {
  const log = await Log.find();
  res.status(200).json({
    success: true,
    data: log,
  });
};

// Delete box 
exports.deleteLog = async (req, res, next) => {
  const { id } = req.params;
  const result = await Log.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    data: result,
  });
};