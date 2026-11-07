# Clinic Booking

A multi-tenant platform for appointment-based clinics in MENA, starting with Egypt. Clinics publish bookable availability; patients book and manage appointments; clinics manage their schedule and reminders.

## Language

### Tenancy and people

**Clinic**:
A business that offers appointment-based services to patients and is the tenant of the platform.
_Avoid_: Organization, tenant, business, practice

**Location**:
A physical place where a clinic delivers services. One per clinic in v1.
_Avoid_: Branch, site, office

**Clinic Member**:
A person with a membership in a clinic.
_Avoid_: Staff, employee, team member

**Owner**:
The clinic member with full control of the clinic, including billing and deletion.

**Clinic Admin**:
A clinic member who manages day-to-day clinic operations but not ownership-level settings.

**Practitioner**:
A clinic member who delivers services and owns a bookable calendar.
_Avoid_: Doctor, provider, resource, employee

**Patient**:
A clinic-scoped person who receives services. A patient is not an authentication identity.
_Avoid_: Customer, client, user

**User**:
An authentication identity that can sign in to the platform.
_Avoid_: Account

**Platform Super Admin**:
An operator of the platform, not a clinic member.
_Avoid_: Admin, system admin

### Scheduling

**Service**:
A bookable offering defined by a clinic, with a duration and optional buffers.
_Avoid_: Treatment, procedure, appointment type

**Appointment**:
A scheduled commitment between a patient and a practitioner for a service at a specific time.
_Avoid_: Booking, reservation, session

**Slot**:
A candidate start time computed from availability at request time. A slot is not stored.
_Avoid_: Opening, inventory

**Availability**:
The rules that determine when a practitioner can be booked: working hours, time off, and clinic booking limits.

**Working Hours**:
Weekly recurring intervals during which a practitioner is available.
_Avoid_: Schedule, shift

**Time Off**:
A dated exception that removes a practitioner's availability.
_Avoid_: Vacation, leave, holiday

**Booking**:
The act of reserving an appointment.
_Avoid_: Using "booking" as a noun for an appointment

**No-show**:
A patient who neither attends nor cancels before the appointment ends.

**Cancellation**:
An appointment ended by the patient or the clinic before it starts.

**Reminder**:
A notification scheduled relative to an appointment.

**Notification**:
A message sent to a patient or clinic member through a channel such as email or SMS.

### Billing

**Plan**:
A set of feature limits and a price that a clinic can subscribe to.
_Avoid_: Tier, package

**Subscription**:
A clinic's active plan and its billing period.
_Avoid_: Membership, account

**Invoice**:
A request for payment for a subscription period.
_Avoid_: Bill, receipt

**Payment**:
A settled subscription charge.
_Avoid_: Transaction, deposit

**SMS Credit**:
A unit of outbound SMS capacity included in a plan or purchased separately.
