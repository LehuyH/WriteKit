import Vue from 'vue'
export const state = new Vue({
  data: {
    title: "Juicy English Essay",
    blocks: [{
        name: "Introduction",
        types: [{
            name: "Broad Statement",
            color: "#fdcb6e",
            desc: "The first sentence of your introduction is the first chance a writer has to capture the attention of the reader. It is important to consider who your reader or audience is before you decide which type of attention grabber you will use for your essay.",
            prompt: "Try to think of what you find most interesting about the topic you are writing about and communicate that to your reader in a sentence or two.",
            starters: [
              "A definition",
              "A quotation or paraphrase",
              "A statement of opinion that you intend to challenge",
              "An interesting incident or anecdote related to your subject",
              "An explanation of why the topic is worth writing/reading about",
              "A question that will be answered by your thesis",
            ],
          },
          {
            name: "Ideas to Introduce Thesis",
            color: "#d63031",
            desc: "A sentence that deals with your specific topic. Getting less broad with each statement",
            prompt: "Discuss the importance of..",
            starters: [],
          },
          {
            name: "Thesis ",
            color: "#fdcb6e",
            desc: `Topic sentences and thesis statements are sentences that writers use to focus their ideas and express the main point of their writing. Help to let the reader know what the purpose or main idea of an essay is \n\n Outline how you will support that main idea \n\nUse a path statement to refer to supporting points you will be using.\n\n A path statement is like a sneak peak at your main supporting ideas. \n\nParagraphs supporting these points in your essay will appear in the same order as they are listed in the path statement.`,
            prompt: "Discuss the importance of..",
            starters: [],
          },
        ],
      },

      {
        name: "Body Paragraph",
        types: [{
            name: "Topic",
            color: "#ffeaa7",
            starters: [
              "This essay discusses",
              "In this essay",
              "Consider",
              "Imagine",
              "Take a moment to",
            ],
            desc: "When creating a topic sentence, ask yourself what‟s going on in your paragraph. Why you chosen to include the information you have? Why is the paragraph important in the context of your argument or thesis statement? What point are your trying to make?",
            prompt: "What is the main idea of the paragraph?",
          },
          {
            name: "Evidence",
            color: "#ff7979",
            starters: ["An example that shows this well"],
            desc: "This is how you support, or back up, your claims. The evidence will help to 'prove' each claim to the reader.",
            prompt: "What evidence proves the claim?",
          },
          {
            name: "Reasoning",
            color: "#ffbe76",
            starters: ["An example that shows this well"],
            desc: "Reasoning is the process for making clear how your evidence supports your claim. In scientific argumentation, clear reasoning includes using scientific ideas or principles to make logical connections to show how the evidence supports the claim.",
            prompt: "How does this evidence support the claim?",
          },
          {
							special: "loop",
							index: 1,
						},
          {
            name: "Conclusion",
            color: "#ffeaa7",
            starters: ["To conclude"],
            desc:
              "End your paragraph with a concluding sentence or sentences that reasserts how your paragraph contributes to the development of your argument as a whole.",
            prompt: "Condlu",
          },
        ],
      },
      {
        name: "Transition",
        types: [{
          name: "Transition Sentence",
          color: "#00b894",
          prompt: "What does the sentence before this one say? How does this sentence relate to that one?",
          starters: [
            "however",
            "additionally",
            "accordingly",
            "admittedly",
            "although",
            "moreover",
            "as a result",
            "above all",
            "conversely",
            "furthermore",
            "because",
            "as a rule",
            "in contrast",
            "as well as",
            "consequently",
            "as usual",
            "instead",
            "another reason",
            "due to",
            "assuredly",
            "in comparison",
            "along with",
            "for this reason",
            "certainly",
            "nevertheless",
            "also",
            "for this purpose",
            "chiefly",
            "whereas",
            "coupled with",
            "hence",
            "especially",
            "yet",
            "correspondingly",
            "otherwise",
            "granted",
            "on the one hand…on the other hand",
            "for example",
            "since",
            "generally speaking",
            "on the contrary",
            "in addition",
            "so then",
            "for the most part",
            "other than",
            "indeed",
            "subsequently",
            "in this situation",
            "outside of",
            "in fact",
            "therefore",
            "no doubt (undoubtedly)",
            "rather",
            "identically",
            "thereupon",
            "obviously",
            "still",
            "likewise",
            "this is why",
            "of course",
            "besides",
            "again",
            "thus",
            "ordinarily",
            "comparatively",
            "similarly",
            "wherefore",
            "particularly",
            "different from",
            "whereas",
            "following this",
            "singularly",
            "even though",
            "likewise",
            "as you can see",
            "unquestionably",
            "otherwise",
            "one other thing",
            "for all of those reasons",
            "usually",
          ],
          desc: "Transition-sentences bring out the logical relation between ideas. Words like 'however', 'so', 'additionally' do indicate a logical relation between paragraphs, but they are weak. ... A strong transition makes the relation explicit.",
        }],
      },
    ],
    document: {metadata:{title: "Juicy English Essay"}, content:[]},
    selected: null,
    typeIndex: 0,
    currentBlockIndex: null,
    special: null,
    selectionIndex:{
      blockIndex: null,
      typeIndex: null,
    },
    menus: {
        selectedBlock: null,
      },
      themes: [{
          name: "default",
          css: ""
        },
        {
          name: "Dark Theme",
          css: "@import url('https://jenil.github.io/bulmaswatch/cyborg/bulmaswatch.min.css'); :root { --light: #2C2F33; }"
        },
        {
          name: "Purple",
          css: "@import url('https://jenil.github.io/bulmaswatch/pulse/bulmaswatch.min.css'); .writing-pane{background: url('https://w.wallhaven.cc/full/4y/wallhaven-4y1rmx.jpg');background-repeat:no-repeat;background-position:center;background-size:cover;"
        },
        {
          name: "Lux",
          css: "@import url('https://jenil.github.io/bulmaswatch/lux/bulmaswatch.min.css');"
        },
        {
          name: "Minty",
          css: "@import url('https://jenil.github.io/bulmaswatch/minty/bulmaswatch.min.css');"
        },
        {
          name: "Senko",
          css:".writing-pane{background: url('https://c4.wallpaperflare.com/wallpaper/584/644/901/anime-anime-girls-sewayaki-kitsune-no-senko-san-hd-wallpaper-preview.jpg');background-repeat:no-repeat;background-position:center;background-size:cover;"
        }
      ],
    settings: {
      borders: false,
      templateOpen: false,
      box: false,
      tooltip: false,

    }
  }
});

export default state