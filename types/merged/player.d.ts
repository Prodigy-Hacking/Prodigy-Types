export interface MergedPlayer {
	changeEnergy(energy: number): void;
	changeGold(gold: number, item?: unknown): void;
	getGold(): number;
}