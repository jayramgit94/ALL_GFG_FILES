#include <iostream>
#include <string>
using namespace std;

void permute(string &str, int l, int r)
{
  if (l == r)
  {
    cout << str << " ";
    return;
  }
  else
  {
    for (int i = l; i <= r; i++)
    {
      swap(str[l], str[i]);
      permute(str, l + 1, r);
      swap(str[l], str[i]);
    }
  }
}

int main()
{
  string str = "RUTUJA";
  permute(str, 0, str.length() - 1);
  return 0;
}

// Auxiliary Space: O(N), , where N is the length of the string.
// Time Complexity: O(N * N!), where N is the length of the string. Note that there are N! permutations and it requires O(N) time to print a permutation.