// class prompt {
//     constructor(menuTitle, headerText, captionText, aiPrompt){
//         this.menuTitle = menuTitle;
//         this.headerText = headerText;
//         this.captionText = captionText;
//         this.aiPrompt = aiPrompt;
//     }
// }


let prompts = [];

// sensationalist story
prompts.push({
    menuTitle: "Sensationalist Story",
    headerText: "Sensationalist Story Generator",
    captionText: "enter story idea",
    aiPrompt: `Prompt: create a sensationalist but light-hearted headline and story in the style of a tabloid from the following the following input.
                input: `
})


prompts.push({
    menuTitle: "AI Significant Other",
    headerText: "AI Significant Other",
    captionText: "have a chat with your AI Significant Other",
    aiPrompt: `Prompt: respond to the following input as a significant other. Randomly decide whether the response will be a little bit playful or flirty.
                input: `

})


// console.log(prompts)
// console.log(prompts[0].menuTitle)
// console.log(prompts[0].headerText)
// console.log(prompts[0].captionText)
// console.log(prompts[0].aiPrompt)

let current = prompts.find(element => element.menuTitle == "AI Significant Other" )
console.log(current.headerText)
console.log(current.captionText)