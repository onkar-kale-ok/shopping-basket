# Shopping Basket — small

This little project calculates the price of a shopping basket while applying a few simple offers

What it supports

- Apple — 1
- Banana — 2
- Melon — 3 (buy one get one free)
- Lime — 4 (three for the price of two)

Clone the repositroy and follow the below commands

Quick commands (PowerShell)

Install deps:

```powershell
npm install
```

Run tests:

```powershell
npm test
```

Build and run (one command):

```powershell
npm start
```

Notes on `npm start`

- `npm start` is configured to run the TypeScript build (`tsc`) and then execute the compiled output. That means you get a fresh build automatically when you run it.
- If you prefer to run TypeScript directly in development (skip the build step), install `ts-node` and `@types/node` and use:
