// Question 8:
// The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.
// const phoneBookABC = new Map() //an empty map to begin with
// phoneBookABC.set('Annabelle', '0412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0455221182')
// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// b) Initialize the contents of phoneBookDEF by passing in an array of keys/values
// c) Update the phone number for Caroline
// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map
// e) Combine the contents of the two individual Maps into a single phoneBook Map
// f) Print out the full list of names in the combined phone book

const phoneBookABC = new Map()
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const defContacts = [  
    ['Sean', '7777777771'],
    ['Lyle', '7777777772'],
    ['Monique', '7777777773']
]

const phoneBookDEF = new Map(defContacts)
phoneBookABC.set('Caroline', '7777777777')

function printPhoneBook(contacts) {
    contacts.forEach((contact, pnumber) => {
        console.log(`${pnumber}: ${contact}`)
    })
}

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF])

printPhoneBook(phoneBook)