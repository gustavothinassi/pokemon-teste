export function extractEvolutionNumber(url: string): string {
    const match = url.match(/\/(\d+)\/$/);
    return match ? match[1] : '';
}