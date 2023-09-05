import ColaGenerator from "./colaGenerator.js";
import VendingMachineFunc from "./vendingMachineFunc.js";

const colaGenerator = new ColaGenerator();
colaGenerator.setup();

const vendingMachine = new VendingMachineFunc();
vendingMachine.setup();