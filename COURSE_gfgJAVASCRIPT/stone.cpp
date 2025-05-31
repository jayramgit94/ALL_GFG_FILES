#include <iostream>
#include <cstdlib> // For rand() and srand()
#include <ctime>   // For time()

using namespace std;

// Function to get the choice name
string getChoiceName(int choice)
{
    if (choice == 1)
        return "Rock";
    else if (choice == 2)
        return "Paper";
    else
        return "Scissors";
}

int main()
{
    int userChoice, computerChoice;
    srand(time(0)); // Seed for random number generation

    // Display choices
    cout << "\nStone Paper Scissors Game";
    cout << "\n1. Rock";
    cout << "\n2. Paper";
    cout << "\n3. Scissors";
    cout << "\nEnter your choice (1-3): ";
    cin >> userChoice;

    // Input validation
    if (userChoice < 1 || userChoice > 3)
    {
        cout << "Invalid choice! Please enter a number between 1 and 3.";
        return 1;
    }

    // Computer randomly selects a choice
    computerChoice = (rand() % 3) + 1;

    // Display choices
    cout << "\nYou chose: " << getChoiceName(userChoice);
    cout << "\nComputer chose: " << getChoiceName(computerChoice) << "\n";

    // Game result logic
    if (userChoice == computerChoice)
    {
        cout << "It's a tie!\n";
    }
    else if ((userChoice == 1 && computerChoice == 3) ||
             (userChoice == 2 && computerChoice == 1) ||
             (userChoice == 3 && computerChoice == 2))
    {
        cout << "You win!\n";
    }
    else
    {
        cout << "Computer wins!\n";
    }

    return 0;
}
