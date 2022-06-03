# Vanity Wallet Generator for Bep39 compatible wallets (EVM)

This application is a simple prototype that tries to find a wallet that matches a given pattern using brute force.

If a wallet is found, the mnemonic words will be shown at the console.

## Prerequisites

Nodejs 8 or higher is required. [Download Page](https://nodejs.org/en/download/)

## Installation (From NPM Repository)

Open a terminal and execute the following command

```bash
npm i -g @slimfish/vanity-wallet-generator@latest
```

## Usage (Npm repository)

Open a new terminal and execute the following command and follow the instructions

```bash
npx vanity-wallet-generator
```

## Usage (From Source code)

1. Download the source code into a folder (Using git or downloading the folder as a ZIP)

    git:

    ```bash
    git clone https://github.com/SlimFish32/vanity-wallet-generator.git
    ```

2. Open a terminal in the downloaded folder
3. Execute a package installation

    ```bash
    npm i
    ```

4. Run the application

    ```bash
    npm run start
    ```

## Functionality

The application will ask for the pattern to search.

Once you press enter, the application will start to generate bep39 mnemonics, and once a match is found, the mnemonics will be shown at the console.

To cancel the process press `Control+C` until the application stops.

## Disclaimer

The application is provided as is, without any warranty.

This application doesn't require any connection to internet. Also, the speed won't be stored anywhere, once you close the window, the seed is lost. it is your duty to write it down

Also, the time it takes to find a wallet depends on the number of characters to be found.
