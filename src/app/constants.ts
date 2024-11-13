import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { client } from "./client";

export const ContractAddress ='0x1E1143c35D35A187025Be405ed655F42Ed2809f0'

export const CONTRACT = getContract({
    client : client,
    chain : sepolia,
    address : ContractAddress,
});