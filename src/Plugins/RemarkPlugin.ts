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
import { data } from 'react-router-dom';

interface CustomNode extends Node {
  type: 'customNode';
  value: string;
}

declare module 'mdast' {
  interface RootContentMap {
    myCustomNode: CustomNode;
  }
}

export const myPlugin = () => (tree: Root) => {
  visit(tree, (node: Node, index?: number, parent?: Parent) => {
    if (!isParent(node)) return;
    const firstText = node.children[0] as Text;

    if (!parent) return;

    if (
      toString(firstText).startsWith('[DANGER]') ||
      toString(firstText).startsWith('[SUCCESS]')
    ) {
      const prefix = toString(firstText).startsWith('[DANGER]')
        ? '[DANGER]'
        : '[SUCCESS]';
      const arr = findTextNodes(index as number, parent, '//');
      if (arr.length === 0) return;

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

      parent.children.splice(index as number, 2, customNode);
    }

    for (let i = 0; i < node.children.length; i++) {
      const arr: RootContent[] = [];
      const iterChild = node.children[i];
      if (iterChild.type === 'text' && 'value' in iterChild) {
        const matches = [...iterChild.value.matchAll(/\^([^^]+)\^/g)]
          .flat()
          .map((item, index) => {
            if (index % 2 !== 0) return item;
          })
          .filter((item) => item !== undefined);
        const result = iterChild.value.split(/\^([^^]+)\^/g);

        if (matches.length === 0) continue;
        const setM = new Set(matches);

        for (const item of result) {
          if (setM.has(item)) {
            const nodeItem: CustomNode = {
              type: 'customNode',
              value: item,
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
      }
      if (arr.length !== 0) {
        node.children.splice(i, 1, ...arr);
      }
    }
  });
};

function findTextNodes(index: number, parent: Parent, char: string) {
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

  for (let i = (index as number) + 1; i < parent.children.length; i++) {
    const foo = parent.children[i];

    if (!('children' in foo) || !toString(foo).startsWith(char)) break;

    for (const child of foo.children) {
      if (child.type === 'text' && child.value.startsWith(char)) {
        child.value = child.value.replace(char, '');
      }
    }

    for (const child of foo.children) {
      if (allowedTypes.includes(child.type)) {
        let className = 'paragraph';
        let hName: string | undefined;

        switch (child.type) {
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
          ...child,
          data: {
            hName,
            hProperties: { className },
          },
        } as PhrasingContent);
      }
    }
  }

  return arr;
}

function isParent(node: Node): node is Parent {
  return node && typeof node === 'object' && 'children' in node;
}
