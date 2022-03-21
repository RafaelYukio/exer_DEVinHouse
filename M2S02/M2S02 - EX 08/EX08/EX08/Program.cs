string valor;
int valorInt;
int fatorial = 1;
bool validaNumero;
bool validaMaiorMenor = false;

do
{
    Console.WriteLine("Digite um número de 0 a 10");
    valor = Console.ReadLine();

    validaNumero = int.TryParse(valor, out valorInt);

    if (validaNumero)
    {
        if (valorInt >= 0 && valorInt <= 10)
        {
            validaMaiorMenor = true;
        }
    }

} while (validaMaiorMenor == false);

for (int n = 1; n <= valorInt; n++)
{
    fatorial *= n;
}

Console.WriteLine(fatorial);