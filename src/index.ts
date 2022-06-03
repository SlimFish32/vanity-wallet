#!/usr/bin/env node
import {Wallet} from 'ethers';
import {AccountGenerator} from './class/account-generator';
import {PrintLogo} from './prompts/logo';
import {VanityPrompt} from './prompts/prompts';

class Execution {
  public async execute() {
    const startTime: Date = new Date();
    PrintLogo();

    const vanityPattern = await VanityPrompt();
    const accountGenerator = new AccountGenerator();

    const wallet: Wallet = accountGenerator.findVanityAddress(
      vanityPattern.pattern
    );

    this.printFoundAccount(wallet);

    const finalTime: Date = new Date();
    console.info('Process Finished');
    console.info(
      `Time elapsed ${
        (finalTime.getTime() - startTime.getTime()) / 1000
      } seconds`
    );
  }

  public printFoundAccount(wallet: Wallet): void {
    console.info('Wallet found that matches the vanity pattern!');
    console.info(`--------------------------------------------`);
    console.info(`Mnemonic: ${wallet.mnemonic.phrase.toString()}`);
    console.info(`Address: ${wallet.address}`);
    console.info(`--------------------------------------------`);
  }
}

new Execution().execute();
