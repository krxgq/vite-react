class TrieNode {
  public children: { [key: string]: TrieNode } = {}
  public isEndOfWord = false
}

export class Trie {
  private root: TrieNode = new TrieNode()

  insert(word: string): void {
    let node = this.root
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode()
      }
      node = node.children[char]
    }
    node.isEndOfWord = true
  }

  search(word: string): boolean {
    let node = this.root
    for (const char of word) {
      if (!node.children[char]) {
        return false
      }
      node = node.children[char]
    }
    return node.isEndOfWord
  }
  getRoot(): TrieNode {
    return this.root;
  }
}


// React Part (frontend):

/* const TrieNodeComponent: React.FC<{ char: string; node: TrieNode }> = ({
    char,
    node, 
  }) => (
    <details>
      <summary>
        {char}
        {node.isEndOfWord ? ' (end)' : ''}
      </summary>
      <div style={{ paddingLeft: '10px' }}>
        {Object.keys(node.children).map((childChar) => (
          <TrieNodeComponent
            key={childChar}
            char={childChar}
            node={node.children[childChar]}
          />
        ))}
      </div>
    </details>
  )
  
  // Component to render the whole Trie
  const TrieComponent: React.FC<{ trie: Trie }> = ({ trie }) => {
    const root = trie.getRoot()
  
    return (
      <div>
        {Object.keys(root.children).map((char) => (
          <TrieNodeComponent key={char} char={char} node={root.children[char]} />
        ))}
      </div>
    )
  } */
