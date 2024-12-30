using System;
using System.Collections.Generic;

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
            Console.WriteLine($"{nameof(item)}: {item, -10} {nameof(amount)}: {amount:C}");
        }

        // Branching Statements
        {
            decimal priceGain = 2.5m;
            string action2 = "Sell";
            if (priceGain > 2m)
            {
                action2 = "Buy";
            }

            // using an else case
            string action3 = "Do Nothing";
            if (priceGain <= 2m)
            {
                action3 = "Sell";
            }
            else
            {
                action3 = "Buy";
            }

            // adding an if-else clause
            string action4 = null;
            if (priceGain <= 2m)
            {
                action4 = "Sell";
            }
            else if (priceGain > 2m && priceGain < 3m)
            {
                action4 = "Do Nothing";
            }
            else
            {
                action4 = "Sell";
            }

            // switch statement
            string currentWeather = "rain";
            string equipment = null;
            switch (currentWeather)
            {
                case "sunny":
                    equipment = "sunglasses";
                    break;
                case "rain":
                    equipment = "umbrella";
                    break;
                case "cold":

                default:
                    equipment = "jacket";
                    break;
            }

            // Arrays & Collections
            int[] oddNumbers = { 1, 3, 5 };
            int firstOdd = oddNumbers[0];
            int lastOdd = oddNumbers[2];

            string[] names = new string[3];
            names[1] = "Joe";

            // HoW to use a List
            List<decimal> stockPrices = new List<decimal>();
            stockPrices.Add(56.32m);
            stockPrices.Add(73.86m);
            decimal secondStockPrice = stockPrices[1];

            // HoW to use a Stack
            Stack<string> litterBin = new Stack<string>();
            litterBin.Push("paper");
            litterBin.Push("cups");
            litterBin.Push("pencil");
            string topItem = litterBin.Pop();

            // HoW to use a Queue
            Queue<int> scores = new Queue<int>();
            scores.Enqueue(100);
            scores.Enqueue(43);
            scores.Enqueue(8);
            int firstScore = scores.Dequeue();

            // Looping Statements

        }
    }
}
