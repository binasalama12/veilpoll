import { Ledger } from "./managed/veilpoll/contract/index.js";
import { WitnessContext } from "@midnight-ntwrk/midnight-js-protocol/compact-runtime";

export type VeilPollPrivateState = {
  readonly secretKey: Uint8Array;
};

export const createVeilPollPrivateState = (secretKey: Uint8Array) => ({
  secretKey,
});

export const veilPollWitnesses = {
  localSecretKey: ({
    privateState,
  }: WitnessContext<Ledger, VeilPollPrivateState>): [
    VeilPollPrivateState,
    Uint8Array,
  ] => [privateState, privateState.secretKey],
};
