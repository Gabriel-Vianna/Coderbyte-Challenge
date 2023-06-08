# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Ticket 1: Update schema in database

Description:
If we want to save a new information in the database, we need first to create a field where this information will be stored. So we need to modify the database table schema to add a new column for saving the id provided by the Facility.

Acceptance Criteria:

Create a new column on the Agent table in the database. This column can be named as 'custom_id'.
The "custom_id" column allows the facility to save and retrieve 'custom_id' for a specific Agent.
The "custom_id" column is a nullable field, so it is not mandatory that Facility create a custom_id.
Expected effort: 6 hours

Implementation Details:

Analyze the existing database schema and identify the appropriate table for adding the "custom_id" column.
Modify the table structure to add the "custom_id" column with an appropriate data type.
Update any relevant data access layers, APIs, and queries to include the new column.
Perform necessary testing to ensure the modification does not affect existing functionality.

## Ticket 2: Update the Facility interface

Description:
Update the Facility interface so it may be able to input the custom_id of their choice.

Acceptance Criteria:

New input text for custom_id is created in the layout of the page where Facility manages its Agents
The existing Agent details view is updated to display the custom_id, if available, if not it displays the internal id from database.
The Facility can edit or remove the custom_id for an Agent.
The custom_id is saved and retrieved correctly from the database.
Expected effort: 8 hours

Implementation Details:

(Optional) A Designer creates the layout modification for the new custom_id input on the Facility interface.
Modify the Agent details layout to display the custom_id, if available, if not available, it displays the internal id from databse.
Add an input field in the Agent management interface to capture custom_ids.
Implement functionality to save and retrieve the custom_id for an Agent from the database.
Implement edit and remove options for the custom_id.
Perform necessary testing to ensure the modification does not affect existing functionality.

## Ticket 3: Report Generation Update

Description:
Update the report generation process to use custom_id when available, instead of the internal database ID.

Acceptance Criteria:

When generating reports, the system checks if a custom_id is available for each Agent.
If a custom_id exists, it is used in the report instead of the internal database ID.
Reports reflect the correct custom_id assigned by Facility.
Expected effort: 6 hours

Implementation Details:

Identify the code modules/functions responsible for report generation.
Implement logic to check if a custom_id is available for each Agent.
Modify the report generation process to use the custom_id, if available, instead of the internal database ID.
Perform necessary testing to ensure the modification does not affect existing functionality
Update relevant documentation regarding the changes made to the report generation process.
