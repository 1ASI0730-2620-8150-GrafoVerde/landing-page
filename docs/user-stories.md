# User Stories

**Author**: Grafo Verde Web Applications Developer Team

**License**: See [LICENSE.md](../LICENSE.md) for details.

These user stories match the landing page epic (`EP001`) of the Hostera project report.

## Requirements Traceability Matrix (RTM)

| Story ID | User Story Title | Bounded Context(s) | Domain Components | Architectural Decisions |
|---|---|---|---|---|
| US001 | Understand the hotel-operations proposition | None | None | None |
| US002 | Find information about Hostera | None | None | None |
| US003 | Find the independent-hotel path | None | None | None |
| US004 | Find the small-chain path | None | None | None |
| US005 | Understand the product benefits and operating flow | None | None | None |
| US006 | Compare plans and choose a next step | None | None | None |
| US007 | Explore product, team, and support content | None | None | None |
| US008 | Consult Hostera information in English or Spanish | None | None | None |

---

## US001: Understand the hotel-operations proposition

As a visitor, I want to understand what Hostera offers for hotel operations, so that I can decide whether Hostera is relevant to my hotel.

### Scenario: The visitor identifies the value proposition

- **Given** a visitor evaluates Hostera for the first time
- **When** the visitor requests the value proposition
- **Then** the visitor learns that Hostera allows running the whole hotel operation from one place.

### Scenario: The visitor identifies the operational areas covered

- **Given** the visitor is reviewing the value proposition
- **When** the visitor looks for the scope of the product
- **Then** the visitor finds that Hostera covers reservations, rooms, inventory, and access across every property.

### Scenario: The visitor recognizes the problem Hostera addresses

- **Given** the visitor continues reviewing the content
- **When** the visitor reads about current hotel operations
- **Then** the visitor learns that operations break when information is kept in different places and that Hostera connects reservations, rooms, inventory, and guest access in the same operational picture.

### Scenario: The visitor continues to the entry plan

- **Given** the visitor wants to evaluate Hostera after reading the value proposition
- **When** the visitor chooses to continue
- **Then** the system provides the Starter plan information.

---

## US002: Find information about Hostera

As a visitor, I want to request information about the topic I am interested in, so that I can learn about Hostera and understand the available next steps.

### Scenario: The visitor requests information about a topic

- **Given** a visitor wants information about a specific topic
- **When** the visitor chooses solutions, features, pricing, product, or team information
- **Then** the system provides information about the requested topic.

### Scenario: The visitor changes topic from any point

- **Given** the visitor is consulting information about Hostera
- **When** the visitor wants to consult another topic
- **Then** the system provides the requested topic independently of the topic previously consulted.

### Scenario: The visitor finds support and the service terms

- **Given** the visitor has reviewed the main content
- **When** the visitor looks for support or for the conditions of the service
- **Then** the visitor finds the frequently asked questions and the Terms and Conditions of Hostera.

### Scenario: The visitor identifies who offers the product

- **Given** the visitor wants to know who is responsible for Hostera
- **When** the visitor reviews the company information
- **Then** the visitor identifies Hostera, its statement “Hotel operations, connected.”, and Grafo Verde as the copyright holder.

---

## US003: Find the independent-hotel path

As a visitor from the independent-hotel segment, I want to identify the Hostera option for one property with up to 10 rooms, so that I can confirm that it fits my operation and continue with the corresponding plan.

### Scenario: The visitor identifies the independent-hotel option

- **Given** a visitor operates one independent hotel with up to 10 rooms
- **When** the visitor reviews the options by operating scale
- **Then** the visitor identifies the “Independent hotel” option for one property with up to 10 rooms, focused on reservations, availability, and room operations with consistent operational information.

### Scenario: The visitor reviews the Starter plan conditions

- **Given** the visitor evaluates the Starter plan
- **When** the visitor reviews its conditions
- **Then** the visitor learns that it costs S/39 per property per month and includes basic reservations and availability, inventory without automatic alerts, one simulated RFID reader, one administrator, and community and documentation support.

### Scenario: The visitor continues with the Starter plan

- **Given** the visitor considers that the independent-hotel option fits the operation
- **When** the visitor decides to continue
- **Then** the system provides the Starter plan information.

---

## US004: Find the small-chain path

As a small-chain hotel operations manager, I want an option for coordinating 2 to 5 locations, so that I can identify the plan and estimated cost intended for a multi-property operation.

### Scenario: The visitor identifies the small-chain option

- **Given** the visitor is responsible for a hotel chain with 2 to 5 locations
- **When** the visitor reviews the options by operating scale
- **Then** the visitor identifies the “Small hotel chain” option for coordinating rooms, stock, and reports across every property.

### Scenario: The visitor reviews the Professional plan conditions

- **Given** the visitor evaluates the Professional plan
- **When** the visitor reviews its conditions
- **Then** the visitor learns that it is intended for hotel chains with 2 to 5 locations, costs S/8 per room per month, and includes unlimited rooms across locations, automatic critical-stock alerts, up to 25 RFID readers, reports by location, five administrators with roles, and priority chat and email support.

### Scenario: The visitor estimates the monthly cost

- **Given** the visitor knows the total number of rooms across the chain's hotels
- **When** the visitor provides that number of rooms
- **Then** the system calculates the estimated monthly cost at S/8 per room, so 25 rooms correspond to S/200.

### Scenario: The visitor provides an invalid number of rooms

- **Given** the visitor provides a value that is not a whole number of 1 or more
- **When** the estimate is calculated
- **Then** the system does not calculate the cost and indicates that a whole number of rooms of 1 or more is required.

### Scenario: The visitor continues with the Professional plan

- **Given** the visitor considers that the small-chain option fits the operation
- **When** the visitor decides to continue
- **Then** the system provides the Professional plan information.

---

## US005: Understand the product benefits and operating flow

As a visitor, I want to understand the benefits and the high-level operating flow described by Hostera, so that I can relate the proposition to hotel work.

### Scenario: The visitor learns the benefit of connected operations

- **Given** the visitor wants to know the benefits of Hostera
- **When** the visitor reviews them
- **Then** the visitor learns that Hostera coordinates occupancy, room readiness, inventory, and guest access across every property with consistent operational information.

### Scenario: The visitor reviews specific benefits

- **Given** the visitor looks for examples of those benefits
- **When** the visitor reviews them
- **Then** the visitor finds RFID guest access designed for hospitality, centralized inventory by property with automatic flagging of critical shortages, and access controls that give staff access only to the properties they need.

### Scenario: The visitor learns how to start operating

- **Given** the visitor wants to know how a hotel starts using Hostera
- **When** the visitor reviews the operating flow
- **Then** the visitor learns the four steps: add hotels and define their rooms, set up the team and assign access by role, connect RFID readers and configure inventory workflows, and manage reservations, room status, access, and stock from one place.

---

## US006: Compare plans and choose a next step

As a visitor, I want to compare the plans and understand the available next steps, including the open Hotel group / Enterprise commercial option, so that I can choose the path that matches my operating scale.

### Scenario: The visitor compares the plans by operating scale

- **Given** the visitor wants to compare the available plans
- **When** the visitor reviews the pricing information
- **Then** the visitor finds Starter for one property with up to 10 rooms at S/39 per property per month, Professional for chains with 2 to 5 locations at S/8 per room per month, and Enterprise for large or multinational hotel groups, each with its included capabilities.

### Scenario: The visitor reviews the Enterprise conditions

- **Given** the visitor manages a large or multi-country hotel group
- **When** the visitor evaluates the Enterprise plan
- **Then** the visitor learns that it includes unlimited locations and RFID readers, an open API for PMS integrations, dedicated onboarding, unlimited users and roles, a guaranteed availability SLA, and dedicated 24/7 support, and that it is requested through the sales team.

### Scenario: Each plan leads to its next step

- **Given** the visitor has chosen a plan
- **When** the visitor decides to continue
- **Then** Starter and Professional lead to the information of each plan, and Enterprise leads to the sales contact.

### Scenario: The visitor contacts the sales team

- **Given** a visitor from a hotel group wants to talk to sales
- **When** the visitor sends their name, the hotel or group they represent, and a message
- **Then** the request is registered and the visitor is informed that a Hostera teammate will follow up.

### Scenario: The visitor leaves a sales request incomplete

- **Given** the visitor wants to contact the sales team
- **When** the visitor tries to send the request without the name, the hotel or group, or the message
- **Then** the request is not sent and the visitor is asked to complete the missing information.

### Scenario: The visitor decides after reviewing all the content

- **Given** the visitor has reviewed the information of Hostera
- **When** the visitor is ready to choose
- **Then** the visitor can continue with the Starter plan or contact the sales team.

---

## US007: Explore product, team, and support content

As a visitor, I want product, team, and support information about Hostera, so that I can learn more before choosing a plan.

### Scenario: The visitor watches the product presentation

- **Given** the visitor wants to understand how Hostera operates
- **When** the visitor requests the product presentation
- **Then** the system provides the product video explaining how Hostera works in daily hotel operations.

### Scenario: The visitor watches the team presentation

- **Given** the visitor wants to know who is building Hostera
- **When** the visitor requests the team presentation
- **Then** the system provides the team video explaining who builds Hostera and the reasons behind the product.

### Scenario: The visitor identifies the engineering team

- **Given** the visitor wants to know the people behind Hostera
- **When** the visitor reviews the team information
- **Then** the visitor identifies Mateo Condori, Joaquin Cuba, Darnell Cuba, Juan Flores, and José Santana as software engineers, with a short description of each person's contribution.

### Scenario: The visitor resolves questions before choosing a plan

- **Given** the visitor has questions about the service
- **When** the visitor consults the frequently asked questions
- **Then** the visitor finds answers about starting with one hotel, what changes with Professional, and the availability of Hostera in English and Latin American Spanish.

---

## US008: Consult Hostera information in English or Spanish

As a visitor, I want to choose English or Spanish, so that I can understand Hostera information in the language I understand best.

### Scenario: The visitor chooses the language

- **Given** a visitor prefers to read in English or in Spanish
- **When** the visitor chooses that language
- **Then** the topics, value proposition, options by operating scale, plans, next steps, and support content are presented in the selected language.

### Scenario: The Spanish variant preserves the offer

- **Given** the visitor consults Hostera information in Spanish
- **When** the visitor reviews the options and plans
- **Then** the visitor finds the options “Hotel independiente”, “Cadena hotelera pequeña”, and “Grupo hotelero”, and the plans “Starter”, “Profesional”, and “Empresarial”, with the same prices and conditions as the English variant.

### Scenario: The visitor changes language at any moment

- **Given** the visitor is reading either language variant
- **When** the visitor chooses the other language
- **Then** the content the visitor was consulting is presented in the newly selected language.
