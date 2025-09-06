import { visit } from 'unist-util-visit';
import type { Parent, Text, Paragraph, Root, PhrasingContent } from 'mdast';
import './styles.css';
import { toString } from 'mdast-util-to-string';

export const myPlugin = () => (tree: Root) => {
  visit(
    tree,
    'paragraph',
    (node: Paragraph, index?: number, parent?: Parent) => {
      const firstText = node.children[0] as Text;

      // console.log(start);
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
                prefix === '[DANGER]'
                  ? 'danger-container'
                  : 'success-container',
            },
          },
        };

        parent.children.splice(index as number, 2, customNode);
      }
    },
  );
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
