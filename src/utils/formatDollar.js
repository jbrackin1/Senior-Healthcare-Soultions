/** @format */

export const formatDollar = (amount) => {
	return amount !== undefined && amount !== null ? `$${amount}` : "N/A";
};
