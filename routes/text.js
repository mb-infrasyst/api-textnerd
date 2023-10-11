"use strict";
const express = require("express");

const router = express.Router();

const validate = require("../middleware/validateRequests.js");
const textSchema = require("../validators/text-schema.js");

//* all routes in here starts with '/api' '/api/v1.0' '/api/v1'

// text UPPERCASE
router.post("/uppercase", validate(textSchema), async (req, res) => {
  console.log("--");
  console.log("POST: uppercase");
  console.log(req.headers);
  const { inputText } = req.body;
  const uppercase = (inputText) => inputText.toUpperCase();

  try {
    const uppercaseText = await uppercase(inputText);
    const uppercaseTextLength = uppercaseText.length;
    const uppercaseWordCount = uppercaseText.split(" ").length;
    const uppercaseSentenceCount = uppercaseText.split(/[.!?]/).length - 1;
    const uppercaseParagraphCount = uppercaseText.split(/\n\n/).length;
    const uppercaseSpaceCount = uppercaseText.split(" ").length - 1;
    const response = {
      inputText: inputText,
      uppercaseText: uppercaseText,
      uppercaseTextLenght: uppercaseTextLength,
      uppercaseWordCount: uppercaseWordCount,
      uppercaseSentenceCount: uppercaseSentenceCount,
      uppercaseParagraphCount: uppercaseParagraphCount,
      uppercaseSpaceCount: uppercaseSpaceCount,
    };
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

// text lowercase
router.post("/lowercase", validate(textSchema), async (req, res) => {
  console.log("--");
  console.log("POST: lowercase");
  const { inputText } = req.body;
  const lowercase = (inputText) => inputText.toLowerCase();
  try {
    const lowercaseText = await lowercase(inputText);
    const lowercaseTextLength = lowercaseText.length;
    const lowercaseWordCount = lowercaseText.split(" ").length;
    const lowercaseSentenceCount = lowercaseText.split(/[.!?]/).length - 1;
    const lowercaseParagraphCount = lowercaseText.split(/\n\n/).length;
    const lowercaseSpaceCount = lowercaseText.split(" ").length - 1;
    const response = {
      inputText: inputText,
      lowercaseText: lowercaseText,
      lowercaseTextLenght: lowercaseTextLength,
      lowercaseWordCount: lowercaseWordCount,
      lowercaseSentenceCount: lowercaseSentenceCount,
      lowercaseParagraphCount: lowercaseParagraphCount,
      lowercaseSpaceCount: lowercaseSpaceCount,
    };
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

// text Capcase
router.post("/capcase", validate(textSchema), async (req, res) => {
  console.log("--");
  console.log("POST: capcase");
  const { inputText } = req.body;
  try {
    let sentence = inputText.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    const capcaseText = await sentence.join(" ");
    const capcaseTextLength = capcaseText.length;
    const capcaseWordCount = capcaseText.split(" ").length;
    const capcaseSentenceCount = capcaseText.split(/[.!?]/).length - 1;
    const capcaseParagraphCount = capcaseText.split(/\n\n/).length;
    const capcaseSpaceCount = capcaseText.split(" ").length - 1;
    const response = {
      inputText: inputText,
      capcaseText: capcaseText,
      capcaseTextLenght: capcaseTextLength,
      capcaseWordCount: capcaseWordCount,
      capcaseSentenceCount: capcaseSentenceCount,
      capcaseParagraphCount: capcaseParagraphCount,
      capcaseSpaceCount: capcaseSpaceCount,
    };
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

// text AlTeRnAtEcAsE
router.post("/alternatecase", validate(textSchema), async (req, res) => {
  console.log("--");
  console.log("POST: alternatecase");
  const { inputText } = req.body;
  try {
    let sentence = inputText.toLowerCase().split("");
    for (var i = 0; i < sentence.length; i += 2) {
      sentence[i] = sentence[i].toUpperCase();
    }
    const alternatecaseText = sentence.join("");
    const alternatecaseTextLength = alternatecaseText.length;
    const alternatecaseWordCount = alternatecaseText.split(" ").length;
    const alternatecaseSentenceCount = alternatecaseText.split(/[.!?]/).length - 1;
    const alternatecaseParagraphCount = alternatecaseText.split(/\n\n/).length;
    const alternatecaseSpaceCount = alternatecaseText.split(" ").length - 1;
    const response = {
      inputText: inputText,
      alternatecaseText: alternatecaseText,
      alternatecaseTextLenght: alternatecaseTextLength,
      alternatecaseWordCount: alternatecaseWordCount,
      alternatecaseSentenceCount: alternatecaseSentenceCount,
      alternatecaseParagraphCount: alternatecaseParagraphCount,
      alternatecaseSpaceCount: alternatecaseSpaceCount,
    };
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

// text iNvErTeDcAsE
router.post("/invertedcase", validate(textSchema), async (req, res) => {
  console.log("--");
  console.log("POST: invertedcase");
  const { inputText } = req.body;
  try {
    let sentence = inputText;
    const invertedText = sentence.replace(/./g, (c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()));
    const invertedcaseText = invertedText;
    const invertedcaseTextLength = invertedcaseText.length;
    const invertedcaseWordCount = invertedcaseText.split(" ").length;
    const invertedcaseSentenceCount = invertedcaseText.split(/[.!?]/).length - 1;
    const invertedcaseParagraphCount = invertedcaseText.split(/\n\n/).length;
    const invertedcaseSpaceCount = invertedcaseText.split(" ").length - 1;
    const response = {
      inputText: inputText,
      invertedcaseText: invertedcaseText,
      invertedcaseTextLenght: invertedcaseTextLength,
      invertedcaseWordCount: invertedcaseWordCount,
      invertedcaseSentenceCount: invertedcaseSentenceCount,
      invertedcaseParagraphCount: invertedcaseParagraphCount,
      invertedcaseSpaceCount: invertedcaseSpaceCount,
    };
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

// text Sentencecase
router.post("/sentencecase", validate(textSchema), async (req, res) => {
  console.log("--");
  console.log("POST: sentencecase");
  const { inputText } = req.body;
  try {
    let sentence = inputText.toLowerCase();
    let sentenceText = sentence.toString().replace(/(^|\. *)([a-z])/g, function (match, separator, char) {
      return separator + char.toUpperCase();
    });
    const sentencecaseText = sentenceText;
    const sentencecaseTextLength = sentencecaseText.length;
    const sentencecaseWordCount = sentencecaseText.split(" ").length;
    const sentencecaseSentenceCount = sentencecaseText.split(/[.!?]/).length - 1;
    const sentencecaseParagraphCount = sentencecaseText.split(/\n\n/).length;
    const sentencecaseSpaceCount = sentencecaseText.split(" ").length - 1;
    const response = {
      inputText: inputText,
      sentencecaseText: sentencecaseText,
      sentencecaseTextLenght: sentencecaseTextLength,
      sentencecaseWordCount: sentencecaseWordCount,
      sentencecaseSentenceCount: sentencecaseSentenceCount,
      sentencecaseParagraphCoun: sentencecaseParagraphCount,
      sentencecaseSpaceCount: sentencecaseSpaceCount,
    };
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
