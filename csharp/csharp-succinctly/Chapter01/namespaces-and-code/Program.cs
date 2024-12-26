using Syncfusion
using System

using Crypto = System.Security.Cryptography;

namespace NamespaceDemo
{
    class Program
    {
        static void Main()
        {
            double hypotenuse = Calc.Pythagorean(2, 3);
            Crypto.AesManaged aes = new Crypto.AesManaged();


            Console.ReadKey();
        }
    }
}