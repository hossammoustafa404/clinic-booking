# Tap Payments as the billing rail, with an owned subscription state machine

Tap is the primary MENA payment provider (Egypt: Meeza, Fawry, cards, local payouts; MENA: KNET, Benefit, QPay, STC Pay, wallets, BNPL) behind a `PaymentProvider` interface, with a fake adapter for development and demo. Plans, proration, invoices, VAT, dunning, and limits stay in our domain so the gateway can be swapped; Paymob is the fallback.
