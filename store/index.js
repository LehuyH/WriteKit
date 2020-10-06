export const state = () => ({
    title: "Juicy English Essay",
    blocks: {
        "Introduction": {
            prompt: "Present your thesis, lead in to your main points.",
            tips: [
                "Try staring with a quote, data points, or fact.",
                "Make sure to add a bridge between your hook and thesis.",
                "Be certain that your thesis clearly conveys your main points."
            ],
            theme: "orange"
        },
        "Body Paragraph": {
            prompt: "State a main point, back it with evidence, and explain.",
            tips: [
                "Follow a pattern of evidence-reasoning-repeat.",
                "Add a topic sentence to concisely summarize your main point.",
                "In your conclusion sentence, list your evidence and connect it to the main point."
            ],
            theme: "cornflowerblue"
        },
        "Conclusion": {
            prompt: "A reverse-introduction, paraphrased thesis, end with a powerful lead-out.",
            tips: [
                "Try leading out with a quote, scene, or QED-type sentence.",
                "Shortest paragraph of all, simply a thesis and a lead-out sentence(s)"
            ],
            theme: "hotpink"
        },
        "Transition": {
            prompt: "Smoothen your writing's flow with lead-in/out words signifying a change.",
            tips: [
                "Examples: https://owl.purdue.edu/engagement/ged_preparation/part_1_lessons_1_4/transitions.html"
            ],
            theme: "green"
        }
    },
    document: []
});
export const mutations = {
    updateDocument: (state, document) => state.document = document,
    updateTitle: (state, title) => state.title = title
};
