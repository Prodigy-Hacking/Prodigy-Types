export declare interface Item<T extends string = string> extends PartialItem<T> {
	assetID: number;
	name: string;
	data: Partial<ItemData>;
	gender: number;
	metadata: Partial<ItemMetadata>;
} // should have ID, type
export interface ItemData {
	isPurchaseable: boolean;
	items: unknown[];
	name: string;
	questions: number;
	filename: string;
	element: string;
	damage: number;
	type: number;
	foreignSpellPools: number[][];
}
export interface ItemMetadata {
	vIcon: number;
	assets: { default: { v: number } };
}
export interface PartialItem<T extends string = string> {
	ID: number;
	type: T;
}
