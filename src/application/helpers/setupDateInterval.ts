export function generateDateInterval(intervalMs?: number): string {
	const interval = intervalMs || 240; // 24 hours * 10 days
	let today = new Date();
	let before = today.setHours(-interval);
	let beforeDate = new Date(before);
	return beforeDate.toISOString();
}
