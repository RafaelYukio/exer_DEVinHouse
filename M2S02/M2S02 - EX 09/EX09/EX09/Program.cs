int seleciona;
int fatias = 0;

do
{
    Console.WriteLine("Qual fatia de pizza quer? 1 - Mussarela; 2 - Calabresa; 3 - Queijo");
    seleciona = int.Parse(Console.ReadLine());
    
}
while (seleciona < 0 || seleciona > 3);

do
{
    Console.WriteLine("Qual fatia de pizza quer? 1 - Mussarela; 2 - Calabresa; 3 - Queijo; 4 - Estou satisfeito");
    seleciona = int.Parse(Console.ReadLine());

    fatias++;
}
while (seleciona != 4);

Console.WriteLine($"Voce comeu: {fatias} fatias");