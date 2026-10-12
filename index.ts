
function maxSum(nums: number[], k: number): number {
    const MOD = 1000000007n;
    const bitCount = new Array(31).fill(0);

    // Count occurrences of each bit
    for (const num of nums) {
        for (let bit = 0; bit < 31; bit++) {
            if ((num & (1 << bit)) !== 0) {
                bitCount[bit]++;
            }
        }
    }

    let result = 0n;

    // Build k maximum values greedily
    for (let i = 0; i < k; i++) {
        let value = 0n;

        for (let bit = 30; bit >= 0; bit--) {
            if (bitCount[bit] > 0) {
                value |= (1n << BigInt(bit));
                bitCount[bit]--;
            }
        }

        result = (result + value * value) % MOD;
    }

    return Number(result);
}
