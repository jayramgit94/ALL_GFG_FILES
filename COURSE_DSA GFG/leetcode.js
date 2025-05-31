// Function to check if a number is a punishment number
function isPunishmentNumber(n) {
    let squareStr = (n * n).toString(); // Convert n^2 to a string

    // Recursive function to check possible splits
    function canPartition(index, currentSum) {
        // Base case: If we reach the end of the string
        if (index === squareStr.length) {
            return currentSum === n; // Check if sum matches n
        }

        let num = 0;

        // Try different partitions from index to end
        for (let i = index; i < squareStr.length; i++) {
            num = num * 10 + parseInt(squareStr[i]); // Form number step by step

            if (canPartition(i + 1, currentSum + num)) {
                return true; // If any partitioning works, return true
            }
        }

        return false; // No valid split found
    }

    return canPartition(0, 0); // Start recursion from index 0 and sum 0
}

// Function to find all punishment numbers up to a given limit
function findPunishmentNumbers(limit) {
    let punishmentNumbers = [];
    
    for (let i = 1; i <= limit; i++) {
        if (isPunishmentNumber(i)) {
            punishmentNumbers.push(i);
        }
    }

    return punishmentNumbers;
}

// Test the function
console.log(findPunishmentNumbers(100)); // Find punishment numbers up to 100
