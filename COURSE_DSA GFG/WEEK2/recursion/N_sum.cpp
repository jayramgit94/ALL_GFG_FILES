#include <iostream>
using namespace std;

int Natrual_Num_Sum(int N)
{
  if (N <= 1)
    return N;
  else
  {

    return N + Natrual_Num_Sum(N - 1);
  }
}

int main()
{
  int N = 10;

  cout << Natrual_Num_Sum(N);

  return 0;
}



// Time complexity : O(n)
// Auxiliary space : O(n)

//                       To solve this question,
//                   iterative approach is the better approach because it takes constant or O(1) auxiliary space and the time complexity will be same O(n).