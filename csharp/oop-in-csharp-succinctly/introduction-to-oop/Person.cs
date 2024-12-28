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