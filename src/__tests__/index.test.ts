import Person from "../index";
it("should say name", () => {
  const person = new Person();
  expect(person.sayMyName("Gustavo")).toBe("Gustavo");
});
