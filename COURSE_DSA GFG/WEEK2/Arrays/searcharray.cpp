#include <iostream>
#include <vector>
using namespace std;

int search(int arr[], int n , int x ){
    for(int i = 0; i<n; i++){
        if(arr[i] == x){
            return i;
        }
    }
}

int main(){
    int arr[] = {1, 2, 3,5,6,7,9, 4, 5};
    int n = sizeof(arr)/sizeof(arr[0]);
    int x = 3;
    int result = search(arr, n, x);
    if(result == -1){
        cout << "Element not found" << endl;
    }else{
        cout << "Element found at index: " << result << endl;
    }
    return 0;
}
// Time Complexity: O(n)
// Space Complexity: O(1)