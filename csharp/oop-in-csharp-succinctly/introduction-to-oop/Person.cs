using System;

// Introduction to OOP
{
    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string GetFullName()
        {
            return FirstName + " " + LastName;
        }
    }

    Person personObject = new Person();
    personObject.FirstName = "Sander";
    personObject.LastName = "Rossel";
    string fullName = personObject.GetFullName();


    // Inheritance

    public class Employee: Person
    {
        public decimal Salary { get; set; }
    }

    Employee employee = new Employee();
    employee.FirstName = "Sander";
    employee.LastName = "Rossel";
    string fullName = employee.GetFullName();
    employee.Salary = 1000000;// I wish! :-) [soon though ;-)]

}

// Method Overriding
{ 
    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public virtual string GetFullName()
        {
            return FirstName + " " + LastName;
        }
    }

    public class Employee : Person
    {
        public decimal Salary { get; set; }
        public override string GetFullName()
        {
            string originalValue = base.GetFullName();
            return LastName + ", " + FirstName;
        }
    }

    //QSTN: what will the following code print ?
    //ANS:  Shoko, Mc Samuel
    Person person = new Employee();
    person.FirstName = "Mc Samuel";
    person.LastName = "Shoko";
    string fullName = person.GetFullName();
    Console.WriteLine(fullName);
    // press any key to quit.
    Console.ReadKey();
}

// Abstract Classes
public abstract class Person
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public abstract string GetFullName();
}

public class Employee: Person
{
    public decimal Salary { get; set; }
    public override string GetFullName()
    {
        return LastName + ", " + FirstName;
    }
}