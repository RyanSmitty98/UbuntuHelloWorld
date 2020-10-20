test('Does webpage contain Hello World', () => {
    expect(div.text()).to.equal('Hello world!');
  });