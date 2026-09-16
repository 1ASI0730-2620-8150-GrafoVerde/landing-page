# User Stories

**Author**: Grafo Verde Web Applications Developer Team

**License**: See [LICENSE.md](../LICENSE.md) for details.

## Requirements Traceability Matrix (RTM)

| Story ID | User Story Title | Bounded Context(s) | Domain Components | Architectural Decisions |
|---|---|---|---|---|
| US001 | Understand the hotel-operations proposition | None | None | None |
| US002 | Navigate the Landing Page sections and footer | None | None | None |
| US003 | Find the independent-hotel path | None | None | None |
| US004 | Find the small-chain path | None | None | None |
| US005 | Understand the product benefits and operating flow | None | None | None |
| US006 | Compare plans and choose a next step | None | None | None |
| US007 | Explore product, team, and support content | None | None | None |
| US008 | Use the English and Spanish Landing Page variants | None | None | None |

---

## US001: Understand the hotel-operations proposition

As a visitor, I want to understand what Hostera offers for hotel operations, so that I can decide whether the Landing Page is relevant to my hotel.

### Scenario: The hero states the product proposition

- **Given** the visitor opens the Landing Page
- **When** the visitor reads the hero section
- **Then** the page presents the message “HOTEL OPERATIONS, CONNECTED” and the proposition “Run your whole hotel operation from one place.”

### Scenario: The hero names the covered operational areas

- **Given** the visitor is reading the hero description
- **When** the visitor reviews the supporting text
- **Then** the page identifies reservations, rooms, inventory, and access across every property.

### Scenario: The hero CTA opens the Free experience entry point

- **Given** the visitor is viewing the hero section
- **When** the visitor selects “Start for free”
- **Then** the page takes the visitor to the entry point for starting the Free experience.

### Scenario: The dashboard preview summarizes hotel operations

- **Given** the visitor is viewing the dashboard preview in the hero section
- **When** the visitor reviews the preview
- **Then** the Landing Page presents an informational overview of reservations, room status, inventory, and access rather than an interactive dashboard.

### Scenario: The page explains the problem and solution

- **Given** the visitor continues through the Landing Page
- **When** the visitor reaches the problem-and-solution section
- **Then** the page explains that hotel operations break when information is kept in different places and presents Hostera as connecting reservations, rooms, inventory, and guest access.

## US002: Navigate the Landing Page sections and footer

As a visitor, I want clearly labeled navigation, so that I can find the Landing Page content and understand the available next steps.

### Scenario: The header exposes the primary navigation labels

- **Given** the visitor is at the top of the English Landing Page
- **When** the visitor reviews the header
- **Then** the page exposes the labels “Solutions”, “Features”, “Pricing”, “Product”, and “About”, together with the “EN / ES” language control and the “Start for free” CTA.

### Scenario: The footer exposes the secondary navigation and legal entry

- **Given** the visitor reaches the footer
- **When** the visitor reviews the available links and labels
- **Then** the page exposes “Solutions”, “Benefits”, “Pricing”, “Product”, “About”, “Support”, “Terms and Conditions”, and an “EN / ES” language control.

### Scenario: The footer identifies the publisher

- **Given** the visitor reviews the footer
- **When** the visitor reads the supporting information
- **Then** the page identifies Hostera with the statement “Hotel operations, connected.” and shows the copyright notice for Grafo Verde.

### Scenario: Header navigation takes the visitor to the selected section

- **Given** the visitor is viewing the Landing Page
- **When** the visitor selects “Solutions”, “Features”, “Pricing”, “Product”, or “About” in the header
- **Then** the page takes the visitor to the corresponding Landing Page section.

### Scenario: Footer navigation takes the visitor to the selected destination

- **Given** the visitor is viewing the footer
- **When** the visitor selects “Solutions”, “Benefits”, “Pricing”, “Product”, “About”, or “Support”
- **Then** the page takes the visitor to the corresponding Landing Page section.

### Scenario: The legal link opens the terms content

- **Given** the visitor is viewing the footer
- **When** the visitor selects “Terms and Conditions”
- **Then** the page opens the service terms content.

## US003: Find the independent-hotel path

As an independent hotel administrator or owner, I want a path for one property with up to 10 rooms, so that I can identify the entry point intended for my operation.

### Scenario: The independent-hotel pathway is distinct

- **Given** the visitor operates one independent hotel with up to 10 rooms
- **When** the visitor reaches the target-segments section
- **Then** the page presents “1 PROPERTY · UP TO 10 ROOMS”, the title “Independent hotel”, and a description about starting with reservations, availability, and room operations in one place.

### Scenario: The independent-hotel CTA is visible

- **Given** the independent-hotel pathway is visible
- **When** the visitor looks for the next action
- **Then** the page presents the “Start for free” CTA for that pathway.

### Scenario: The free-plan content supports the independent-hotel path

- **Given** the visitor evaluates the Free plan
- **When** the visitor reads its plan details
- **Then** the page states that the plan is for one property with up to 10 rooms and lists basic reservations and availability, warehouse without automatic alerts, one simulated RFID reader, one administrator, and community and documentation support.

### Scenario: The independent-hotel CTA opens the appropriate entry point

- **Given** the visitor is viewing the independent-hotel pathway
- **When** the visitor selects “Start for free”
- **Then** the page takes the visitor to the entry point for starting the Free experience for an independent hotel.

## US004: Find the small-chain path

As a small-chain hotel operations manager, I want a path for coordinating 2 to 5 locations, so that I can identify the plan and next step intended for a multi-property operation.

### Scenario: The small-chain pathway is distinct

- **Given** the visitor is responsible for a small chain with 2 to 5 locations
- **When** the visitor reaches the target-segments section
- **Then** the page presents “2-5 LOCATIONS”, the title “Small hotel chain”, and a description about coordinating rooms, stock, and reports across every property.

### Scenario: The small-chain CTA identifies the Professional path

- **Given** the small-chain pathway is visible
- **When** the visitor looks for the next action
- **Then** the page presents the “Explore Professional” CTA.

### Scenario: The Professional plan content supports the small-chain path

- **Given** the visitor evaluates the Professional plan
- **When** the visitor reads its plan details
- **Then** the page states that the plan is for hotel chains with 2 to 5 locations and lists unlimited rooms across locations, automatic critical-stock alerts, up to 25 RFID readers, reports by location, five administrators with roles, and priority chat and email support.

### Scenario: The small-chain CTA opens the appropriate entry point

- **Given** the visitor is viewing the small-chain pathway
- **When** the visitor selects “Explore Professional”
- **Then** the page takes the visitor to the entry point for evaluating the Professional experience for a small hotel chain.

## US005: Understand the product benefits and operating flow

As a visitor, I want to understand the benefits and the high-level operating flow described by Hostera, so that I can relate the proposition to hotel work.

### Scenario: The benefits section summarizes connected daily operations

- **Given** the visitor reaches the benefits section
- **When** the visitor reads its heading and supporting copy
- **Then** the page describes daily operations connected across every property and names occupancy, room readiness, inventory, and guest access.

### Scenario: The page presents the evidenced benefit examples

- **Given** the visitor reviews the benefit examples
- **When** the visitor reads the benefit cards
- **Then** the page presents “Centralized inventory” with critical-shortage flagging and “Access controls by property” with staff access limited to the properties they need.

### Scenario: The page presents the four-step operating flow

- **Given** the visitor reaches “How Hostera works”
- **When** the visitor reviews the sequence
- **Then** the page presents four steps: “Add hotels”, “Set up your team”, “Connect systems”, and “Run operations”.

### Scenario: Each workflow step has supporting content

- **Given** the visitor reads the four workflow steps
- **When** the visitor reviews their descriptions
- **Then** the page explains defining rooms, inviting staff and assigning access by role, pairing RFID readers and configuring inventory workflows, and managing reservations, room status, access, and stock from one place.

## US006: Compare plans and choose a next step

As a visitor, I want to compare the plans and see clear next actions, including the open Hotel group / Enterprise commercial option, so that I can choose the path that matches my operating scale.

The Hotel group / Enterprise option is an open commercial pathway for larger or multi-country operations, not a third validated target segment.

### Scenario: The pricing section shows the operating-scale options

- **Given** the visitor reaches the pricing section
- **When** the visitor reviews the plan comparison
- **Then** the page presents the “Free”, “Professional”, and “Enterprise” plans with descriptions and capability lists.

### Scenario: Each plan has a distinct CTA

- **Given** the visitor reviews the plan cards
- **When** the visitor looks for an action on each card
- **Then** the Free plan presents “Start for free”, the Professional plan presents “Explore Professional”, and the Enterprise plan presents “Talk to sales”.

### Scenario: The larger hotel-group option is presented as a commercial pathway

- **Given** the visitor is evaluating a larger or multi-country hotel operation
- **When** the visitor reviews the segment pathways and plan comparison
- **Then** the page presents the “Hotel group” pathway, the “Enterprise” plan, and “Talk to sales” as the next step.

### Scenario: The Enterprise CTA opens the sales next step

- **Given** the visitor is viewing the Enterprise plan
- **When** the visitor selects “Talk to sales”
- **Then** the page opens the sales contact next step for the larger hotel-group offering.

### Scenario: The closing panel repeats the available next steps

- **Given** the visitor reaches the closing section
- **When** the visitor reviews the action group
- **Then** the page presents “Start for free” and “Talk to sales” alongside the message “Bring every property into one view.”

### Scenario: A plan CTA takes the visitor to its next step

- **Given** the visitor is viewing a plan card
- **When** the visitor selects a plan CTA
- **Then** the page takes the visitor to the next step associated with that plan, such as starting the Free experience, evaluating Professional, or contacting sales.

## US007: Explore product, team, and support content

As a visitor, I want product, team, and support information in the Landing Page, so that I can learn more before choosing a plan.

### Scenario: The product discovery area exposes a video entry point

- **Given** the visitor reaches the product section
- **When** the visitor reviews the product media area
- **Then** the page presents a play control, “Discover Hostera”, and “See how it works in daily hotel operations”.

### Scenario: The team area exposes a team-video entry point

- **Given** the visitor reaches the team section
- **When** the visitor reviews the team media area
- **Then** the page presents a play control, “Meet the team”, and “Discover who is building Hostera and why”.

### Scenario: The team section identifies the engineering team

- **Given** the visitor reviews the team section below the media area
- **When** the visitor reads the team cards
- **Then** the page identifies Mateo Condori, Joaquin Cuba, Darnell Cuba, Juan Flores, and José Santana as software engineers and provides a short contribution description for each.

### Scenario: The support area answers the evidenced questions

- **Given** the visitor reaches the support area
- **When** the visitor reviews the FAQ list
- **Then** the page provides answers about starting with one hotel, what changes with Professional, and availability in English and Spanish.

### Scenario: A collapsed FAQ question reveals its answer

- **Given** an FAQ question is collapsed
- **When** the visitor selects the question or its expand control
- **Then** the question expands and its answer becomes visible.

### Scenario: An expanded FAQ question collapses again

- **Given** an FAQ question is expanded and its answer is visible
- **When** the visitor selects the question or its collapse control again
- **Then** the answer is hidden and the question returns to its collapsed state.

### Scenario: The product video control starts product discovery

- **Given** the visitor is viewing the product media area
- **When** the visitor activates the play control
- **Then** the product video starts and presents the daily hotel-operations demonstration.

### Scenario: The team video control starts team discovery

- **Given** the visitor is viewing the team media area
- **When** the visitor activates the play control
- **Then** the team video starts and presents the team and its work.

## US008: Use the English and Spanish Landing Page variants

As a visitor, I want to choose English or Spanish, so that I can read the Landing Page in the language I understand best.

### Scenario: The English variant exposes the language control

- **Given** the visitor opens the English Landing Page
- **When** the visitor reviews the header or footer
- **Then** the page exposes the “EN / ES” language control and English navigation labels and CTAs.

### Scenario: The Spanish variant localizes the visitor-facing content

- **Given** the visitor opens the Spanish Landing Page variant
- **When** the visitor reviews the header, hero, segment paths, plans, and footer
- **Then** the page presents Spanish labels such as “Soluciones”, “Funciones”, “Precios”, “Producto”, “Nosotros”, “Comenzar gratis”, and “Hablar con ventas”.

### Scenario: The Spanish variant preserves the two target paths

- **Given** the visitor is reading the Spanish variant
- **When** the visitor reaches the segment pathways
- **Then** the page presents “Hotel independiente” for one hotel with up to 10 rooms and “Cadena hotelera pequeña” for 2 to 5 hotels, with “Comenzar gratis” and “Ver plan Profesional” respectively.

### Scenario: Changing language presents the selected localized content

- **Given** the visitor is viewing either supported language variant
- **When** the visitor selects the language control and chooses English or Spanish
- **Then** the page presents the selected localized navigation, content, segment paths, plans, and calls-to-action.
