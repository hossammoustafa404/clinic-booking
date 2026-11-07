# Patients are not Users

`User` is an authentication identity; `Patient` is a clinic-scoped record keyed by phone. Patients book as guests with OTP and manage one appointment through a scoped token, so no patient account or global patient identity exists in v1. Merging the two would couple clinical records to auth and leak patient data across clinics.
