import type { Player } from "./generated/player";
import type { GameData } from "./generated/gameData";
import type { Network } from "./generated/network";
import type { Instance } from "./generated/instance";
import type { MergedPlayer } from "./merged/player";
import type { Merge } from "./util/merge";
import type { Constants } from "./generated/constants";
import type { MergedConstants } from "./merged/constants";
import type { Localizer } from "./generated/localizer";
import type { Functions } from "./manual/functions";

export interface Hack {
	constants: Merge<Constants, MergedConstants>;
	player: Merge<Player, MergedPlayer>;
	gameData: GameData;
	network: Network;
	hack: Hack;
	localizer: Localizer;
	instance: Instance;
	functions: Functions;
}