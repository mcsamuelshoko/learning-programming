using System;

class Greetings
{
    static void Main()
    {
        Console.WriteLine("Greetings!");
        //Console.ReadKey();

        // Expressions & Statements
        {
            // Writing simple statements
            int count = 7;
            char KeyPressed = 'Q';
            string title;
            title = "Weekly Report";

            // explicit conversion
            int total = int.Parse("359");
            string message = 7.ToString();

            // casting
            double preciseLength = 7.09;
            int roundedLength = (int)preciseLength;

            decimal price = 9.95m;
            char cr = '\u0013';

            int crUnicode = (int)cr;

            // operators
            int val1 = 5;
            int val2 = ++val1;
            int val3 = 2;
            int val4 = val3--;

            // ternary operator
            decimal priceGain = 3.5m;
            string action = priceGain > 1m ? "Buy" : "Sell";

            // DateTime built in type
            DateTime currentTime = DateTime.Now;
            string shortDateString = currentTime.ToShortDateString();
            string longDateString = currentTime.ToLongDateString();
            string defaultDateString = currentTime.ToString();
            DateTime tomorrow = currentTime.AddDays(1);

            // Operator Precedence and Associativity
            int result = 4 + 6 + 7;
            int result1 = (4 + 6) + 7;

            // Formatting Strings
            string name = "Joe";
            string helloViaConcatenation = "Hello, " + name + "!";
            Console.WriteLine(helloViaConcatenation);

            string helloViaStringFormat = string.Format("Hello {0}!", name);
            Console.WriteLine(helloViaStringFormat);

            // further, string formatting
            string item = "bread";
            decimal amount = 3.5m;
            Console.WriteLine("{0, -10}{1:C}", item, amount);

            // string interpolation
            Console.WriteLine($"{item}        {amount}");

        }

    }
}
