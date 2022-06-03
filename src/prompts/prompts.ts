import * as Bip39 from 'bip39';

const prompts = require('prompts');

export const VanityPrompt = async () =>
  await prompts([
    {
      type: 'text',
      name: 'pattern',
      message:
        'Enter a valid pattern to search for (valid chars from a-f and 0-9)',

      validate: (value: string) => validateVanityPattern(value),
    },
  ]);

function validateVanityPattern(value: string): boolean {
  return /^(0x)?[a-fA-F0-9]{1,40}$/g.test(value);
}
