//QUESTION5:- A city planted 12,345 trees last year. 3,210 trees were cut down, and 1,500 new trees were planted this year. How many trees are in the city now?

const plantedTree = 12345;
const treesCutDown = 3210;
const plantedNewTrees = 1500;

const remainingTrees = plantedTree - treesCutDown;

const totalRemainingTrees = remainingTrees + plantedNewTrees;

console.log("Total tree number in this city:", totalRemainingTrees);