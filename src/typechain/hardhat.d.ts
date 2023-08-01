// /* Autogenerated file. Do not edit manually. */
// /* tslint:disable */
// /* eslint-disable */
//
// import { ethers } from "ethers";
// import {
//   DeployContractOptions,
//   FactoryOptions,
//   HardhatEthersHelpers as HardhatEthersHelpersBase,
// } from "@nomicfoundation/hardhat-ethers/types";
//
// import * as Contracts from ".";
//
// declare module "hardhat/types/runtime" {
//   interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
//     getContractFactory(
//       name: "AccessControl",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.AccessControl__factory>;
//     getContractFactory(
//       name: "AccessControlEnumerable",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.AccessControlEnumerable__factory>;
//     getContractFactory(
//       name: "IAccessControl",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.IAccessControl__factory>;
//     getContractFactory(
//       name: "IAccessControlEnumerable",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.IAccessControlEnumerable__factory>;
//     getContractFactory(
//       name: "Ownable",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.Ownable__factory>;
//     getContractFactory(
//       name: "Pausable",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.Pausable__factory>;
//     getContractFactory(
//       name: "ERC20",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.ERC20__factory>;
//     getContractFactory(
//       name: "ERC20Burnable",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.ERC20Burnable__factory>;
//     getContractFactory(
//       name: "ERC20Pausable",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.ERC20Pausable__factory>;
//     getContractFactory(
//       name: "IERC20Metadata",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.IERC20Metadata__factory>;
//     getContractFactory(
//       name: "IERC20",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.IERC20__factory>;
//     getContractFactory(
//       name: "ERC721",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.ERC721__factory>;
//     getContractFactory(
//       name: "ERC721Burnable",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.ERC721Burnable__factory>;
//     getContractFactory(
//       name: "ERC721Enumerable",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.ERC721Enumerable__factory>;
//     getContractFactory(
//       name: "ERC721Pausable",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.ERC721Pausable__factory>;
//     getContractFactory(
//       name: "IERC721Enumerable",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.IERC721Enumerable__factory>;
//     getContractFactory(
//       name: "IERC721Metadata",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.IERC721Metadata__factory>;
//     getContractFactory(
//       name: "IERC721",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.IERC721__factory>;
//     getContractFactory(
//       name: "IERC721Receiver",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.IERC721Receiver__factory>;
//     getContractFactory(
//       name: "ERC165",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.ERC165__factory>;
//     getContractFactory(
//       name: "IERC165",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.IERC165__factory>;
//     getContractFactory(
//       name: "MyERC20",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.MyERC20__factory>;
//     getContractFactory(
//       name: "MyERC721",
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<Contracts.MyERC721__factory>;
//
//     getContractAt(
//       name: "AccessControl",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.AccessControl>;
//     getContractAt(
//       name: "AccessControlEnumerable",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.AccessControlEnumerable>;
//     getContractAt(
//       name: "IAccessControl",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.IAccessControl>;
//     getContractAt(
//       name: "IAccessControlEnumerable",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.IAccessControlEnumerable>;
//     getContractAt(
//       name: "Ownable",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.Ownable>;
//     getContractAt(
//       name: "Pausable",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.Pausable>;
//     getContractAt(
//       name: "ERC20",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.ERC20>;
//     getContractAt(
//       name: "ERC20Burnable",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.ERC20Burnable>;
//     getContractAt(
//       name: "ERC20Pausable",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.ERC20Pausable>;
//     getContractAt(
//       name: "IERC20Metadata",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.IERC20Metadata>;
//     getContractAt(
//       name: "IERC20",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.IERC20>;
//     getContractAt(
//       name: "ERC721",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.ERC721>;
//     getContractAt(
//       name: "ERC721Burnable",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.ERC721Burnable>;
//     getContractAt(
//       name: "ERC721Enumerable",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.ERC721Enumerable>;
//     getContractAt(
//       name: "ERC721Pausable",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.ERC721Pausable>;
//     getContractAt(
//       name: "IERC721Enumerable",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.IERC721Enumerable>;
//     getContractAt(
//       name: "IERC721Metadata",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.IERC721Metadata>;
//     getContractAt(
//       name: "IERC721",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.IERC721>;
//     getContractAt(
//       name: "IERC721Receiver",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.IERC721Receiver>;
//     getContractAt(
//       name: "ERC165",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.ERC165>;
//     getContractAt(
//       name: "IERC165",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.IERC165>;
//     getContractAt(
//       name: "MyERC20",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.MyERC20>;
//     getContractAt(
//       name: "MyERC721",
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<Contracts.MyERC721>;
//
//     deployContract(
//       name: "AccessControl",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.AccessControl>;
//     deployContract(
//       name: "AccessControlEnumerable",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.AccessControlEnumerable>;
//     deployContract(
//       name: "IAccessControl",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.IAccessControl>;
//     deployContract(
//       name: "IAccessControlEnumerable",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.IAccessControlEnumerable>;
//     deployContract(
//       name: "Ownable",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.Ownable>;
//     deployContract(
//       name: "Pausable",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.Pausable>;
//     deployContract(
//       name: "ERC20",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.ERC20>;
//     deployContract(
//       name: "ERC20Burnable",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.ERC20Burnable>;
//     deployContract(
//       name: "ERC20Pausable",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.ERC20Pausable>;
//     deployContract(
//       name: "IERC20Metadata",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.IERC20Metadata>;
//     deployContract(
//       name: "IERC20",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.IERC20>;
//     deployContract(
//       name: "ERC721",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.ERC721>;
//     deployContract(
//       name: "ERC721Burnable",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.ERC721Burnable>;
//     deployContract(
//       name: "ERC721Enumerable",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.ERC721Enumerable>;
//     deployContract(
//       name: "ERC721Pausable",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.ERC721Pausable>;
//     deployContract(
//       name: "IERC721Enumerable",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.IERC721Enumerable>;
//     deployContract(
//       name: "IERC721Metadata",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.IERC721Metadata>;
//     deployContract(
//       name: "IERC721",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.IERC721>;
//     deployContract(
//       name: "IERC721Receiver",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.IERC721Receiver>;
//     deployContract(
//       name: "ERC165",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.ERC165>;
//     deployContract(
//       name: "IERC165",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.IERC165>;
//     deployContract(
//       name: "MyERC20",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.MyERC20>;
//     deployContract(
//       name: "MyERC721",
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.MyERC721>;
//
//     deployContract(
//       name: "AccessControl",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.AccessControl>;
//     deployContract(
//       name: "AccessControlEnumerable",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.AccessControlEnumerable>;
//     deployContract(
//       name: "IAccessControl",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.IAccessControl>;
//     deployContract(
//       name: "IAccessControlEnumerable",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.IAccessControlEnumerable>;
//     deployContract(
//       name: "Ownable",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.Ownable>;
//     deployContract(
//       name: "Pausable",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.Pausable>;
//     deployContract(
//       name: "ERC20",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.ERC20>;
//     deployContract(
//       name: "ERC20Burnable",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.ERC20Burnable>;
//     deployContract(
//       name: "ERC20Pausable",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.ERC20Pausable>;
//     deployContract(
//       name: "IERC20Metadata",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.IERC20Metadata>;
//     deployContract(
//       name: "IERC20",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.IERC20>;
//     deployContract(
//       name: "ERC721",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.ERC721>;
//     deployContract(
//       name: "ERC721Burnable",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.ERC721Burnable>;
//     deployContract(
//       name: "ERC721Enumerable",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.ERC721Enumerable>;
//     deployContract(
//       name: "ERC721Pausable",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.ERC721Pausable>;
//     deployContract(
//       name: "IERC721Enumerable",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.IERC721Enumerable>;
//     deployContract(
//       name: "IERC721Metadata",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.IERC721Metadata>;
//     deployContract(
//       name: "IERC721",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.IERC721>;
//     deployContract(
//       name: "IERC721Receiver",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.IERC721Receiver>;
//     deployContract(
//       name: "ERC165",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.ERC165>;
//     deployContract(
//       name: "IERC165",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.IERC165>;
//     deployContract(
//       name: "MyERC20",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.MyERC20>;
//     deployContract(
//       name: "MyERC721",
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<Contracts.MyERC721>;
//
//     // default types
//     getContractFactory(
//       name: string,
//       signerOrOptions?: ethers.Signer | FactoryOptions
//     ): Promise<ethers.ContractFactory>;
//     getContractFactory(
//       abi: any[],
//       bytecode: ethers.BytesLike,
//       signer?: ethers.Signer
//     ): Promise<ethers.ContractFactory>;
//     getContractAt(
//       nameOrAbi: string | any[],
//       address: string | ethers.Addressable,
//       signer?: ethers.Signer
//     ): Promise<ethers.Contract>;
//     deployContract(
//       name: string,
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<ethers.Contract>;
//     deployContract(
//       name: string,
//       args: any[],
//       signerOrOptions?: ethers.Signer | DeployContractOptions
//     ): Promise<ethers.Contract>;
//   }
// }
