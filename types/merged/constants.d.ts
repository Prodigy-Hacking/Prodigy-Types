import { Constants } from "../generated/constants";

export interface MergedConstants {
	get<T extends keyof Constants>(key: T): Constants[T];
}