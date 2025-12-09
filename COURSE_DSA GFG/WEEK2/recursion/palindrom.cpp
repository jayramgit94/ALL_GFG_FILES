#include <iostream>
using namespace std;

bool isPalindrom(string s, int i)
{
  if (i > s.size() / 2)
  {
    return true;
  }
  return s[i] == s[s.size() - i - 1] && isPalindrom(s, i + 1);
}

int main()
{
  string str = "jahaJ";
  if (isPalindrom(str, 0))
    cout << "Yes";
  else
    cout << "NO";
  return 0;
}