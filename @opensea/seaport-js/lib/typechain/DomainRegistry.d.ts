import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface DomainRegistryInterface extends utils.Interface {
    contractName: "DomainRegistry";
    functions: {
        "getDomain(bytes4,uint256)": FunctionFragment;
        "getDomains(bytes4)": FunctionFragment;
        "getNumberOfDomains(bytes4)": FunctionFragment;
        "setDomain(string)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getDomain", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDomains", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getNumberOfDomains", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setDomain", values: [string]): string;
    decodeFunctionResult(functionFragment: "getDomain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDomains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNumberOfDomains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDomain", data: BytesLike): Result;
    events: {
        "DomainRegistered(string,bytes4,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DomainRegistered"): EventFragment;
}
export declare type DomainRegisteredEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    domain: string;
    tag: string;
    index: BigNumber;
}>;
export declare type DomainRegisteredEventFilter = TypedEventFilter<DomainRegisteredEvent>;
export interface DomainRegistry extends BaseContract {
    contractName: "DomainRegistry";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DomainRegistryInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        getDomain(tag: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            domain: string;
        }>;
        getDomains(tag: BytesLike, overrides?: CallOverrides): Promise<[string[]] & {
            domains: string[];
        }>;
        getNumberOfDomains(tag: BytesLike, overrides?: CallOverrides): Promise<[BigNumber] & {
            totalDomains: BigNumber;
        }>;
        setDomain(domain: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getDomain(tag: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getDomains(tag: BytesLike, overrides?: CallOverrides): Promise<string[]>;
    getNumberOfDomains(tag: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    setDomain(domain: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getDomain(tag: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getDomains(tag: BytesLike, overrides?: CallOverrides): Promise<string[]>;
        getNumberOfDomains(tag: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        setDomain(domain: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "DomainRegistered(string,bytes4,uint256)"(domain?: null, tag?: null, index?: null): DomainRegisteredEventFilter;
        DomainRegistered(domain?: null, tag?: null, index?: null): DomainRegisteredEventFilter;
    };
    estimateGas: {
        getDomain(tag: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getDomains(tag: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getNumberOfDomains(tag: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        setDomain(domain: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getDomain(tag: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDomains(tag: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNumberOfDomains(tag: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDomain(domain: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
