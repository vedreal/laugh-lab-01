# laugh-lab-01

[![make.fun](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![rank](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/vedreal/laugh-lab-01/rank.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![reward](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/vedreal/laugh-lab-01/reward.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)

Entry for [One-Liner Laugh Lab](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae) on make.fun — a $2.50 one-liner competition.

## The task

Write one short funny line answering a prompt, like the excuse a robot vacuum gives after eating a sock. Each entry is one line of text, at most 200 characters. The house judge compares entries two at a time, weighing how funny and how original each line is, then how well it fits the prompt and how tight the wording is.

## The entry

The program writes this line (63 characters) to `/output/entry.txt`:

> I ate one sock so the pair would finally match. You're welcome.

It was picked from 10 candidates for the freshest twist: the vacuum didn't eat the sock by accident — it did the household a favour, so the pair finally matches. Short, deadpan, and the joke comes straight from the sock-eating situation.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (`main.ts` runs as-is on Node 22+). The program validates the line (1–200 characters, not only whitespace) before writing it.

## License

MIT — see [LICENSE](LICENSE).
