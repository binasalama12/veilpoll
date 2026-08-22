import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export enum PollState { OPEN = 0, CLOSED = 1 }

export enum PollOption { A = 0, B = 1, C = 2, D = 3 }

export type Witnesses<PS> = {
  localSecretKey(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, Uint8Array];
}

export type ImpureCircuits<PS> = {
  vote(context: __compactRuntime.CircuitContext<PS>, choice_0: PollOption): __compactRuntime.CircuitResults<PS, []>;
  close(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  getTally(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, bigint[]>;
}

export type ProvableCircuits<PS> = {
  vote(context: __compactRuntime.CircuitContext<PS>, choice_0: PollOption): __compactRuntime.CircuitResults<PS, []>;
  close(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  getTally(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, bigint[]>;
}

export type PureCircuits = {
  publicKey(sk_0: Uint8Array, seq_0: Uint8Array): Uint8Array;
}

export type Circuits<PS> = {
  publicKey(context: __compactRuntime.CircuitContext<PS>,
            sk_0: Uint8Array,
            seq_0: Uint8Array): __compactRuntime.CircuitResults<PS, Uint8Array>;
  vote(context: __compactRuntime.CircuitContext<PS>, choice_0: PollOption): __compactRuntime.CircuitResults<PS, []>;
  close(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  getTally(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, bigint[]>;
}

export type Ledger = {
  readonly state: PollState;
  readonly question: { is_some: boolean, value: string };
  readonly tallyA: bigint;
  readonly tallyB: bigint;
  readonly tallyC: bigint;
  readonly tallyD: bigint;
  readonly totalVotes: bigint;
  readonly owner: Uint8Array;
  readonly sequence: bigint;
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<PS = any, W extends Witnesses<PS> = Witnesses<PS>> {
  witnesses: W;
  circuits: Circuits<PS>;
  impureCircuits: ImpureCircuits<PS>;
  provableCircuits: ProvableCircuits<PS>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<PS>,
               initialQuestion_0: string): __compactRuntime.ConstructorResult<PS>;
}

export declare function ledger(state: __compactRuntime.StateValue | __compactRuntime.ChargedState): Ledger;
export declare const pureCircuits: PureCircuits;
