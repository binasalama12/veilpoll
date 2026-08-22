export * from "./managed/veilpoll/contract/index.js";
export * from "./veilpoll-witnesses.js";

import { CompiledContract } from "@midnight-ntwrk/midnight-js-protocol/compact-js";

import * as VeilPollModule from "./managed/veilpoll/contract/index.js";
import * as Witnesses from "./veilpoll-witnesses.js";

export const VeilPollContract = CompiledContract.make<
  VeilPollModule.Contract<Witnesses.VeilPollPrivateState>
>("VeilPoll", VeilPollModule.Contract<Witnesses.VeilPollPrivateState>).pipe(
  CompiledContract.withWitnesses(Witnesses.veilPollWitnesses),
  CompiledContract.withCompiledFileAssets("./managed/veilpoll"),
);
