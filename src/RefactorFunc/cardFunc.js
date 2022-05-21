/* eslint-disable no-return-assign */
export const arrayToPlain = (content, setContent) => {
  let result = '';
  content.map(word => {
    return word.children.map(info => {
      return (result = result.concat(' ', info.text));
    });
  });
  setContent([
    {
      type: 'paragaph',
      children: [{ text: result }],
    },
  ]);
};
