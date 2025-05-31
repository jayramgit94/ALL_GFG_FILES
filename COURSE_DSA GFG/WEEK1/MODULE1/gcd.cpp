#include <iostream>
using namespace std;

int gcd(int a, int b) {
    if (b == 0)
        return a;
    return gcd(b, a % b);
}

int main() {
    int a =3,b=5;
    cout << "GCD of " << a << " and " << b << " is " << gcd(3, 5) << endl;  

    return 0;
}
