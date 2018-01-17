using System;
using System.Collections.Generic;

namespace JSTraining
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Scopes for every block (i.e.: for) in C#");

            var handlers = G();
            foreach (var item in handlers)
            {
                item();
            }

            Console.ReadKey();
        }


        static IEnumerable<Action> G()
        {

            var handlers = new List<Action>();

            for (int i = 0; i < 3; i++)
            {
                var temp = i;
                Action element = () => {  Console.WriteLine(temp); };
                handlers.Add(element);
            }
            return handlers;
        }
    }
}
