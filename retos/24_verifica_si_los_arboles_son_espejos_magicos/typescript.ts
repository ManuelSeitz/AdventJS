interface Tree {
  value: string;
  left?: any;
  right?: any;
}

function isTreesSynchronized(tree1: Tree, tree2: Tree): [boolean, string] {
  const root = tree1.value;
  const checkTrees = (t1: Tree | undefined, t2: Tree | undefined): boolean => {
    if (!t1 && !t2) {
      return true;
    }

    if (!t1 || !t2) {
      return false;
    }

    if (t1.value !== t2.value) {
      return false;
    }

    return checkTrees(t1.left, t2.right) && checkTrees(t1.right, t2.left);
  };

  return [checkTrees(tree1, tree2), root];
}
