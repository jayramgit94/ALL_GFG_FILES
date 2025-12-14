#include<iostream>
#include<vector>
using namespace std;

class Solution
{
public:
  void rotateArr(vector<int> &arr, int d)
  {
    int n = arr.size();
    if (n == 0)
      return;

    // Handle large d
    d = d % n;

    // Reverse first d elements
    reverse(arr.begin(), arr.begin() + d);

    // Reverse remaining elements
    reverse(arr.begin() + d, arr.end());

    // Reverse whole array
    reverse(arr.begin(), arr.end());
  }
};

int main()
{
    
    return 0;
}