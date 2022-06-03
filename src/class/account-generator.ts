import * as Bip39 from 'bip39';
import {ethers, Wallet} from 'ethers';
import ProgressBar from 'progress';

export class AccountGenerator {
  constructor() {}

  public findVanityAddress(pattern: string): Wallet {
    const target: string = pattern.replace('0x', '').toLowerCase();

    const bar = new ProgressBar(
      ' searching pattern [:target] - testing [:address] :rate/wps',
      {total: Number.MAX_VALUE, renderThrottle: 100}
    );

    let walletUnderTest: Wallet;
    let mnemonicUnderTest: string;
    do {
      mnemonicUnderTest = Bip39.generateMnemonic();
      walletUnderTest = this.buildWalletFromMnemonic(mnemonicUnderTest);
      bar.tick({target, address: walletUnderTest.address});
    } while (!matchesPattern(walletUnderTest, target));
    console.info();
    console.info();
    return walletUnderTest;
  }

  private buildWalletFromMnemonic(mnemonic: string): Wallet {
    return ethers.Wallet.fromMnemonic(mnemonic);
  }
}
function matchesPattern(walletUnderTest: Wallet, pattern: string): boolean {
  return walletUnderTest.address.toLowerCase().includes(pattern);
}
