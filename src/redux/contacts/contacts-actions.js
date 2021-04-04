import { createAction } from "@reduxjs/toolkit";

export const ADDCONTACT = createAction("contacts/addContact");

export const DELETECONTACT = createAction("contacts/deleteContact");

export const FILTERCHANGE = createAction("contacts/filterChange");
