import { PigLatinTranslator } from "./challenge4-pig-latin-translator";

describe("Challenge 5: Pig Latin Translator", () => {
  let translator: PigLatinTranslator;

  beforeEach(() => {
    translator = new PigLatinTranslator();
  });

  describe("translateSentence", () => {
    test("should translate simple sentences", () => {
      expect(translator.translateSentence("hello world")).toBe(
        "ellohay orldway"
      );
      expect(translator.translateSentence("I love apples")).toBe(
        "Iway ovelay applesway"
      );
    });

    test("should ignore numbers", () => {
      expect(
        translator.translateSentence("99 bottles of beer on the wall")
      ).toBe("99 ottlesbay ofyay eerbay onyay ethay wall");
    });

    test("should preserve sentence structure", () => {
      expect(translator.translateSentence("Hello, world!")).toBe(
        "Ellohay, orldway!"
      );
      expect(translator.translateSentence("The quick brown fox.")).toBe(
        "Ethay ickquay ownbray oxfay."
      );
    });
  });

  describe("Sentence Translation Complex Cases", () => {
    test("should handle sentences with mixed capitalization", () => {
      expect(translator.translateSentence("Hello WORLD apple")).toBe(
        "Ellohay ORLDWAY appleway"
      );
    });

    test("should handle sentences with various punctuation", () => {
      expect(translator.translateSentence("Hello, world! How are you?")).toBe(
        "Ellohay, orldway! Owhay areway ouyay?"
      );
    });
  });
});
