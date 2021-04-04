import { createAction } from "@reduxjs/toolkit";

export const ADDCONTACT = createAction("contacts/addContact");

export const FILTERCHANGE = createAction("contacts/filterChange");

export const DELETECONTACT = createAction("contacts/deleteContact");
