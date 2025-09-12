import { visit } from 'unist-util-visit';
import type {
  Parent,
  Text,
  Paragraph,
  Root,
  PhrasingContent,
  Node,
  RootContent,
} from 'mdast';
import './styles.css';
import { toString } from 'mdast-util-to-string';

interface CustomNode extends Node {
  type: 'customNode';
}

declare module 'mdast' {
  interface RootContentMap {
    myCustomNode: CustomNode;
  }
}

export function remarkEngverse() {
  return [myPlugin0, myPlugin1];
}

// ----------------------------------------------------------- //
export const myPlugin0 = () => (tree: Root) => {
  visit(tree, 'paragraph', (node: Node, index?: number, parent?: Parent) => {
    if (!isParent(node)) return;
    const firstText = node.children[0];

    if (!parent || !isText(firstText)) return;

    if (
      toString(firstText).startsWith('[DANGER]') ||
      toString(firstText).startsWith('[SUCCESS]')
    ) {
      const prefix = toString(firstText).startsWith('[DANGER]')
        ? '[DANGER]'
        : '[SUCCESS]';
      const arr = findTextNodes(node, '//');
      if (!arr || !Array.isArray(arr)) return;

      const customNode: Paragraph = {
        type: 'paragraph',
        children: [
          {
            ...firstText,
            value: firstText.value.replace(prefix, '').trim(),
            data: {
              hName: 'p',
              hProperties: {
                className:
                  prefix === '[DANGER]' ? 'danger-title' : 'success-title',
              },
            },
          },
          ...arr,
        ],
        data: {
          hName: 'div',
          hProperties: {
            className:
              prefix === '[DANGER]' ? 'danger-container' : 'success-container',
          },
        },
      };

      parent.children.splice(index as number, 1, customNode);
    }
  });
};

// ----------------------------------------------------------- //
export const myPlugin1 = () => {
  return (tree: Root) =>
    visit(tree, 'text', (node: Node, index?: number, parent?: Parent) => {
      const arr: RootContent[] = [];
      const iterChild = node;
      if (!isText(iterChild)) return;

      const dangerRegExp = /\^([^^]+)\^/g;
      const successRegExp = /\$(.+?)\$/g;

      const matchedRegExp = [dangerRegExp, successRegExp].find((reg) =>
        iterChild.value.match(reg),
      );
      let matches;
      let result;

      if (matchedRegExp) {
        matches = [...iterChild.value.matchAll(matchedRegExp)].map(
          (item) => item[1],
        );
        result = iterChild.value.split(matchedRegExp);
      } else return;

      console.log(matches);

      if (matches.length === 0 || !result) return;

      const setM = new Set(matches);

      for (const item of result) {
        if (setM.has(item)) {
          const nodeItem: CustomNode = {
            type: 'customNode',
            data: {
              hName: 'span',
              hProperties: {
                className:
                  matchedRegExp === dangerRegExp ? 'dangerP' : 'successP',
              },
              hChildren: [{ type: 'text', value: item }],
            },
          };
          arr.push(nodeItem);
          setM.delete(item);
        } else {
          const nodeItem: Text = {
            type: 'text',
            value: item,
          };
          arr.push(nodeItem);
        }
      }
      if (arr.length !== 0 && parent) {
        parent.children.splice(index as number, 1, ...arr);
      }
    });
};

function findTextNodes(node: Node, char: string) {
  if (!isParent(node)) return;
  const arr: PhrasingContent[] = [];
  const allowedTypes = [
    'text',
    'emphasis',
    'strong',
    'delete',
    'inlineCode',
    'break',
    'image',
    'imageReference',
    'link',
    'linkReference',
    'html',
    'footnoteReference',
  ];

  for (let i = 1; i < node.children.length; i++) {
    const foo = node.children[i];

    if (
      foo.type === 'break' &&
      !toString(node.children[i + 1]).startsWith(char)
    )
      break;

    if (foo.type === 'text' && foo.value.startsWith(char)) {
      foo.value = foo.value.replace(char, '');
    }

    if (allowedTypes.includes(foo.type)) {
      let className = 'paragraph';
      let hName: string | undefined;

      switch (foo.type) {
        case 'emphasis':
          className = 'emphasis';
          hName = 'em';
          break;
        case 'strong':
          className = 'strong';
          hName = 'strong';
          break;
      }

      arr.push({
        ...foo,
        data: {
          hName,
          hProperties: { className },
        },
      } as PhrasingContent);
    }
  }

  return arr;
}

function isParent(node: Node): node is Parent {
  return node && typeof node === 'object' && 'children' in node;
}

function isText(node: Node): node is Text {
  return node && typeof node === 'object' && 'value' in node;
}
