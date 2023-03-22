import { JsonRpcProvider, RawSigner, Ed25519Keypair, Connection } from "@mysten/sui.js";
import { SeaPadInput } from "../../src/lauchpad/seapad-input";
import { SeaPadAdapter } from "../../src/lauchpad/seapad-adapter";

const PACKAGE_OBJECT_ID = "0x8b519e3ef4c7a4d21c82672d3bc30e407eece1db" //change seapad packageObjectId in here
const MODULE = "0000000000000000000000000000000000000002::coin;"   //change seapad module in here
const COIN = "<0x991cfe7d3e770bd74c808135dd8f5f81b193191b::beetle::BEETLE>"   //change your coin in here

export async function test(): Promise<any> {
    try {
        const connection = new Connection({
            fullnode: "https://fullnode.devnet.sui.io:443/",
            faucet: "https://faucet.devnet.sui.io/gas"
        })
        const provider = new JsonRpcProvider(connection);

        const keypair = new Ed25519Keypair();
        const signer = new RawSigner(keypair, provider)
        const seaPadAdapter = new SeaPadAdapter(signer, PACKAGE_OBJECT_ID, MODULE)
        const seaPadInputConvertor = new SeaPadInput(PACKAGE_OBJECT_ID, MODULE)

        //call get Input of function -> use for FE
        console.log(`FE get input to add_whitelist`, seaPadInputConvertor.addWhitelist({
            COIN: COIN
        }, {
            admin_cap: "", //enter input
            project: "",//enter input
            user: ""//enter input
        }))

        //excuteTransaction -> use for BE
        console.log(`BE call add_whitelist`, await seaPadAdapter.addWhitelist({
            COIN: COIN
        }, {
            admin_cap: "0xe93048d2fe38bd8545a50e2fe46b8241827a5baf",//enter input
            project: "0xe93048d2fe38bd8545a50e2fe46b8241827a5baf",//enter input
            user: "0xe93048d2fe38bd8545a50e2fe46b8241827a5baf"//enter input
        }))

    } catch (error) {
        throw error
    }
}