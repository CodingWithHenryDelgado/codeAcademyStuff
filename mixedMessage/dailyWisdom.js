function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

//Motivational Quotes with reminders
const messages = {
    motivationalQuotes: ["Don’t Let Yesterday Take Up Too Much Of Today.", 
    "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.",
    "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",
    "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
    "We May Encounter Many Defeats But We Must Not Be Defeated.",
    "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do."],
    goTalkTo: ['You should call a family member!', 'You should call a friend!', 
    'You should plan out your week!', 'Tell someone you love them',
    'Tell someone you appericate them'],
    reminder: ["Don't forget to brush your teeth!", "Clean up your room!", 
    "Delete some junk mail!", "Do some laundry!", "Read a book!"]
};

let message = [];

//Select a random quote, talkto, reminder
    for(let value in messages){
        let randomVariable = generateRandomNumber(messages[value].length);

        switch(value){
            case 'motivationalQuotes':
                message.push(messages[value][randomVariable]);
                break;
            case 'goTalkTo':
                message.push(messages[value][randomVariable]);
                break;
            case 'reminder':
                message.push(messages[value][randomVariable]);
                break;
            default:
                messages.push('I love you!');
                break;
        }   
    }

function formatWisdom() {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = message.join('\n')
    console.log(formatted)
}

formatWisdom();