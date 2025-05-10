/** @format */

//src/utils/formatters/formatDrugRxCuis.js

export const formatDrugRxCuis = (drugRxCuis) => {
	return Array.isArray(drugRxCuis) ? drugRxCuis.join(",") : drugRxCuis;
};
