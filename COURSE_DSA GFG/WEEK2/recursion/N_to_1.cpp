#include <iostream>
using namespace std;

// void reverse(int N)
// {
//   for (int i = N; i > 0; i --)
//     cout << i << " ";
// }

void One_to_N(int N)
{
  if (N > 0)
  {
    One_to_N(N - 1);
    cout << N << " ";
  }
  cout << " " << endl;
}

void N_to_1(int N)
{

  if (N <= 0)
  {
    return;
  }
  else

    cout << N << " ";

  return N_to_1(N - 1);
}

int main()
{
  int N = 10;
  N_to_1(N);
  One_to_N(N);

  return 0;
}