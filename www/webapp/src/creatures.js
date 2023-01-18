"use strict";

import CreateDivWithPTag from "./creatures/CreateDivWithPTag";
import IdentiGetter from "./creatures/IdentiGetter";
import StaWatcher from "./creatures/StaWacher";

let state = {};

const IdentiGetterOne = IdentiGetter(state);
IdentiGetterOne.create();
const myDiv = CreateDivWithPTag(state.identity);
myDiv.create();
StaWatcher(state);
