// # Review - Classes

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Create a class called "Component".The constructor for Component should take in one parameter "name".There should be one method called "render" that prints`<p>Component _name_  rendering` where`_name_`  is the provided name.


class Component {
    constructor(name) {
        this.name = name;
    }

    render() {
        console.log(`Component ${this.name}rendering`);
    }

}
const newComponent = new Component("Wassily Kandinsky ");
newComponent.render();


// 2. Create a child class called UserCard that extends Component.The UserCard should take in only one constructor parameter called "user".Expect the user to be an object with "name", "imageUrl" and "email" properties.The UserCard should override the original "render" method.The new render method should print out something like this:

class UserCard extends Component {
    constructor(user) {
        super(user.name);
        this.user = user;
    }
    render() {
        console.log(`
        <div class="card card-user">
    <img class="card-img-top" src="user imageUrl here" alt>
        <div class="card-body">
            <h5 class="card-title">user name here</h5>
            <p class="card-text">To contact, please send a message to</p>
            <a
                href="mailto:user email here"
                class="btn btn-primary"
            >
                user email here
                </a>
        </div>
        </div>
        
        
        `);
    }
}


user = {
    name: "Khushal",
    imageUrl: "https://www.google.com/search?channel=fs&client=ubuntu&q=wikipedia",
    email: "khushal@gmail.com",
};
const newUser = new UserCard(user);
console.log(newUser);
newUser.render();


// 3. Create an array of at least 5 user objects.

const userObject = [
    { name: "James Nader", imageUrl: "https://www.google.com/search?channel=fs&client=ubuntu&q=wikipedia", email: "jamesjames@SpeechGrammarList.com" },
    { name: "May Borer", imageUrl: "https://www.google.com/search?channel=fs&client=ubuntu&q=wikipedia", email: "mayboreer@SpeechGrammarList.com" },
    { name: "Benton Hoppe", imageUrl: "https://www.google.com/search?channel=fs&client=ubuntu&q=wikipedia", email: "benonHoppe@echGrammarList.com" },
    { name: "Candace Wisozk", imageUrl: "https://www.google.com/search?channel=fs&client=ubuntu&q=wikipedia", email: "CanadaWisozka@GrammarList.com" },
    { name: "Adeline Turcotte", imageUrl: "https://www.google.com/search?channel=fs&client=ubuntu&q=wikipedia", email: "Armies@SpeechGrammar.com" },
]
console.log(userObject);
// userObject.forEach(element => console.log(element))


// 4. Using the .map() method, create 5 UserCard instances (objects) based on your users.
const cards = userObject.map(function (user) {
    return new UserCard(user);
});
console.log(cards);

// 5. Using .forEach(), call the render method of your instances.
userObject.forEach(function (i) {
    const newRender = new Component(i.name);
    console.log(newRender.render());
})


// 6. Print the type of the UserCard class.
console.log(typeof UserCard);



// 7. Print the type of a UserCard instance.
const lastUserCard = new UserCard("khushal");
console.log(typeof lastUserCard);

