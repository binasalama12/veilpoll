export * from "./managed/veilpoll/contract/index.js";
export * from "./veilpoll-witnesses.js";

import { CompiledContract } from "@midnight-ntwrk/midnight-js-protocol/compact-js";

import * as CompiledVeilPollContract from "./managed/veilpoll/contract/index.js";
import * as Witnesses from "./veilpoll-witnesses.js";

export const CompiledVeilPollContract = CompiledContract.make<
  CompiledVeilPollContract.Contract<Witnesses.VeilPollPrivateState>
>("VeilPoll", CompiledVeilPollContract.Contract<Witnesses.VeilPollPrivateState>).pipe(
  CompiledContract.withWitnesses(Witnesses.veilPollWitnesses),
  CompiledContract.withCompiledFileAssets("./managed/veilpoll"),
);
