Console.WriteLine("Digite seu nome:");
string nome = Console.ReadLine();

string nomeReverso = new string(nome.Reverse().ToArray());
int nomeQtd = nome.Length;

Console.WriteLine("Nome reverso: " + nomeReverso + " e quantidade de letras: " + nomeQtd);