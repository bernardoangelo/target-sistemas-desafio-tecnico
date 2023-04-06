#include <iostream>
#include <string>

using namespace std;

int main()
{
    string stringAntiga = "Olá, TargetSistemas!";
    stringAntiga novaString = "";

    for (int i = stringAntiga.length() - 1; i >= 0; i--)
    {
        novaString += stringAntiga[i];
    }

    cout << novaString << endl;
    return 0;
}
