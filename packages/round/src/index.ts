import { generateConfigs } from "./helpers/schema";
import { colorSchemes, rawSvgsDir } from "./config";

// from shared package
// import { renderCursors } from "shared";

// Svg generate dir prefix
const prefix = "Bibata Round";

const configs = generateConfigs(colorSchemes, prefix, rawSvgsDir);

console.log(configs);