import { SeaPadFunc } from "./seapad-func";
import { GasBudget, SeaPadInput } from "./seapad-input";
import {WalletContextState} from "@suiet/wallet-kit";
import {SuiSignAndExecuteTransactionInput, SuiSignAndExecuteTransactionOutput} from "@mysten/wallet-standard";
import { MoveCallTransaction } from "@mysten/sui.js";


export class SeapadWalletAdapter extends SeaPadFunc<Promise<SuiSignAndExecuteTransactionOutput>> {
    _walletContextState: WalletContextState;
    _seaPadInput: SeaPadInput;


    constructor(walletContextState: WalletContextState, packageObjectId: string, module: string){
        super();
        this._seaPadInput = new SeaPadInput(packageObjectId, module);
        this._walletContextState = walletContextState;
    }

    async changeAdmin(types: { COIN: string; }, args: { admin_cap: string; to: string; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
        const message = this._seaPadInput.changeAdmin(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async createProject(types: { COIN: string; }, args: { admin_cap: string; owner: string; vesting_type: number; coin_metadata: string; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
         const message = this._seaPadInput.createProject(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async addMilestone(types: { COIN: string; }, args: { admin_cap: string; project: string; time: number; percent: number; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
         const message = this._seaPadInput.addMilestone(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async resetMilestone(types: { COIN: string; }, args: { admin_cap: string; project: string; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
         const message = this._seaPadInput.resetMilestone(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async setupProject(types: { COIN: string; }, args: { admin_cap: string; project: string; round: number, usewhitelist: boolean; swap_ratio_sui: string; swap_ratio_token: string; max_allocate: string; start_time: number; end_time: number; soft_cap: string; hard_cap: string; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
         const message = this._seaPadInput.setupProject(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async saveProfile(types: { COIN: string; }, args: { admin_cap: string; project: string; name: string; twitter: string; discord: string; telegram: string; website: string; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
         const message = this._seaPadInput.saveProfile(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async addWhitelist(types: { COIN: string; }, args: { admin_cap: string; project: string; user_list: string[]; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
         const message = this._seaPadInput.addWhitelist(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async removeWhitelist(types: { COIN: string; }, args: { admin_cap: string; project: string; user_list: string[]; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
         const message = this._seaPadInput.removeWhitelist(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async startFundRaising(types: { COIN: string; }, args: { admin_cap: string; project: string; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
         const message = this._seaPadInput.startFundRaising(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async buy(types: { COIN: string; }, args: { coins: string[]; amount: string; project: string; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
         const message = this._seaPadInput.buy(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async endFundRaising(types: { COIN: string; }, args: { admin_cap: string; project: string; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
         const message = this._seaPadInput.endFundRaising(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async endRefund(types: { COIN: string; }, args: { admin_cap: string; project: string; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
         const message = this._seaPadInput.endRefund(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async distributeRaisedFund(types: { COIN: string; }, args: { admin_cap: string; project: string; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
         const message = this._seaPadInput.distributeRaisedFund(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async refundTokenToOwner(types: { COIN: string; }, args: { admin_cap: string; project: string; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
         const message = this._seaPadInput.refundTokenToOwner(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async depositProject(types: { COIN: string; }, args: { coins: string[]; value: string; project: string; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
         const message = this._seaPadInput.depositProject(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async userClaimToken(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
         const message = this._seaPadInput.userClaimToken(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async claimRefund(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
         const message = this._seaPadInput.claimRefund(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async vote(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
        const message = this._seaPadInput.vote(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async like(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
        throw new Error("Contract unsupport");
    }
    async watch(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
        throw new Error("Contract unsupport");
    }
    async addMaxAllocate(types: { COIN: string; }, args: { admin_cap: string; user: string; max_allocate: string; project: string; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
         const message = this._seaPadInput.addMaxAllocate(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async removeMaxAllocate(types: { COIN: string; }, args: { admin_cap: string; user: string; project: string; }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>{
         const message = this._seaPadInput.removeMaxAllocate(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }

    buildTx(message: MoveCallTransaction):SuiSignAndExecuteTransactionInput{
        return  {
            transaction: {
                kind: "moveCall",
                data: message
            }
        };
    }

}